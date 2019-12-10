<template>
  <div id="app">
    <vue-horizontal-calendar :showBorderTop="false" v-on:change="dateChange1"></vue-horizontal-calendar>

    <div class="body">
      <div class="content">
        <h2 class="page-title">
          vue-horizontal-calendar
          <small>  -- Vue.js横向日历组件</small>
        </h2>
        <div class="white-block">
          <h4>安装</h4>
          <pre class="hljs"><span style="color: #5db4e6">npm install vue-horizontal-calendar -S</span></pre>
        </div>

        <div class="white-block">
          <h4>引入</h4>
          <p class="tips">
            <strong>说明：</strong>当前组件只支持局部引入
          </p>
          <div class="code" v-html="codeList[0]"></div>
        </div>

        <h2 class="preview-title">Props</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>参数名</th>
                <th width="35%">说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>是否必填</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>choosedDate</td>
                <td>初始化选中的日期；可接收格式如‘2019/12/01’或‘2019-12-01’或 Date对象实例</td>
                <td>String，Date</td>
                <td>new Date()</td>
                <td>否</td>
              </tr>
              <tr>
                <td>swipeSpace</td>
                <td>点击左右箭头，切换的日期间隔天数</td>
                <td>String，Number</td>
                <td>7</td>
                <td>否</td>
              </tr>
              <tr>
                <td>choosedDatePos</td>
                <td>当前默认选中的日期所处的位置；可选值：'left','center'</td>
                <td>String</td>
                <td>left</td>
                <td>否</td>
              </tr>
              <tr>
                <td>minDate</td>
                <td>最小日期限制；可接收格式如‘2019/12/01’或‘2019-12-01’或 Date对象实例</td>
                <td>String，Date</td>
                <td>-</td>
                <td>否</td>
              </tr>
              <tr>
                <td>maxDate</td>
                <td>最大日期限制；可接收格式如‘2019/12/01’或‘2019-12-01’或 Date对象实例</td>
                <td>String，Date</td>
                <td>-</td>
                <td>否</td>
              </tr>
              <tr>
                <td>choosedItemColor</td>
                <td>选中的日期背景色</td>
                <td>String</td>
                <td>rgb(13, 141, 224)</td>
                <td>否</td>
              </tr>
              <tr>
                <td>todayItemColor</td>
                <td>‘今天’未选中时的背景色</td>
                <td>String</td>
                <td>rgba(13, 141, 224, .1)</td>
                <td>否</td>
              </tr>
              <tr>
                <td>lang</td>
                <td>语言；可选值：'zh'(中文)，'en'(英文)</td>
                <td>String</td>
                <td>zh</td>
                <td>否</td>
              </tr>
              <tr>
                <td>sundayText</td>
                <td>星期天的中文字；仅当lang属性为zh时有效</td>
                <td>String</td>
                <td>日</td>
                <td>否</td>
              </tr>
              <tr>
                <td>showBorderTop</td>
                <td>是否显示日历组件的顶部边框</td>
                <td>Boolean</td>
                <td>true</td>
                <td>否</td>
              </tr>
              <tr>
                <td>resizeable</td>
                <td>屏幕尺寸改变时，是否重绘日历组件</td>
                <td>Boolean</td>
                <td>true</td>
                <td>否</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="preview-title">Slots</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>插槽名</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>leftIcon</td>
                <td>自定义左箭头内容</td>
              </tr>
              <tr>
                <td>rightIcon</td>
                <td>自定义右箭头内容</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="preview-title">Events</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>事件名</th>
                <th>说明</th>
                <th width="30%">回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>change</td>
                <td>选中日期变化事件，函数参数回传当前当前选中的日期数据。年，月数据都是两位数显示，个位数会自动补‘0’；星期几会根据语言设置不同而变化；</td>
                <td>Object;数据格式如下：<br>{<br><p style="padding-left:20px;">dateFormat: "2019/12/01",<br>year: "2019",<br>month: "12",<br>date: "01",<br>timestamp: 1575129600000,<br>day: "日"</p>}</td>
              </tr>
              <tr>
                <td>firstDayChange</td>
                <td>当前显示的最左侧日期变化事件(常伴随着左右按钮点击事件发生，但其他情形比如屏幕resize事件等也可能会触发此事件)，函数参数回传当前当前最左侧的日期数据。</td>
                <td>Object;数据格式同change事件返回的数据格式</td>
              </tr>
              <tr>
                <td>swipeClick</td>
                <td>左右按钮点击事件。回调函数返回点击事件类型；
                  <br>'left'：左侧按钮点击事件<br>'right'：右侧按钮点击事件
                </td>
                <td>type</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="preview-title">Change Log</h2>
        <!-- 0.2.0 -->
        <div class="white-block change-log">
          <h4> 0.2.0 
            <small class="log-date">2019-12-10</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>示例代码整理</li>
            <li>增加更新日志</li>
            <li>演示页面样式调整</li>
            <li>修改webpack配置，不再将css打包成独立文件</li>
          </ul>
          <h5>Bug</h5>
          <ul>
            <li>swipeClick事件回传参数格式修改；</li>
          </ul>
        </div>
        <!-- 0.1.0 -->
        <div class="white-block change-log">
          <h4> 0.1.0 
            <small class="log-date">2019-12-08</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>基本功能实现，上传到NPM</li>
            <li>demo页面及示例说明，发布到GitHub</li>
          </ul>
        </div>

      </div>
      <div class="demos">
        <h2 class="preview-title">示例1：<span>设置初始化选中日期</span></h2>
        <p style="text-align:center;line-height:24px;font-size:15px;">{{this.choosedDay2.dateFormat}} 星期{{this.choosedDay2.day}}</p>
        <vue-horizontal-calendar choosedDate="2019/12/01" v-on:change="dateChange2"></vue-horizontal-calendar>
        <p class="excample-text">说明：默认的初始化选中日期为‘今天’，可自定义任意日期。</p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[1]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">示例2：<span>设置可选日期范围</span></h2>
        <vue-horizontal-calendar
          minDate="2019/12/01"
          maxDate="2020/12/30"
          v-on:change="dateChange3"
        ></vue-horizontal-calendar>
        <p
          class="excample-text"
        >说明：
        <br>1，minDate：最小日期限制；
        <br>2，maxDate：最大日期限制；
        <br>3，默认无限制，可左右滑动至任意日期；
        <br>4，由于当前日历插件是宽度自适应的，所以设置‘maxDate’时，请考虑到右侧最后一个日期可能存在显示不完全的问题；你可以通过设置父组件容器的宽度，来使得最后一个日期显示完整；</p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[2]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">示例3：<span>设置左右切换的间隔天数</span></h2>
        <vue-horizontal-calendar swipeSpace="3"></vue-horizontal-calendar>
        <p class="excample-text">说明：即左右切换按钮，单次滑动的日期天数；默认值为‘7’天</p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[3]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">示例4：<span>设置语言</span></h2>
        <vue-horizontal-calendar lang="en"></vue-horizontal-calendar>
        <p class="excample-text">说明：默认'zh'(中文)；可选值：'zh','en'</p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[4]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">示例5：<span>自定义颜色、样式</span></h2>
        <vue-horizontal-calendar
          choosedItemColor="rgb(150, 0, 0)"
          todayItemColor="rgb(150, 0, 0, .1)"
          choosedDatePos="center"
          sundayText="天"
          :showBorderTop="true"
        >
          <img slot="leftIcon" src="./assets/left.jpg" style="width:20px;margin-top:11px" />
          <img slot="rightIcon" src="./assets/right.jpg" style="width:20px;margin-top:11px" />
        </vue-horizontal-calendar>
        <p class="excample-text">
          说明：
          <br />1，choosedItemColor：选中的日期背景色；
          <br />2，todayItemColor：‘今天’未选中时的背景色；
          <br />3，sundayText：'周日'的文字自定义（仅在lang='zh'时生效）；
          <br />4，choosedDatePos：初始化选中日期所在的位置；
          <br />5，showBorderTop：是否显示日历条顶部的border；
          <br />6，通过slot自定义左右按钮的样式；
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[5]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">示例6：<span>用周历的方式展示</span></h2>
        <h4 class="week-title">{{currentFirstDay.year + '年' + currentFirstDay.month + '月'}}</h4>
        <vue-horizontal-calendar
          style="width:410px;margin: 0 auto;"
          swipeSpace="7"
          :choosedDate="getThisMondayDate"
          sundayText="天"
          :showBorderTop="false"
          :resizeable="false"
          v-on:change="dateChange5"
          v-on:swipeClick="arrowClick"
          v-on:firstDayChange="firstDayChange"
        ></vue-horizontal-calendar>
        <p class="excample-text">
          说明：
          <br />1，将组件宽度设为410px；滑动间隔日期设置为7天；周历的外观就做好了；
          <br />2，自定义一个日历头部的样式，用于显示当前年月数据；
          <br />3，需要传入当前日期所在周的'周一'的日期作为choosedDate数据，因此需要动态计算该值；
          <br />4，通过组件提供的'firstDayChange'事件，动态变更当前周所在的年月数据(该事件会返回当前最左侧日期的数据)；
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[6]"></div>

      </div>
    </div>
  </div>
