<template>
  <div
    class="horizontal-calendar"
    v-bind:style="{'border-top':showBorderTop?'1px solid #f2f2f2':'none'}"
  >
    <span class="left-arrow" v-on:click="dateFlip(-1)">
      <slot name="leftIcon" v-if="this.$slots['leftIcon']"></slot>
      <svg v-else class="icon" aria-hidden="true">
        <use xlink:href="#jac-left" />
      </svg>
    </span>
    <div class="date-list">
      <div
        class="date-list-scroll"
        :style="{'transform': 'translateX('+translateX+'px)','transition-duration': transitionDuration}"
      >
        <div
          class="date-item"
          v-for="(day,index) in dateList"
          v-bind:key="index"
          v-on:click="changeChoosedDay(day)"
          v-bind:class="{'choosed-day': day.dateFormat == choosedDay.dateFormat,'today':day.dateFormat == today.dateFormat && lang == 'zh'}"
          v-bind:style="{'background-color': day.dateFormat == choosedDay.dateFormat?choosedItemColor:day.dateFormat == today.dateFormat?todayItemColor:''}"
        >
          <div>
            <p class="date-item-day">{{day.day}}</p>
            <p
              class="date-item-date"
              v-if="day.dateFormat == today.dateFormat && lang == 'zh'"
              v-bind:style="{'color': day.dateFormat == choosedDay.dateFormat?'#fff':day.dateFormat == today.dateFormat?choosedItemColor:''}"
            >今</p>
            <p class="date-item-date" v-else>{{day.date}}</p>
          </div>
          <div class="first-day" v-if="day.date == 1">
            <p>{{day.month}}</p>
          </div>
        </div>
      </div>
    </div>
    <span class="right-arrow" v-on:click="dateFlip(1)">
      <slot name="rightIcon" v-if="this.$slots['rightIcon']"></slot>
      <svg v-else class="icon" aria-hidden="true">
        <use xlink:href="#jac-right" />
      </svg>
    </span>
  </div>
</template>
<script>
import "@/assets/iconfont.js";

