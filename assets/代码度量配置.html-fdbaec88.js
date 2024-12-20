import{_ as e,o as a,c as r,e as t}from"./app-23098b2b.js";const i={},n=t('<h1 id="代码度量配置" tabindex="-1"><a class="header-anchor" href="#代码度量配置" aria-hidden="true">#</a> 代码度量配置</h1><h2 id="圈复杂度" tabindex="-1"><a class="header-anchor" href="#圈复杂度" aria-hidden="true">#</a> 圈复杂度</h2><p>可以发现执行路径较多的方法，降低代码的圈复杂度，可测性更高</p><ul><li><p><strong>检测阈值</strong></p><p>默认为 20，表示当一个方法的圈复杂度超过 20 时则认为该方法为超标方法，需要被关注修改。</p><p>可以根据需要调整</p></li></ul><h2 id="重复代码" tabindex="-1"><a class="header-anchor" href="#重复代码" aria-hidden="true">#</a> 重复代码</h2><p>可以发现重复的代码，避免重复代码可以让代码更简洁，更易维护</p><ul><li><p><strong>长度区间</strong></p><p>是一个区间值，默认代码中一个单词（变量/操作符）长度为 1。</p></li><li><p><strong>重复次数</strong></p><p>是一个区间值，当一段代码重复次数达到指定区间才认为是有风险的。</p></li><li><p><strong>上报限制</strong></p><p>限制上报的重复代码块数，可以减少开发的压力，提高修复积极性。</p></li></ul><h2 id="代码统计" tabindex="-1"><a class="header-anchor" href="#代码统计" aria-hidden="true">#</a> 代码统计</h2><p>从目录和业务纬度统计代码行数，也可以获取提交记录便于代码 Review</p>',9),s=[n];function h(o,p){return a(),r("div",null,s)}const c=e(i,[["render",h],["__file","代码度量配置.html.vue"]]);export{c as default};
