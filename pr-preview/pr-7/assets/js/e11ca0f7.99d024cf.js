"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8705],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2360:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),o=r(6010),a="tabItem_OmH5";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7462),o=r(7294),a=r(2389),l=r(7392),i=r(7094),u=r(2466),s=r(6010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,r,a,d=e.lazy,f=e.block,m=e.defaultValue,v=e.values,y=e.groupId,b=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),O=N.tabGroupChoices,x=N.setTabGroupChoices,E=(0,o.useState)(k),T=E[0],j=E[1],P=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var D=O[y];null!=D&&D!==T&&g.some((function(e){return e.value===D}))&&j(D)}var S=function(e){var t=e.currentTarget,r=P.indexOf(t),n=g[r].value;n!==T&&(C(t),j(n),null!=y&&x(y,n))},I=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;r=P[n]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;r=P[o]||P[P.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":f},b)},g.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:S,onClick:S},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),d?(0,o.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,a.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},6569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=r(9877),i=r(2360),u=["components"],s={sidebar_position:7},p="Supporting IE11",c={unversionedId:"guides/browser-support",id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.md",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/uppy.io/pr-preview/pr-7/docs/guides/browser-support",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Migrate to 2.0",permalink:"/uppy.io/pr-preview/pr-7/docs/guides/migrate-2.0"},next:{title:"Uppy core",permalink:"/uppy.io/pr-preview/pr-7/docs/uppy-core"}},d={},f=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}],m={toc:f};function v(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supporting-ie11"},"Supporting IE11"),(0,a.kt)("p",null,"We officially support recent versions of Chrome, Firefox, Safari and Edge."),(0,a.kt)("p",null,"Internet Explorer is not officially supported, as in we don't run tests for it,\nbut you can be mostly confident it works with the right polyfills.\nHowever it does come with a risk of unexpected results in styling or functionality."),(0,a.kt)("h2",{id:"polyfills"},"Polyfills"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js'\nimport 'whatwg-fetch'\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch'\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill'\nimport ResizeObserver from 'resize-observer-polyfill'\n\nwindow.ResizeObserver ??= ResizeObserver\n\nexport { default } from '@uppy/core'\nexport * from '@uppy/core'\n")),(0,a.kt)("h2",{id:"legacy-cdn-bundle"},"Legacy CDN bundle"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The bundle consists of most Uppy plugins, so this method is not recommended for production,\nas your users will have to download all plugins when you are likely using only a few."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- 1. Add CSS to `<head>` --\x3e\n  <link href="https://releases.transloadit.com/uppy/v2.9.0/uppy.legacy.min.css" rel="stylesheet">\n\n  \x3c!-- 2. Add JS before the closing `</body>` --\x3e\n  <script src="https://releases.transloadit.com/uppy/v2.9.0/uppy.legacy.min.js"><\/script>\n\n  \x3c!-- 3. Initialize --\x3e\n  <div id="uppy"></div>\n  <script>\n    var uppy = new Uppy.Core()\n    uppy.use(Uppy.DragDrop, { target: \'#uppy\' })\n    uppy.use(Uppy.Tus, { endpoint: \'//tusd.tusdemo.net/files/\' })\n  <\/script>\n')))}v.isMDXComponent=!0}}]);