export default {
  name: "vue-horizontal-calendar",
  props: {
    // 默认选中的日期, 今天； 可接收格式如 ‘2019/12/01’ 或 ‘2019-12-01’ 标准UTC格式时间
    choosedDate: {
      type: [String, Date],
      required: false,
      default: () => {
        return new Date();
      }
    },
    //点击左右箭头，切换的日期间隔天数
    swipeSpace: {
      type: [String, Number],
      required: false,
      default: 7
    },
    // 当前默认选中的日期所处的位置，'left，center'，'right'，默认左
    choosedDatePos: {
      type: String,
      required: false,
      default: "left"
    },
    // 最小日期，可接收格式如 ‘2019/12/01’ 或 ‘2019-12-01’ 或 标准UTC格式时间
    minDate: {
      type: [String, Date],
      required: false,
      default: ""
    },
    // 最大日期，可接收格式如 ‘2019/12/01’ 或 ‘2019-12-01’ 或 标准UTC格式时间
    maxDate: {
      type: [String, Date],
      required: false,
      default: ""
    },
    // 选中的日期背景色
    choosedItemColor: {
      type: String,
      required: false,
      default: "rgb(13, 141, 224)"
    },
    // ‘今天’未选中时的背景色
    todayItemColor: {
      type: String,
      required: false,
      default: "rgba(13, 141, 224,.1)"
    },
    // 星期天的中文字，默认‘日’，可自定义，如‘天’
    sundayText: {
      type: String,
      required: false,
      default: "日"
    },
    // 是否显示日历组件的顶部边框
    showBorderTop: {
      type: Boolean,
      required: false,
      default: true
    },
    // 屏幕尺寸改变时，是否重绘日历组件
    resizeable: {
      type: Boolean,
      required: false,
      default: true
    },
    // 语言；可选值：zh(中文)，en(英文)
    lang: {
      type: String,
      required: false,
      default: "zh"
    }
  },
  data() {
    return {
      // 每一个日期对象的数据结构如下
      // {
      //   dateFormat: "2019/07/20",
      //   year: "2019",
      //   month: "07",
      //   date: "20",
      //   timestamp: 1564046915797,
      //   day: "六"
      // }

      firstDay: {}, //当前显示的第一个日期
      visibleDay: "", // 计算屏幕可放置的日期方块的数量
      changeCount: Number(this.swipeSpace), //点击左右箭头，增量的日期数量，默认为7天
      choosedDay: {}, // 当前选中的日期
      dateList: [], // 当前的日期列表
      today: {}, // 今天

      // 动画数据
      translateX: -this.changeCount * 50,
      transitionDuration: "300ms",
      domWidth: 0, // 日历组件宽度

      swipeLeftMore: true, // 是否还能左滑
      swipeRightMore: true // 是否还能右滑
    };
  },
  mounted() {
    this.init();
    // 触发change事件
    this.$emit("change", this.choosedDay);

    /**
     * @@author jacques
     * @@date 2019.12.06
     * @@desc 监听屏幕宽度变化事件，动态更新日期条
     * 因为onresize事件在一次拖拽行为中，会调用n多次；为了不必要的数据更替和界面渲染，此处定义a,b两个变量，通过延时判断，来消除这种无谓的消耗
     * */
    if (this.resizeable) {
      let a = 1;
      window.onresize = () => {
        a++;
        let b = a;
        setTimeout(() => {
          if (b == a) {
            this.init();
          }
        }, 200);
      };
    }
  },
  methods: {
    init() {
      // 根据屏幕宽度，判断可显示的日期方块的数量
      this.domWidth = this.$el.scrollWidth;
      let n = (this.domWidth - 60) / 50;
      // 可显示日期数量 = 可完全显示的数量+1 （除非div的宽度刚刚好被50整除）
      if (n % 1 != 0) {
        n = parseInt(n) + 1;
      }
      this.visibleDay = n;

      // 如果单次滑动的天数，超过可显示的天数，则限制最大值为可显示天数；
      if(this.changeCount > this.visibleDay){
        this.changeCount = this.visibleDay;
      }

      // "今天"
      this.today = this.formatOneDay(new Date());
      // "当前选中的日期"
      this.choosedDay = this.formatOneDay(this.choosedDate);

      // 第一天
      let firstDay = this.formatOneDay(this.choosedDate);
      if (this.choosedDatePos === "center") {
        let ts1 =
          firstDay.timestamp -
          parseInt(this.visibleDay / 2) * 1000 * 60 * 60 * 24;
        this.firstDay = this.formatOneDay(ts1);
      } else if(this.choosedDatePos === "right"){
        let ts2 =
          firstDay.timestamp -
          parseInt(this.visibleDay-1) * 1000 * 60 * 60 * 24;
          this.firstDay = this.formatOneDay(ts2);
      } else {
        this.firstDay = firstDay;
      }
      this.creatList();

      // 事件回调: 当前显示的第一天的数据
      this.$emit("firstDayChange", this.firstDay);
    },
    // 初始化，生成一列日期
    creatList() {
      let list = [];
      let firstDayTime = this.firstDay.timestamp;
      for (let i = 0; i < this.visibleDay; i++) {
        let timestamp = firstDayTime + 1000 * 60 * 60 * 24 * i; //用第一天的时间戳+24小时*i天
        let info = this.formatOneDay(new Date(timestamp));
        list.push(info);
      }
      this.dateList = list;
      this.translateX = 0;

      // 重置左右滑动限制
      this.swipeLeftMore = true;
      this.swipeRightMore = true;
    },
    // 日期点击事件
    changeChoosedDay(day) {
      this.choosedDay = day;
      this.$emit("change", day);
    },
    // 左右滑动翻页 1：往后加载7天，-1：往前加载7天
    dateFlip(type) {
      // 数据变更前的部分数据
      let beforeChangeX = this.translateX;
      let beforeChangeLen = this.dateList.length;

      // 左边按钮
      if (type === -1) {
        // 1，如果此时translateX< 单次滚动的日期长度，说明左侧有可滚动的日期，不需要生成更多日期
        if (this.translateX <= -50 * this.changeCount) {
          this.translateX = this.translateX + 50 * this.changeCount;

          // 2，如果由于最小日期限制，加载已经到头，则不再加载新的日期,直接滚动到最左边
        } else if (!this.swipeLeftMore) {
          this.translateX = 0;
          this.$emit("swipeToEnd", "left");
        } else {
          //,3，以上条件都不满足，则说明左侧已经没有可展示的日期了，要新增数据
          let fdt = this.dateList[0].timestamp;
          let list = [];
          let i;
          for (i = 0; i < this.changeCount; i++) {
            //用数组第一项的时间戳 - 24小时*(i+1)天
            let timestamp = fdt - 1000 * 60 * 60 * 24 * (i + 1);
            let info = this.formatOneDay(new Date(timestamp));
            // 如果存在最小日期限制,且当前这个日期小于最小限制，则停止循环
            if (this.minDate && info.timestamp < this.minDateTimestamp) {
              this.swipeLeftMore = false;
              break;
            } else {
              list.unshift(info);
            }
          }
          // 消除过渡效果，插入新日期，变更x轴位置，以抵消插入数据带来的位置变化
          this.transitionDuration = "0ms";
          this.dateList.unshift(...list);
          // i 表示新增的日期数量； 因为循环可能会被最大最小值中断，所以 i 相对于 changeCount 更准确
          this.translateX = this.translateX - 50 * i;

          // 异步重置过渡效果，位移div
          setTimeout(() => {
            this.transitionDuration = "300ms";
            this.translateX = this.translateX + 50 * i;
          }, 1);
        }
        // 右边按钮
      } else if (type === 1) {
        // 判断右侧是否有可滚动的日期，有的话则直接滚动
        let hasSpace =
          this.dateList.length * 50 - this.domWidth + this.translateX;

        // 1，有完整可滚动的日期，则直接滚动
        if (hasSpace > 50 * this.changeCount) {
          this.translateX = this.translateX - 50 * this.changeCount;
        } else {
          // 2，如果由于最大日期限制，加载已经到头，则不再加载新的日期; 直接滚动到末端；
          if (!this.swipeRightMore) {
            this.translateX = (this.dateList.length - this.visibleDay) * -50;
            this.$emit("swipeToEnd", "right");
            return;
          }
          // 3，以上都不满足，则需要生成新日期，然后滚动
          let fdt = this.dateList[this.dateList.length - 1].timestamp;
          let i;
          for (i = 0; i < this.changeCount; i++) {
            //用数组第一天的时间戳 + 24小时*(i+1)天
            let timestamp = fdt + 1000 * 60 * 60 * 24 * (i + 1);
            let info = this.formatOneDay(new Date(timestamp));
            // 如果存在最大日期限制,且当前日期大于最大限制，则停止循环
            if (this.maxDate && info.timestamp > this.maxDateTimestamp) {
              this.swipeRightMore = false;
              break;
            } else {
              this.dateList.push(info);
            }
          }
          // 如果i小于固定移动单位，则说明由于最大日期限制，最后位移的单位并不完全充足；此时i的值，受最小日期和屏幕宽度以及移动距离影响，是不定的值，因此只能借助以下计算方式。
          if (i < this.changeCount) {
            this.translateX = (this.dateList.length - this.visibleDay) * -50;
          } else {
            this.translateX = this.translateX - 50 * i;
          }
        }
      }

      /**
       * 计算当前显示的第一天 的变化
       * 因为当前function执行中存在异步过程，且动画执行也需要时间，因此延时执行
       */
      setTimeout(() => {
        // 数据变更后的部分数据
        let afterChangeX = this.translateX;
        let afterChangeLen = this.dateList.length;
        // 如果x前后都相等，则计算当前日期列表的长度变化
        if (beforeChangeX === afterChangeX) {
          let changeDay = afterChangeLen - beforeChangeLen;
          // 如果点击之后日历没变化(当最大或最小值存在的时候，就可能出现此种情况)，则不往下执行
          if (changeDay === 0) return;
          this.firstDay = this.formatOneDay(
            this.formatDateTime(
              this.firstDay.timestamp - 3600 * 1000 * 24 * changeDay
            )
          );
        } else {
          let changeDay = (afterChangeX - beforeChangeX) / 50;
          this.firstDay = this.formatOneDay(
            this.formatDateTime(
              this.firstDay.timestamp - 3600 * 1000 * 24 * changeDay
            )
          );
        }
        // 事件回调: 当前显示的第一天的数据
        this.$emit("firstDayChange", this.firstDay);
      }, 300);

      // 事件回调，返回滑动事件类型
      this.$emit("swipeClick", type===1?'right':'left');
    },
    // 格式化单个日期的数据
    formatOneDay(day) {
      let timestamp = new Date(day).getTime();
      let date = this.formatDateTime(timestamp); // 2019/06/01
      let dateArray = date.split("/"); // [2019,06,01]
      // 去掉补位的0
      for (const key in dateArray) {
        if (dateArray[key].indexOf("0") == 0) {
          dateArray[key] = dateArray[key].substr(1, 1);
        }
      }
      return {
        dateFormat: date,
        year: dateArray[0],
        month: dateArray[1],
        date: dateArray[2],
        timestamp: new Date(date).getTime(),
        day: this.getWeekName(new Date(timestamp).getDay())
      };
    },
    // 返回“星期”的文字
    getWeekName(day) {
      const dirt = {
        0: this.sundayText,
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
      };
      const dirt_en = {
        0: "Su",
        1: "Mo",
        2: "Tu",
        3: "We",
        4: "Th",
        5: "Fr",
        6: "Sa"
      };
      // 如果是英文显示
      if (this.lang === "en") {
        return dirt_en[day];
      }
      return dirt[day];
    },
    // 输入时间戳，返回 YY/MM/DD 日期格式
    formatDateTime(timestamp) {
      if (!timestamp) return "";
      timestamp = parseInt(timestamp); // 防止传入字符串类型
      let fdt = new Date(timestamp);
      let arr = [fdt.getMonth() + 1, fdt.getDate()];
      for (let key in arr) {
        if (arr[key] < 10) {
          arr[key] = "0" + arr[key];
        }
      }
      arr.unshift(fdt.getFullYear());
      return arr[0] + "/" + arr[1] + "/" + arr[2];
    }
  },
  computed: {
    // 最小日期的0点时间戳
    minDateTimestamp() {
      if (this.minDate) {
        let day = this.formatOneDay(this.minDate);
        return day.timestamp;
      }
      return null;
    },
    // 最大日期的0点时间戳
    maxDateTimestamp() {
      if (this.maxDate) {
        let day = this.formatOneDay(this.maxDate);
        return day.timestamp;
      }
      return null;
    }
  },
  watch:{
    lang(n){
      this.lang = n;
      this.creatList();
    }
  }
};
</script>

