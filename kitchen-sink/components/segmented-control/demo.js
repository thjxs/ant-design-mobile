webpackJsonp([37],{1142:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/segmented-control/demo/basic.md",id:"components-segmented-control-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SegmentedControl<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SegmentedControlExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`selectedIndex:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onValueChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sc-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Simplest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Segment1\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment2\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Segment1\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment2\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>SelectedIndex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span> <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Segment1\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment2\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment3\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>TintColor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Segment1\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment2\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment3\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">tintColor</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'#ff0000\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'40px\'</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'250px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>onChange<span class="token operator">/</span>onValueChange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'Segment1\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment2\'</span><span class="token punctuation">,</span> <span class="token string">\'Segment3\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onValueChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onValueChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControlExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),o=(s(0),s(235),s(236)),c=n(o),l=(s(895),s(897)),u=n(l),i=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),r=function(n){function s(){var n,e,p,o;a(this,s);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return e=p=t(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(l))),p.onChange=function(n){console.log("selectedIndex:"+n.nativeEvent.selectedSegmentIndex)},p.onValueChange=function(n){console.log(n)},o=e,t(p,o)}return e(s,n),i(s,[{key:"render",value:function(){return p.createElement(c.default,{size:"lg",className:"sc-example"},p.createElement("p",{className:"sub-title"},"Simplest"),p.createElement(u.default,{values:["Segment1","Segment2"]}),p.createElement("p",{className:"sub-title"},"Disabled"),p.createElement(u.default,{values:["Segment1","Segment2"],disabled:!0}),p.createElement("p",{className:"sub-title"},"SelectedIndex"),p.createElement(u.default,{selectedIndex:1,values:["Segment1","Segment2","Segment3"]}),p.createElement("p",{className:"sub-title"},"TintColor"),p.createElement(u.default,{values:["Segment1","Segment2","Segment3"],tintColor:"#ff0000",style:{height:"40px",width:"250px"}}),p.createElement("p",{className:"sub-title"},"onChange/onValueChange"),p.createElement(u.default,{values:["Segment1","Segment2","Segment3"],onChange:this.onChange,onValueChange:this.onValueChange}))}}]),s}(p.Component);return p.createElement(r,null)},style:".sc-example {\n  padding-bottom: 13px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n    margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sc-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token number">13</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},729:function(n,a,s){n.exports={basic:s(1142)}},895:function(n,a,s){"use strict";s(45),s(896)},896:function(n,a){},897:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function p(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function c(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),u=s(0),i=t(u),r=s(6),k=t(r),g=s(135),m=t(g),d=function(n){function a(n){p(this,a);var s=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.state={selectedIndex:n.selectedIndex},s}return c(a,n),l(a,[{key:"componentWillReceiveProps",value:function(n){n.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:n.selectedIndex})}},{key:"onClick",value:function(n,a,s){var t=this.props,e=t.disabled,p=t.onChange,o=t.onValueChange;e||this.state.selectedIndex===a||(n.nativeEvent=n.nativeEvent?n.nativeEvent:{},n.nativeEvent.selectedSegmentIndex=a,n.nativeEvent.value=s,p&&p(n),o&&o(s),this.setState({selectedIndex:a}))}},{key:"renderSegmentItem",value:function(n,a,s){var t=this,p=this.props,o=p.prefixCls,c=p.disabled,l=p.tintColor,u=(0,k.default)(o+"-item",e({},o+"-item-selected",s)),r={color:s?"#fff":l,backgroundColor:s?l:"transparent",borderColor:l},g=l?{backgroundColor:l}:{};return i.default.createElement(m.default,{key:n,disabled:c,activeClassName:o+"-item-active"},i.default.createElement("div",{className:u,style:r,role:"tab","aria-selected":s&&!c,"aria-disabled":c,onClick:c?void 0:function(s){return t.onClick(s,n,a)}},i.default.createElement("div",{className:o+"-item-inner",style:g}),a))}},{key:"render",value:function(){var n=this,a=this.props,s=a.className,t=a.prefixCls,p=a.style,o=a.disabled,c=a.values,l=void 0===c?[]:c,u=(0,k.default)(s,t,e({},t+"-disabled",o));return i.default.createElement("div",{className:u,style:p,role:"tablist"},l.map(function(a,s){return n.renderSegmentItem(s,a,s===n.state.selectedIndex)}))}}]),a}(i.default.Component);a.default=d,d.defaultProps={prefixCls:"am-segment",selectedIndex:0,disabled:!1,values:[],onChange:function(){},onValueChange:function(){},style:{},tintColor:""},n.exports=a.default}});