</template>

<script>
import VueHorizontalCalendar from "./components/index";
import codeSample from "./assets/code-sample.js";
import "./assets/code.css";

export default {
  name: "app",
  components: {
    VueHorizontalCalendar
  },
  data() {
    return {
      codeList: codeSample,

      choosedDay1: {
        dateFormat: ""
      },
      choosedDay2: {
        dateFormat: ""
      },
      choosedDay3: {
        dateFormat: ""
      },
      choosedDay4: {
        dateFormat: ""
      },
      choosedDay5: {
        dateFormat: ""
      },

      currentFirstDay: {
        dateFormat: "",
        year: "",
        month: "",
        day: ""
      }
    };
  },
  methods: {
    dateChange1(day) {
      this.choosedDay1 = day;
    },
    dateChange2(day) {
      this.choosedDay2 = day;
    },
    dateChange3(day) {
      this.choosedDay3 = day;
    },
    dateChange4(day) {
      this.choosedDay4 = day;
    },
    dateChange5(day) {
      this.choosedDay5 = day;
    },

    firstDayChange(day) {
      this.currentFirstDay = day;
    },
    arrowClick(type){
      console.log(type + ' btn has been clicked')
    },
    // 打开、关闭 代码演示
    toggleCode(e) {
      let dom = e.currentTarget;
      if (dom.nextElementSibling.style.display != "block") {
        dom.nextElementSibling.style.display = "block";
      } else {
        dom.nextElementSibling.style.display = "none";
      }
    }
  },
  computed: {
    // 获取当前日期所在的周‘周一’的日期
    getThisMondayDate() {
      let today = new Date();
      let today_weekCode = today.getDay() == 0 ? 7 : today.getDay();
      let monday_timestamp =
        today.getTime() - (today_weekCode - 1) * 1000 * 3600 * 24;
      let monday = new Date(monday_timestamp);
      return monday.getFullYear() + "/" + (monday.getMonth() + 1) + "/" + monday.getDate();
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: #fbf9f7;
}
::-webkit-scrollbar-button:vertical:decremen,
::-webkit-scrollbar-button:vertical:end:decrement,
::-webkit-scrollbar-button:vertical:increment,
::-webkit-scrollbar-button:vertical:start:increment,
::-webkit-scrollbar-button:horizontal:decremen,
::-webkit-scrollbar-button:horizontal:end:decrement,
::-webkit-scrollbar-button:horizontal:increment,
::-webkit-scrollbar-button:horizontal:start:increment {
  display: none;
}
::-webkit-scrollbar-thumb:vertical,::-webkit-scrollbar-thumb:horizontal{
  background-color: #ccc;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:vertical:hover,::-webkit-scrollbar-thumb:horizontal:hover {
  background-color: #aaa;
}
div {
  box-sizing: border-box;
}
#app {
  font-family: "Microsoft Yahei", "Helvetica", "Lato", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;

  .body {
    height: 100%;
    overflow-y: auto;
  }
  .content {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    padding: 30px 30px 180px;
    background-color: #fafafa;
  }
  .demos {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    padding: 30px 20px 100px;

    .preview-title {
      font-size: 16px;
      font-weight: 600;
      span{
        font-weight: 500;
        font-size: 15px;
      }
    }
    .excample-text {
      color: #999;
      font-size: 14px;
      margin: 10px 0 0;
    }
  }
  .api-table {
    width: 100%;

    thead tr {
      height: 40px;
      color: #666;
      line-height: 32px;
      background-color: #e1e3e4;
      font-size: 13px;
      font-weight: 700;
      text-align: left;

      th{
        padding: 5px 10px;
      }
    }

    tbody tr {
      height: 40px;
      color: #666;
      line-height: 20px;
      font-size: 13px;
      font-weight: 500;
      text-align: left;

      td {
        min-width: 60px;
        padding: 5px 10px;
      }

      td:first-child {
        color: rgb(99, 172, 214);
        font-size: 14px;
      }
    }

    tr th:first-child,
    tr td:first-child {
      padding-left: 10px;
    }
  }

  .font-bold {
    font-weight: bold;
  }
  .page-title {
    margin: 0 0 30px;
    color: #333;
    font-weight: normal;
    line-height: 1.5;
    font-size: 30px;
    cursor: default;

    small {
      margin-left: 10px;
      font-size: 16px;
    }
  }

  .white-block {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 12px #ebedf0;

    h4 {
      color: #666;
      margin-bottom: 24px;
      font-weight: 500;
      font-size: 18px;
    }
    code {
      position: relative;
      display: block;
      overflow-x: auto;
      color: #455a64;
      font-size: 13px;
      font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
      line-height: 24px;
      white-space: pre-wrap;
      word-break: break-all;
    }
    p,
    span {
      font-weight: 500;
    }
    .hljs-comment {
      color: #999;
    }

    .tips {
      font-size: 14px;
      line-height: 24px;
      margin: 5px 0 5px;
    }

    .code-toggle {
      color: #991200;
      font-size: 12px;
      font-weight: bold;
      display: block;
      margin: 15px 0 5px;
      cursor: pointer;
    }

    .code {
      display: block;
      background-color: #efefef;
      color: #2686ff;
      font-size: 14px;
      border-radius: 6px;
      overflow: auto;
      line-height: 24px;
    }

    strong {
      font-weight: bold;
      color: #222;
    }
  }
  .preview-title {
    color: #222;
    font-weight: 500;
    margin: 20px 0;

    &:first-child{
      margin-top: 20px;
    }
  }
  .label {
    display: block;
    margin: 10px 15px;
    font-size: 13px;
    color: #888;
    font-weight: 500;
  }
  .week-title {
    text-align: center;
    border: 1px solid #f2f2f2;
    width: 410px;
    margin: 0 auto;
    line-height: 26px;
    color: #333;
    font-size: 15px;
    box-sizing: border-box;
  }

  .label-text {
    background-color: #fff2f1;
    font-style: normal;
  }

  .code-toggle {
    width: 80px;
    color: #a2d4ff;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    font-weight: 500;
    margin: 5px 0 5px;
    display: block;
    cursor: pointer;
    border-radius: 2px;
    border: 1px dashed #a2d4ff;
    user-select: none;
  }

  .code {
    display: none;
    color: #2686ff;
    font-size: 14px;
    border-radius: 6px;
    overflow: auto;
  }

  .split-line{
    width: calc(100% + 40px);
    height: 8px;
    background: #fafafa;
    margin: 40px 0;
    margin-left: -20px;
  }

  .change-log{
  h4{
    font-size: 24px;
    font-weight: 500;
  }
  .log-date{
    font-size: 12px;
    font-weight: 500;
    color: #888;
    margin-left: 10px;
    background-color: #f7f7f7;
  }
  h5{
    font-size: 16px;
    font-weight: 500;
    color: #0d8de0;
    margin: 20px 0 5px;
  }
  ul,li{
    list-style: disc inside;
    color: #888;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
  }
}


}
</style>