<style lang="scss">
.horizontal-calendar {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  box-sizing: border-box;
  user-select: none;

  * {
    margin: 0;
    padding: 0;
  }
  div {
    box-sizing: border-box;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 16px;
    color: #999;
  }

  .date-list {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 60px);
    overflow: hidden;
    position: relative;
  }
  .date-list-scroll {
    width: 60000px;
    height: 50px;
    position: relative;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
  }
  .date-item {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 5px 2px;
    line-height: 20px;
    border-right: 1px solid #f2f2f2;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &:hover{
      background-color: #f8f8f8;
    }
  }
  .first-day {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACoF8tmAAACJklEQVRoBd2ZjXHDIAxGk1536TSdNtM00zSyDw5sBJKQxA93sd1IH4/nOE6bPh+Px+/ngY4vtHIWXrWGF/RgDUcRa4jFUkNWvDbcitAAo6r5rDVgBjAr6n+so5SMC7wWYwHmTYtZAYowqjpnS2Fb9Sz0p0+9vtOfiMdx7ZxwDAUIJXwLUcJoqBZuhkphciiEe16q7PIJE1L36CXdmuBQTC/cViDU47nhhmMQZuKEsyAnfAtSw8UgJYwGW+FqsBZuBrEwKVgKk4PXMCsIYRiyW+cn2PWWPNCyjejOK0OdqXhaKTfeHlDIRmB4whp8A1qDUaAVuAnUBpOBWmA2sBcsBkrB3UAuWA1IBasDW2AzIAY2BwYw7MUfbekk3ONRH4tvzm98XCms//0p/HmDDyisyBMcoZ7gDOoFvkE9wEWoNRiFWoKrUCtwE2oBJkG1wWSoJpgF1QKzoRpgEbQXLIb2gLugUnA3VAJWgXLBalAOWBVKBatDKWATaAtsBq2BTaEY2BxaArtAr2A3aAp2hQIYxs+5892O+mvR1/KkHa+q9VeZI8SuzOzy3Vk4Ew1nYUfhouiOwlXRnYRJojsIs0RXFhaJrijcJbqSsIroCsKqojMLm4jOKGwqOpOwi+gMwq6iI4WHiI4QHirqKTyFqIfwVKKWwlOKWghPLaopvISohvBSoj3CS4pKhJcW5QhvIUoR3kq0JrylaEl4a9EgDPsh/8VLF+B5/A/jzYX1v2DlFgAAAABJRU5ErkJggg==) no-repeat;
    background-size: 90% 90%;
    p {
      color: #fff;
      font-size: 12px;
      width: 54%;
      text-align: center;
      line-height: 16px;
      transform: scale(0.9);
    }
  }
  .date-item-date {
    color: #212121;
    font-size: 15px;
    font-weight: 600;
  }
  .date-item-day {
    color: #999;
    font-size: 13px;
    font-weight: 500;
  }
  .today {
    .date-item-date {
      color: #870000;
    }
  }
  //   选中的日期样式
  .choosed-day {

    .date-item-date,
    .date-item-day {
      color: #fff;
    }
  }
  .today-not-choosed {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin: 6px;
    background-color: rgba(153, 153, 153, 0.3);
    color: #870000;
    font-size: 16px;
    text-align: center;
    line-height: 28px;
    font-weight: 600;
  }

  .left-arrow,
  .right-arrow {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    width: 30px;
    height: 100%;
    line-height: 50px;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    background-color: #f9f9f9;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all .1s;

    &:hover{
      background-color: #f5f5f5;
    }
  }
  .month {
    flex: 0 0 19px;
    height: 50px;
    background-color: #aaa;
    color: #fff;
    border-right: 1px solid #f2f2f2;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    display: flexbox;
    box-sizing: border-box;
    padding: 5px 0;
  }
}
</style>


