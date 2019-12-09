const list = [
    `<pre class='hljs'><code><span class="hljs-comment">// 局部引入</span>
&lt;script&gt;
<span class="hljs-literal">import</span> VueHorizontalCalendar from <span class="hljs-string">'vue-horizontal-calendar'</span>;
<span class="hljs-literal">export</span> <span class="hljs-keyword">default</span> {
    components: {
        VueHorizontalCalendar
    }
}
</code></pre>`,

    `<pre class='hljs'><code><span class="hljs-comment">// 获取当前日期所在的周‘周一’的日期</span>
    getThisMondayDate(){
      <span class="hljs-keyword">let</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
      <span class="hljs-keyword">let</span> today_weekCode = today.getDay() == <span class="hljs-number">0</span>? <span class="hljs-number">7</span>: today.getDay();
      <span class="hljs-keyword">let</span> monday_timestamp = today.getTime() - (today_weekCode - <span class="hljs-number">1</span>) * <span class="hljs-number">1000</span>*<span class="hljs-number">3600</span>*<span class="hljs-number">24</span>;
      <span class="hljs-keyword">let</span> monday = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(monday_timestamp);
      <span class="hljs-keyword">let</span> arr = [
        monday.getMonth() + <span class="hljs-number">1</span>,
        monday.getDate(),
      ];
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> key <span class="hljs-keyword">in</span> arr) {
        <span class="hljs-keyword">if</span> (arr[key] &lt; <span class="hljs-number">10</span>) {
          arr[key] = <span class="hljs-string">"0"</span> + arr[key];
        }
      }
      arr.unshift(monday.getFullYear());
      <span class="hljs-keyword">return</span> arr[<span class="hljs-number">0</span>] + <span class="hljs-string">"/"</span> + arr[<span class="hljs-number">1</span>] + <span class="hljs-string">"/"</span> + arr[<span class="hljs-number">2</span>]
    }</code></pre>`,
]

export default list