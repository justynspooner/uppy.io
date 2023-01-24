"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2377],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),s=n(6010),l=n(2389),o=n(7392),i=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:m,groupId:c,className:k}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,o.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,i.U)(),[w,N]=(0,a.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=c){const e=b[c];null!=e&&e!==w&&y.some((t=>t.value===e))&&N(e)}const U=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==w&&(C(t),N(r),null!=c&&v(c,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":U(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},k)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:I,onClick:U},l,{className:(0,s.Z)("tabs__item",d,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(814),s=n(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=l;function i(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,i=[];r.Children.toArray(t).forEach((e=>{i=[...i,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=i.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return r.createElement(r.Fragment,null,r.createElement(s.Z,{type:"caution"},r.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),r.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),r.createElement(a.Z,{language:"html"},d))}},4138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),s=n(5488),l=n(5162),o=n(3068);const i={},p="Angular",u={unversionedId:"framework-integrations/angular",id:"framework-integrations/angular",title:"Angular",description:"Angular components for Uppy UI plugins.",source:"@site/docs/framework-integrations/angular.mdx",sourceDirName:"framework-integrations",slug:"/framework-integrations/angular",permalink:"/uppy.io/pr-preview/pr-65/docs/framework-integrations/angular",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/framework-integrations/angular.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XHR",permalink:"/uppy.io/pr-preview/pr-65/docs/uploader/xhr"},next:{title:"React",permalink:"/uppy.io/pr-preview/pr-65/docs/framework-integrations/react"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"CSS",id:"css",level:3}],c={toc:m};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"angular"},"Angular"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular")," components for Uppy UI plugins."),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When you are using the Angular framework and you wouldl like to use on of the UI\ncomponents."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/angular\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/angular\n"))),(0,a.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You also need to install the UI plugin you want to use. For instance,\n",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),".")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"Instead of adding a UI plugin to an Uppy instance with ",(0,a.kt)("inlineCode",{parentName:"p"},".use()"),", the Uppy\ninstance can be passed into components as a ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," prop."),(0,a.kt)("p",null,"The following plugins are available as Angular component wrappers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-dashboard />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-drag-drop />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/drag-drop"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-progress-bar />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/progress-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/progress-bar"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<uppy-status-bar />")," renders\n",(0,a.kt)("a",{parentName:"li",href:"/docs/user-interfaces/status-bar"},(0,a.kt)("inlineCode",{parentName:"a"},"@uppy/status-bar")))),(0,a.kt)("p",null,"Each component takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," prop that will be passed to the UI Plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.module.ts" showLineNumbers',title:'"app.module.ts"',showLineNumbers:!0},"import { NgModule } from '@angular/core';\nimport { UppyAngularDashboardModule } from '@uppy/angular';\n\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n    declarations: [AppComponent],\n    imports: [BrowserModule, UppyAngularDashboardModule],\n    providers: [],\n    bootstrap: [AppComponent],\n})\nclass {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html" showLineNumbers',title:'"app.component.html"',showLineNumbers:!0},'<uppy-dashboard [uppy]="uppy"> </uppy-dashboard>\n')),(0,a.kt)("p",null,"You should initialize Uppy as a property of your component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="app.component.ts" showLineNumbers',title:'"app.component.ts"',showLineNumbers:!0},"import { Component } from '@angular/core';\nimport { Uppy } from '@uppy/core';\n\n@Component({\n    selector: 'app-root',\n})\nexport class AppComponent {\n    uppy: Uppy = new Uppy({ debug: true, autoProceed: true });\n}\n")),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"All components have their own styling and should be added to your component\ndecorator. You can find the CSS import statements in the docs of the UI plugin\nyou want to use. For instance, for ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Component({\n  // ...\n  styleUrls: [\n    '../node_modules/@uppy/core/dist/style.css',\n    '../node_modules/@uppy/dashboard/dist/style.css',\n  ],\n})\n")))}k.isMDXComponent=!0}}]);