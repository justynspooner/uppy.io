"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7157],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),r=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[x,N]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,n=w.indexOf(t),o=b[n].value;o!==x&&(C(t),N(o),null!=m&&v(m,String(o)))},T=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:D},i,{className:(0,r.Z)("tabs__item",d,i?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7294),a=n(814),r=n(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function s(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,s=[];o.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${i}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return o.createElement(o.Fragment,null,o.createElement(r.Z,{type:"caution"},o.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),o.createElement(a.Z,{language:"html"},d))}},7234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),r=n(5488),i=n(5162),l=n(3068);const s={},p="Dropbox",u={unversionedId:"sources/companion-plugins/dropbox",id:"sources/companion-plugins/dropbox",title:"Dropbox",description:"The @uppy/dropbox plugin lets users import files from their Dropbox account.",source:"@site/docs/sources/companion-plugins/dropbox.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/dropbox",permalink:"/uppy.io/pr-preview/pr-48/docs/sources/companion-plugins/dropbox",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/dropbox.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/uppy.io/pr-preview/pr-48/docs/sources/companion-plugins/box"},next:{title:"Facebook",permalink:"/uppy.io/pr-preview/pr-48/docs/sources/companion-plugins/facebook"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dropbox"},"Dropbox"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dropbox")," plugin lets users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com"},"Dropbox")," account."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to let users import files from their ",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com"},"Dropbox")," account."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Dropbox plugin to work.\nCompanion handles authentication with Dropbox, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,a.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,a.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/dropbox\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/dropbox\n"))),(0,a.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Dropbox } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Dropbox, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Using Dropbox requires setup in both Uppy and Companion."),(0,a.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Dropbox from '@uppy/dropbox';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy.use(Dashboard, { inline: true, target: 'body' })\n    // Example of setting all the options to their defaults.\n    // Not passing anything to `Dropbox` is therefor the same as the example below.\n    .use(Dropbox, {\n        id: 'Dropbox',\n        title: 'Dropbox',\n        target: null,\n        companionUrl: null,\n        companionHeaders: null,\n        companionAllowedHosts: null,\n    });\n")),(0,a.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,a.kt)("p",null,"You can create a Dropbox App on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/developers/apps/create"},"Dropbox Developers site"),"."),(0,a.kt)("p",null,"Things to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose the \u201cDropbox API\u201d, not the business variant."),(0,a.kt)("li",{parentName:"ul"},"Typically you\u2019ll want \u201cFull Dropbox\u201d access, unless you are absolutely certain that you need the other one.")),(0,a.kt)("p",null,"You\u2019ll be redirected to the app page. This page lists the app key and app secret, which you should use to configure Companion as shown above."),(0,a.kt)("p",null,"The app page has a \u201cRedirect URIs\u201d field. Here, add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://$YOUR_COMPANION_HOST_NAME/dropbox/redirect\n")),(0,a.kt)("p",null,"You can only use the integration with your own account initially.\nMake sure to apply for production status on the app page before you publish your app, or your users will not be able to sign in!"),(0,a.kt)("p",null,"Configure the Dropbox key and secret. With the standalone Companion server, specify environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_DROPBOX_KEY="Dropbox API key"\nexport COMPANION_DROPBOX_SECRET="Dropbox API secret"\n')),(0,a.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        dropbox: {\n            key: 'Dropbox API key',\n            secret: 'Dropbox API secret',\n        },\n    },\n});\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Dropbox'"),")."),(0,a.kt)("h4",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")),(0,a.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Dropbox'"),")."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionurl"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,a.kt)("p",null,"URL to a ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("h4",{id:"companionheaders"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,a.kt)("p",null,"Custom headers that should be sent along to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,a.kt)("h4",{id:"companionallowedhosts"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,a.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,a.kt)("p",null,"This value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,a.kt)("h4",{id:"companioncookiesrule"},(0,a.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,a.kt)("p",null,"This option correlates to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,a.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,a.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameDropbox: 'Dropbox',\n    },\n};\n")))}h.isMDXComponent=!0}}]);