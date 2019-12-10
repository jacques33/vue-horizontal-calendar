const list = [
`<pre class='hljs'><code><span class="hljs-comment">// import in ***.vue</span>
&lt;script&gt;
<span class="hljs-literal">import</span> VueHorizontalCalendar from <span class="hljs-string">'vue-horizontal-calendar'</span>;
<span class="hljs-literal">export</span> <span class="hljs-keyword">default</span> {
  components: {
      VueHorizontalCalendar
  }
}
</code></pre>`,
`<pre class='hljs'><code>&lt;p <span class="hljs-variable">class=</span><span class="hljs-string">"excample-text"</span>&gt;{{this.choosedDay2.dateFormat}}  星期{{this.choosedDay2.<span class="hljs-property">day</span>}}&lt;/p&gt;
&lt;vue-horizontal-calendar <span class="hljs-variable">choosedDate=</span><span class="hljs-string">"2019/12/01"</span> v-<span class="hljs-function_start"><span class="hljs-keyword">on</span></span>:change=<span class="hljs-string">"dateChange2"</span>&gt;&lt;/vue-horizontal-calendar&gt;

data() {
  <span class="hljs-command">return</span> {
      choosedDay2: {
        <span class="hljs-property">dateFormat</span>: <span class="hljs-string">""</span>,
        <span class="hljs-property">year</span>: <span class="hljs-string">""</span>,
        <span class="hljs-property">month</span>: <span class="hljs-string">""</span>,
        <span class="hljs-property">date</span>: <span class="hljs-string">""</span>,
        <span class="hljs-property">day</span>: <span class="hljs-string">""</span>,
        <span class="hljs-property">timestamp</span>: <span class="hljs-string">""</span>
      },
    }
}
methods: {
    dateChange2(<span class="hljs-property">day</span>) {
      this.choosedDay2 = <span class="hljs-property">day</span>;
    }
}</code></pre>`,

`<pre class='hljs'><code>&lt;vue-horizontal-calendar <span class="hljs-variable">minDate=</span><span class="hljs-string">"2019/12/01"</span> <span class="hljs-variable">maxDate=</span><span class="hljs-string">"2020/12/30"</span>&gt;&lt;/vue-horizontal-calendar&gt;</code></pre>`,

`<pre class='hljs'><code>&lt;vue-horizontal-calendar  <span class="hljs-variable">swipeSpace=</span><span class="hljs-string">"3"</span>&gt;&lt;/vue-horizontal-calendar&gt;</code></pre>`,

`<pre class='hljs'><code>&lt;vue-horizontal-calendar  <span class="hljs-variable">lang=</span><span class="hljs-string">"en"</span>&gt;&lt;/vue-horizontal-calendar&gt;</code></pre>`,
`<pre class='hljs'><code>&lt;vue-horizontal-calendar  <span class="hljs-variable">lang=</span><span class="hljs-string">"zh"</span>&gt;&lt;/vue-horizontal-calendar&gt;</code></pre>`,

`<pre class='hljs'><code>&lt;vue-horizontal-calendar
<span class="hljs-variable">choosedItemColor=</span><span class="hljs-string">"rgb(150, 0, 0)"</span>
<span class="hljs-variable">todayItemColor=</span><span class="hljs-string">"rgb(150, 0, 0, .1)"</span>
<span class="hljs-variable">choosedDatePos=</span><span class="hljs-string">"center"</span>
<span class="hljs-variable">sundayText=</span><span class="hljs-string">"天"</span>
v-bind:<span class="hljs-variable">showBorderTop=</span><span class="hljs-string">"true"</span>
&gt;
  &lt;img <span class="hljs-variable">slot=</span><span class="hljs-string">"leftIcon"</span> <span class="hljs-variable">src=</span><span class="hljs-string">"./assets/left.jpg"</span> <span class="hljs-variable">style=</span><span class="hljs-string">"width:20px;margin-top:11px"</span> /&gt;
  &lt;img <span class="hljs-variable">slot=</span><span class="hljs-string">"rightIcon"</span> <span class="hljs-variable">src=</span><span class="hljs-string">"./assets/right.jpg"</span> <span class="hljs-variable">style=</span><span class="hljs-string">"width:20px;margin-top:11px"</span> /&gt;
&lt;/vue-horizontal-calendar&gt;</code></pre>`,

`<pre class='hljs'><code>&lt;h4 <span class="hljs-variable">class=</span><span class="hljs-string">"week-title"</span>&gt;{{currentFirstDay.year + '年' + currentFirstDay.month + '月'}}&lt;/h4&gt;
&lt;vue-horizontal-calendar
  <span class="hljs-variable">style=</span><span class="hljs-string">"width:410px;margin: 0 auto;"</span>
  <span class="hljs-variable">swipeSpace=</span><span class="hljs-string">"7"</span>
  <span class="hljs-variable">sundayText=</span><span class="hljs-string">"天"</span>
  :<span class="hljs-variable">choosedDate=</span><span class="hljs-string">"getThisMondayDate"</span>
  :<span class="hljs-variable">showBorderTop=</span><span class="hljs-string">"false"</span>
  :<span class="hljs-variable">resizeable=</span><span class="hljs-string">"false"</span>
  v-on:<span class="hljs-variable">firstDayChange=</span><span class="hljs-string">"firstDayChange"</span>
&gt;&lt;/vue-horizontal-calendar&gt;

data() {
  <span class="hljs-command">return</span> {
    currentFirstDay: {
      <span class="hljs-property">dateFormat</span>: <span class="hljs-string">""</span>,
      <span class="hljs-property">year</span>: <span class="hljs-string">""</span>,
      <span class="hljs-property">month</span>: <span class="hljs-string">""</span>,
      <span class="hljs-property">date</span>: <span class="hljs-string">""</span>,
      <span class="hljs-property">day</span>: <span class="hljs-string">""</span>,
      <span class="hljs-property">timestamp</span>: <span class="hljs-string">""</span>
    },
  }
}
methods: {
  firstDayChange(<span class="hljs-property">day</span>) {
    this.currentFirstDay = <span class="hljs-property">day</span>;
  }
},
computed:{
    // 获取当前日期所在的周‘周一’的日期</span>
    getThisMondayDate(){
      <span class="hljs-keyword">let</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
      <span class="hljs-keyword">let</span> today_weekCode = today.getDay() == <span class="hljs-number">0</span>? <span class="hljs-number">7</span>: today.getDay();
      <span class="hljs-keyword">let</span> monday_timestamp = today.getTime() - (today_weekCode - <span class="hljs-number">1</span>) * <span class="hljs-number">1000</span>*<span class="hljs-number">3600</span>*<span class="hljs-number">24</span>;
      <span class="hljs-keyword">let</span> monday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(monday_timestamp);
      <span class="hljs-keyword">return</span> monday.getFullYear() + <span class="hljs-string">"/"</span> + (monday.getMonth() + <span class="hljs-number">1</span>) + <span class="hljs-string">"/"</span> + monday.getDate();
    }
}</code></pre>`,
]

export default list