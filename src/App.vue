<template>
  <div id="app">
    <div class="body">
      <!-- documents -->
      <div class="content">
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/jacques33/vue-horizontal-calendar"
        >
          <img src="./assets/github.jpg" alt="github" width="25" />
        </a>
        <a class="lang-icon" @click="changeLanguage">{{lang}}</a>
        <h2 class="page-title">
          vue-horizontal-calendar
          <small>-- {{currLang.small_title}}</small>
        </h2>
        <!-- install -->
        <div class="white-block">
          <h4>{{currLang.install}}</h4>
          <pre class="hljs"><span style="color: #5db4e6">npm install vue-horizontal-calendar -S</span></pre>
        </div>
        <!-- import -->
        <div class="white-block">
          <h4>{{currLang.import}}</h4>
          <p class="tips">
            <strong>{{currLang.description}}：</strong>
            {{currLang.import_detail}}
          </p>
          <div class="code" v-html="codeList[0]"></div>
        </div>
        <!-- props -->
        <h2 class="preview-title">Props</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>{{currLang.prop}}</th>
                <th width="35%">{{currLang.description}}</th>
                <th>{{currLang.type}}</th>
                <th>{{currLang.default}}</th>
                <th>{{currLang.required}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>choosedDate</td>
                <td>{{currLang.propDesc1}}</td>
                <td>String，Date</td>
                <td>new Date()</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>swipeSpace</td>
                <td>{{currLang.propDesc2}}</td>
                <td>String，Number</td>
                <td>7</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>choosedDatePos</td>
                <td>{{currLang.propDesc3}}</td>
                <td>String</td>
                <td>left</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>minDate</td>
                <td>{{currLang.propDesc4}}</td>
                <td>String，Date</td>
                <td>-</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>maxDate</td>
                <td>{{currLang.propDesc5}}</td>
                <td>String，Date</td>
                <td>-</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>choosedItemColor</td>
                <td>{{currLang.propDesc6}}</td>
                <td>String</td>
                <td>rgb(13, 141, 224)</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>todayItemColor</td>
                <td>{{currLang.propDesc7}}</td>
                <td>String</td>
                <td>rgba(13, 141, 224, .1)</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>lang</td>
                <td>{{currLang.propDesc8}}</td>
                <td>String</td>
                <td>zh</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>sundayText</td>
                <td>{{currLang.propDesc9}}</td>
                <td>String</td>
                <td>日</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>showBorderTop</td>
                <td>{{currLang.propDesc10}}</td>
                <td>Boolean</td>
                <td>true</td>
                <td>{{currLang.falseText}}</td>
              </tr>
              <tr>
                <td>resizeable</td>
                <td>{{currLang.propDesc11}}</td>
                <td>Boolean</td>
                <td>true</td>
                <td>{{currLang.falseText}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- slots -->
        <h2 class="preview-title">Slots</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>{{currLang.slot}}</th>
                <th>{{currLang.description}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>leftIcon</td>
                <td>{{currLang.propDesc12}}</td>
              </tr>
              <tr>
                <td>rightIcon</td>
                <td>{{currLang.propDesc13}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- events -->
        <h2 class="preview-title">Events</h2>
        <div class="white-block">
          <table class="api-table" border="0" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>{{currLang.event}}</th>
                <th>{{currLang.description}}</th>
                <th width="38%">{{currLang.cbArg}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>change</td>
                <td>{{currLang.propDesc14}}</td>
                <td>
                  Object;{{currLang.propDesc15}}
                  <br />{
                  <br />
                  <p style="padding-left:20px;">
                    dateFormat: "YYYY/MM/DD",
                    <br />year: "YYYY",
                    <br />month: "MM",
                    <br />date: "DD",
                    <br />timestamp: 1575129600000,
                    <br />
                    day: "{{lang=="English"?'日':'Su'}}"
                  </p>}
                </td>
              </tr>
              <tr>
                <td>firstDayChange</td>
                <td>{{currLang.propDesc16}}</td>
                <td>Object; {{currLang.propDesc17}}</td>
              </tr>
              <tr>
                <td>swipeClick</td>
                <td v-html="currLang.propDesc18"></td>
                <td v-html="currLang.propDesc19"></td>
              </tr>
              <tr>
                <td>swipeToEnd</td>
                <td v-html="currLang.propDesc20"></td>
                <td v-html="currLang.propDesc21"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- change log -->
        <h2 class="preview-title">Change Log</h2>
        <!-- 0.6.0 -->
        <div class="white-block change-log">
          <h4>
            0.6.0
            <small class="log-date">2020-02-14</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>新增滑动到最大/最小日期的回调事件</li>
            <li>choosedDatePos属性，增加'right'属性值</li>
          </ul>
        </div>
        <!-- 0.5.0 -->
        <div class="white-block change-log">
          <h4>
            0.5.0
            <small class="log-date">2020-02-14</small>
          </h4>
          <h5>Bug</h5>
          <ul>
            <li>解决依赖的corejs安装报错的问题；</li>
            <li>去掉部分不必要的依赖包</li>
          </ul>
        </div>
        <!-- 0.4.0 -->
        <div class="white-block change-log">
          <h4>
            0.4.0
            <small class="log-date">2019-12-11</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>日期格子和左右箭头区域，新增鼠标hover效果</li>
          </ul>
        </div>
        <!-- 0.3.0 -->
        <div class="white-block change-log">
          <h4>
            0.3.0
            <small class="log-date">2019-12-11</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>新增English版本示例和文档说明</li>
            <li>增加Github链接</li>
          </ul>
          <h5>Bug</h5>
          <ul>
            <li>当设置滑动间隔天数，大于可显示的最大日期数时的样式bug；</li>
          </ul>
        </div>
        <!-- 0.2.0 -->
        <div class="white-block change-log">
          <h4>
            0.2.0
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
            <li>swipeClick事件回传参数格式问题；</li>
          </ul>
        </div>
        <!-- 0.1.0 -->
        <div class="white-block change-log">
          <h4>
            0.1.0
            <small class="log-date">2019-12-08</small>
          </h4>
          <h5>Feature</h5>
          <ul>
            <li>基本功能实现，上传到NPM</li>
            <li>demo页面及示例说明，发布到GitHub</li>
          </ul>
        </div>
      </div>
      <!-- demos -->
      <div class="demos">
        <h2 class="preview-title">
          {{currLang.example}}1：
          <span>{{currLang.eg1}}</span>
        </h2>
        <p
          style="text-align:center;line-height:24px;font-size:15px;"
        >{{this.choosedDay2.dateFormat}} {{currLang.week}}{{this.choosedDay2.day | weekName}}</p>
        <vue-horizontal-calendar
          choosedDate="2019/12/01"
          :lang="lang=='English'?'zh':'en'"
          v-on:change="dateChange2"
        ></vue-horizontal-calendar>
        <p class="excample-text">
          <span class="strong-text">{{currLang.description}}：</span>
          {{currLang.eg1_detail}}
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[1]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">
          {{currLang.example}}2：
          <span>{{currLang.eg2}}</span>
        </h2>
        <vue-horizontal-calendar
          :lang="lang=='English'?'zh':'en'"
          choosedDate="2019/12/10"
          choosedDatePos="center"
          minDate="2019/12/01"
          maxDate="2019/12/30"
          v-on:change="dateChange3"
          v-on:swipeToEnd="swipeToEnd"
        ></vue-horizontal-calendar>
        <p class="excample-text">
          <span class="strong-text">{{currLang.description}}：</span>
          {{currLang.eg2_detail}}
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[2]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">
          {{currLang.example}}3：
          <span>{{currLang.eg3}}</span>
        </h2>
        <vue-horizontal-calendar swipeSpace="3" :lang="lang=='English'?'zh':'en'"></vue-horizontal-calendar>
        <p class="excample-text">
          <span class="strong-text">{{currLang.description}}：</span>
          {{currLang.eg3_detail}}
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[3]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">
          {{currLang.example}}4：
          <span>{{currLang.eg4}}</span>
        </h2>
        <vue-horizontal-calendar :lang="lang=='English'?'en':'zh'"></vue-horizontal-calendar>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="currLangDemo"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">
          {{currLang.example}}5：
          <span>{{currLang.eg5}}</span>
        </h2>
        <vue-horizontal-calendar
          :lang="lang=='English'?'zh':'en'"
          choosedItemColor="rgb(150, 0, 0)"
          todayItemColor="rgb(150, 0, 0, .1)"
          choosedDatePos="center"
          sundayText="天"
          :showBorderTop="true"
        >
          <img slot="leftIcon" src="./assets/left.png" style="width:20px;position:relative;top:6px;" />
          <img slot="rightIcon" src="./assets/right.png" style="width:20px;position:relative;top:6px;" />
        </vue-horizontal-calendar>
        <p class="excample-text">
          <span class="strong-text">{{currLang.description}}：</span>
          <br />
          <span class="text-black">1.</span>
          <span class="text-blue">choosedItemColor：</span>
          {{currLang.eg5_detail[0]}}；
          <br />
          <span class="text-black">2.</span>
          <span class="text-blue">todayItemColor：</span>
          {{currLang.eg5_detail[1]}}；
          <br />
          <span class="text-black">3.</span>
          <span class="text-blue">sundayText：</span>
          {{currLang.eg5_detail[2]}}；
          <br />
          <span class="text-black">4.</span>
          <span class="text-blue">choosedDatePos：</span>
          {{currLang.eg5_detail[3]}}；
          <br />
          <span class="text-black">5.</span>
          <span class="text-blue">showBorderTop：</span>
          {{currLang.eg5_detail[4]}}；
          <br />
          <span class="text-black">6.</span>
          {{currLang.eg5_detail[5]}}；
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[6]"></div>
        <div class="split-line"></div>

        <h2 class="preview-title">
          {{currLang.example}}6：
          <span>{{currLang.eg6}}</span>
        </h2>
        <h4
          class="week-title"
        >{{currentFirstDay.year + currLang.year + currentFirstDay.month + currLang.month}}</h4>
        <vue-horizontal-calendar
          style="width:410px;margin: 0 auto;"
          swipeSpace="7"
          :choosedDate="getThisMondayDate"
          sundayText="天"
          :showBorderTop="false"
          :resizeable="false"
          :lang="lang=='English'?'zh':'en'"
          v-on:change="dateChange5"
          v-on:swipeClick="arrowClick"
          v-on:firstDayChange="firstDayChange"
        ></vue-horizontal-calendar>
        <p class="excample-text">
          <span class="strong-text">{{currLang.description}}：</span>
          <br />
          <span class="text-black">1.</span>
          {{currLang.eg6_detail[0]}}
          <br />
          <span class="text-black">2.</span>
          {{currLang.eg6_detail[1]}}
          <br />
          <span class="text-black">3.</span>
          {{currLang.eg6_detail[2]}}
          <br />
          <span class="text-black">4.</span>
          {{currLang.eg6_detail[3]}}
        </p>
        <a class="code-toggle" @click="toggleCode($event)">view code</a>
        <div class="code" v-html="codeList[7]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VueHorizontalCalendar from "./components/index";
import codeSample from "./assets/code-sample.js";
import langBag from "./assets/lang.js";
import "./assets/code.css";

export default {
  name: "app",
  components: {
    VueHorizontalCalendar
  },
  data() {
    return {
      // 语言
      lang: "English",
      chinese: langBag.zh,
      english: langBag.en,
      currLang: langBag.zh,

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

    swipeToEnd(direction) {
      if(direction === "left"){
        alert("已滑动到最小日期！")
      }else if(direction === "right"){
        alert("已滑动到最大日期！")
      }
    },
    firstDayChange(day) {
      this.currentFirstDay = day;
    },
    arrowClick(type) {
      console.log(type + " btn has been clicked");
    },
    // 打开、关闭 代码演示
    toggleCode(e) {
      let dom = e.currentTarget;
      if (dom.nextElementSibling.style.display != "block") {
        dom.nextElementSibling.style.display = "block";
      } else {
        dom.nextElementSibling.style.display = "none";
      }
    },
    // 切换语言
    changeLanguage() {
      if (this.lang === "English") {
        this.lang = "中文";
        this.currLang = this.english;
      } else {
        this.lang = "English";
        this.currLang = this.chinese;
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
      return (
        monday.getFullYear() +
        "/" +
        (monday.getMonth() + 1) +
        "/" +
        monday.getDate()
      );
    },

    currLangDemo() {
      if (this.lang === "English") {
        return this.codeList[4];
      } else {
        return this.codeList[5];
      }
    }
  },
  filters: {
    weekName: week => {
      const dirt_en = {
        Su: "Sunday",
        Mo: "Monday",
        Tu: "Tuesday",
        We: "Wednesday",
        Th: "Thursday",
        Fr: "Friday",
        Sa: "Saturday"
      };
      return dirt_en[week] ? dirt_en[week] : week;
    }
  }
};
</script>

<style>
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

::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
  background-color: #ccc;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover {
  background-color: #aaa;
}

div {
  box-sizing: border-box;
}

span.text-blue {
  color: #a0c6ff;
}

span.text-black {
  color: #444;
  font-weight: 500;
}

span.strong-text {
  color: #444;
  font-weight: 600;
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
}

#app .horizontal-calendar {
  margin-bottom: 10px;
}

#app .github-link {
  position: absolute;
  top: 5px;
  right: 5px;
  overflow: hidden;
}

#app .github-link img {
  position: relative;
  border-radius: 2px;
}

#app .github-link:hover img {
  animation: flipInY 1s;
}

#app .lang-icon {
  position: absolute;
  top: 5px;
  right: 35px;
  width: 50px;
  height: 25px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  line-height: 25px;
  cursor: pointer;
  background-color: rgba(13, 141, 224, 0.7);
}

#app .lang-icon:hover {
  background-color: rgba(13, 141, 224, 0.9);
}

