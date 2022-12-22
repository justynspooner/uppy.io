"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",date:new Date("2021-02-26T00:00:00.000Z"),author:"arturi",image:"https://uppy.io/img/blog/1.26/dashboard-disabled.jpg",published:!0,slug:"2021/02/1.26"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2021/02/1.26",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-02-1.26.md",source:"@site/blog/2021-02-1.26.md",title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",description:"Uppy 1.26 brings a new disabled option for the Dashboad, ability to set headers per file with XHR Upload, and fixes for the Transloadit plugin.",date:"2021-02-26T00:00:00.000Z",formattedDate:"February 26, 2021",tags:[],readingTime:1.775,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",date:"2021-02-26T00:00:00.000Z",author:"arturi",image:"https://uppy.io/img/blog/1.26/dashboard-disabled.jpg",published:!0,slug:"2021/02/1.26"},prevItem:{title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/04/1.27"},nextItem:{title:"Uppy 1.25: right-to-left scripts, Ukrainian translation, Companion improvements",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/01/1.25"}},p={authorsImageUrls:[void 0]},s=[{value:"Dashboard \u201cDisabled\u201d",id:"dashboard-disabled",level:2},{value:"XHR Upload Per File headers",id:"xhr-upload-per-file-headers",level:2},{value:"Build System Improvements",id:"build-system-improvements",level:2},{value:"Transloadit Plugin",id:"transloadit-plugin",level:2},{value:"Misc",id:"misc",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Uppy 1.26 brings a new ",(0,n.kt)("inlineCode",{parentName:"p"},"disabled")," option for the Dashboad, ability to set headers per file with XHR Upload, and fixes for the Transloadit plugin."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Uppy Dashboard UI with disabled state",src:a(5151).Z,width:"1219",height:"959"})),(0,n.kt)("h2",{id:"dashboard-disabled"},"Dashboard \u201cDisabled\u201d"),(0,n.kt)("p",null,"You can now specify a ",(0,n.kt)("inlineCode",{parentName:"p"},"disabled")," option for the Dashboard, in order to make it non-interactive and grayed out. Users won\u2019t be able to click on buttons or drop files."),(0,n.kt)("p",null,"This is useful when you need to confitionally enable/disable file uploading or manipulation, based on a condition in your app."),(0,n.kt)("video",{alt:"Demo video showing Uppy with Dashboard disabled vs enabled state",poster:"/img/blog/1.26/dashboard-disabled.jpg",muted:!0,autoplay:!0,loop:!0},(0,n.kt)("source",{src:"/img/blog/1.26/dashboard-disabled-vs-enabled.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/img/blog/1.26/dashboard-disabled-vs-enabled.mp4"),(0,n.kt)("p",null,"This option can be set on init:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dashboard, {\n  disabled: true,\n})\n")),(0,n.kt)("p",null,"and via API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const dashboard = uppy.getPlugin('Dashboard')\ndashboard.setOptions({ disabled: true })\n\nuserNameInput.addEventListener('change', () => {\n  dashboard.setOptions({ disabled: false })\n})\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#disabled-false"},"See the docs"),"."),(0,n.kt)("h2",{id:"xhr-upload-per-file-headers"},"XHR Upload Per File headers"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/xhr-upload")," now accept a ",(0,n.kt)("inlineCode",{parentName:"p"},"headers: (file) => {}")," function, so you can do:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(XHRUpload, {\n  headers: file => ({\n    'authorization': `bearer ${global.userToken}`,\n    'header-name': file.meta.someMetaValue,\n  }),\n})\n")),(0,n.kt)("p",null,"to determine file-specific headers."),(0,n.kt)("p",null,"The function syntax for ",(0,n.kt)("inlineCode",{parentName:"p"},"headers")," is only available if the ",(0,n.kt)("inlineCode",{parentName:"p"},"bundle")," option is ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," (the default). ",(0,n.kt)("inlineCode",{parentName:"p"},"bundle")," uploads share only one set of headers."),(0,n.kt)("h2",{id:"build-system-improvements"},"Build System Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"build: set legacy-peer-deps for npm 7. We have some peerDependency mismatches in our install tree. In npm 6 this was OK (maybe reason for a warning) but in npm 7 they hard fail the install"),(0,n.kt)("li",{parentName:"ul"},"build: added npm version check (33e656cad32b865f960dbd88abf4d3839c8377f0 / @goto-bus-stop)")),(0,n.kt)("h2",{id:"transloadit-plugin"},"Transloadit Plugin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a case where the plugin used stale file data."),(0,n.kt)("li",{parentName:"ul"},"Fixed polling fallback bugs."),(0,n.kt)("li",{parentName:"ul"},"Url concatenation is now more robust.")),(0,n.kt)("h2",{id:"misc"},"Misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@uppy/companion: Docker tag release (#2771 / @kiloreux)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/companion: Companion should respect previously set value for Accesss-Control-Allow-Methods (#2726 / @tim-kos, @mifi, @so-steve)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/transloadit: fix polling fallback bugs (#2759 / @goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/utils: added mp4 file type support \u2014 Safari 14.0 on Mac records audio using audio/mp4 MIME type which isn't currently recognised by Uppy (#2753 / @dominiceden)")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1260"},"changelog")," for details."))}u.isMDXComponent=!0},5151:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-disabled-6df98c5e4209d6d4290c96d100fe9617.jpg"}}]);