#app .body {
  height: 100%;
  overflow-y: auto;
}

#app .content {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding: 30px 30px 180px;
  background-color: #fafafa;
}

#app .demos {
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding: 30px 20px 100px;
}

#app .demos .preview-title {
  font-size: 16px;
  font-weight: 600;
}

#app .demos .preview-title span {
  font-weight: 500;
  font-size: 15px;
}

#app .demos .excample-text {
  color: #999;
  font-size: 14px;
  margin: 10px 0 0;
}

#app .api-table {
  width: 100%;
}

#app .api-table thead tr {
  height: 40px;
  color: #666;
  line-height: 32px;
  background-color: #e1e3e4;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
}

#app .api-table thead tr th {
  padding: 5px 10px;
}

#app .api-table tbody tr {
  height: 40px;
  color: #666;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
}

#app .api-table tbody tr td {
  min-width: 60px;
  padding: 5px 10px;
}

#app .api-table tbody tr td:first-child {
  color: #63acd6;
  font-size: 14px;
}

#app .api-table tr th:first-child,
#app .api-table tr td:first-child {
  padding-left: 10px;
}

#app .font-bold {
  font-weight: bold;
}

#app .page-title {
  margin: 0 0 30px;
  color: #333;
  font-weight: normal;
  line-height: 1.5;
  font-size: 30px;
  cursor: default;
}

#app .page-title small {
  margin-left: 10px;
  font-size: 16px;
}

#app .white-block {
  margin-bottom: 24px;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 12px #ebedf0;
}

#app .white-block h4 {
  color: #666;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 18px;
}

#app .white-block code {
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

#app .white-block p,
#app .white-block span {
  font-weight: 500;
}

#app .white-block .hljs-comment {
  color: #999;
}

#app .white-block .tips {
  font-size: 14px;
  line-height: 24px;
  margin: 5px 0 5px;
}

#app .white-block .code-toggle {
  color: #991200;
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin: 15px 0 5px;
  cursor: pointer;
}

#app .white-block .code {
  display: block;
  background-color: #efefef;
  color: #2686ff;
  font-size: 14px;
  border-radius: 6px;
  overflow: auto;
  line-height: 24px;
}

#app .white-block strong {
  font-weight: bold;
  color: #222;
}

#app .preview-title {
  color: #222;
  font-weight: 500;
  margin: 20px 0;
}

#app .preview-title:first-child {
  margin-top: 20px;
}

#app .label {
  display: block;
  margin: 10px 15px;
  font-size: 13px;
  color: #888;
  font-weight: 500;
}

#app .week-title {
  text-align: center;
  border: 1px solid #f2f2f2;
  width: 410px;
  margin: 0 auto;
  line-height: 26px;
  color: #333;
  font-size: 15px;
  box-sizing: border-box;
}

#app .label-text {
  background-color: #fff2f1;
  font-style: normal;
}

#app .code-toggle {
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

#app .code {
  display: none;
  color: #2686ff;
  font-size: 14px;
  border-radius: 6px;
  overflow: auto;
}

#app .split-line {
  width: calc(100% + 40px);
  height: 8px;
  background: #fafafa;
  margin: 40px 0;
  margin-left: -20px;
}

#app .change-log h4 {
  font-size: 24px;
  font-weight: 500;
}

#app .change-log .log-date {
  font-size: 12px;
  font-weight: 500;
  color: #888;
  margin-left: 10px;
  background-color: #f7f7f7;
}

#app .change-log h5 {
  font-size: 16px;
  font-weight: 500;
  color: #0d8de0;
  margin: 20px 0 5px;
}

#app .change-log ul,
#app .change-log li {
  list-style: disc inside;
  color: #888;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotateY(-20deg);
    transform: perspective(400px) rotateY(-20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(-5deg);
    transform: perspective(400px) rotateY(-5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

</style>
