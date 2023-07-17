"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5386],{25103:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(90814),l=n(23612),o=n(56482);const{version:p}=o;function r(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:o="uppy.min.mjs"}=e,r=[];a.Children.toArray(t).forEach((e=>{r=[...r,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=r.map((e=>`  ${e}`)).join("\n"),s=`https://releases.transloadit.com/uppy/v${p}/${o}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${p}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,s)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(l.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(i.Z,{language:"html"},m))}},66124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),l=n(74866),o=n(85162),p=n(25103);const r={},d="Form",s={unversionedId:"form",id:"form",title:"Form",description:"The @uppy/form plugin integrates with an existing HTML `` element to",source:"@site/docs/form.mdx",sourceDirName:".",slug:"/form",permalink:"/docs/form",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/form.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compressor",permalink:"/docs/compressor"}},m={},u=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>resultName</code>",id:"resultname",level:4},{value:"<code>getMetaFromForm</code>",id:"getmetafromform",level:4},{value:"<code>addResultToForm</code>",id:"addresulttoform",level:4},{value:"<code>triggerUploadOnSubmit</code>",id:"triggeruploadonsubmit",level:4},{value:"<code>submitOnSuccess</code>",id:"submitonsuccess",level:4}],h={toc:u},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form"},"Form"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/form")," plugin integrates with an existing HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>")," element to\nextract input data from it, and send along with the Uppy upload. It then appends\nthe upload result back to the form via a hidden input."),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"When you have an existing HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>")," element and you would like to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Attach the form input values to the files.")," This is useful if you want to\nassociate meta data from the form (for example, name, location, id) with the\nuploaded file, so you can process it on the backend. ",(0,i.kt)("inlineCode",{parentName:"li"},"@uppy/form")," extracts the\ninput values before uploading/processing files and adds them to Uppy meta data\nstate (",(0,i.kt)("inlineCode",{parentName:"li"},"uppy.state.meta"),"), as well as and each file\u2019s meta, and appends to the\nupload in an object with ",(0,i.kt)("inlineCode",{parentName:"li"},"[file input name attribute]")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"[file input value]"),"\nkey/values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Upload the files and put the response (such as the file URLs) into a hidden\nfield")," (",(0,i.kt)("inlineCode",{parentName:"li"},'<input type="hidden" name="uppyResult">'),"). Then you can POST and\nhandle the form yourself. The appended result is a stringified version of a\nresult returned from calling ",(0,i.kt)("inlineCode",{parentName:"li"},"uppy.upload()")," or listening to ",(0,i.kt)("inlineCode",{parentName:"li"},"complete")," event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatically start the file upload on submit or submit the form after file\nupload.")," This is off by default. See ",(0,i.kt)("a",{parentName:"li",href:"#submitOnSuccess"},(0,i.kt)("inlineCode",{parentName:"a"},"submitOnSuccess")),"\nand ",(0,i.kt)("a",{parentName:"li",href:"#triggerUploadOnSubmit"},(0,i.kt)("inlineCode",{parentName:"a"},"triggerUploadOnSubmit"))," options respectively for\ndetails.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using a UI framework or library like React, Vue or Svelte, you\u2019ll\nmost likely handle form data there as well, and thus won\u2019t need this plugin.\nInstead, pass meta data to Uppy via ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#setmetadata"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.setMeta()")),"\nand listen to ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#complete"},(0,i.kt)("inlineCode",{parentName:"a"},"uppy.on('complete')"))," to get the upload\nresults back.")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/form\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/form\n"))),(0,i.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Form } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Form, {\n          // Options\n        })\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},"import Uppy from '@uppy/core';\nimport Form from '@uppy/form';\nimport DragDrop from '@uppy/drag-drop';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/drag-drop/dist/style.min.css';\n\nnew Uppy().use(Form, {\n    target: '#my-form',\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<form id="my-form" action="/submit" method="get">\n    <label for="name">Enter your name: </label>\n    <input type="text" name="name" required />\n\n    <label for="dob">Date of birth: </label>\n    <input type="date" name="dob" />\n\n    <input type="submit" value="Save" />\n</form>\n')),(0,i.kt)("p",null,"By default the code above will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Extract meta data from the form ",(0,i.kt)("inlineCode",{parentName:"li"},"#my-form"),"."),(0,i.kt)("li",{parentName:"ol"},"Send it with the Uppy upload."),(0,i.kt)("li",{parentName:"ol"},"Those fields will then be added to Uppy meta data state (",(0,i.kt)("inlineCode",{parentName:"li"},"uppy.state.meta"),")\nand each file\u2019s meta, and appended as (meta)data to the upload in an object\nwith ",(0,i.kt)("inlineCode",{parentName:"li"},"[file input name attribute]")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"[file input value]")," key/values."),(0,i.kt)("li",{parentName:"ol"},"When Uppy completes upload/processing, it will add an\n",(0,i.kt)("inlineCode",{parentName:"li"},'<input type="hidden" name="uppyResult">')," with the stringified upload result\nobject back to the form.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can disable both of these features, see options below.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/form")," can also start Uppy upload automatically once the form is\nsubmitted, and even submit the form after the upload is complete. This is off by\ndefault. See ",(0,i.kt)("a",{parentName:"p",href:"#triggerUploadOnSubmit"},(0,i.kt)("inlineCode",{parentName:"a"},"triggerUploadOnSubmit"))," and\n",(0,i.kt)("a",{parentName:"p",href:"#submitOnSuccess"},(0,i.kt)("inlineCode",{parentName:"a"},"submitOnSuccess"))," options below for details.")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'Form'"),")."),(0,i.kt)("h4",{id:"target"},(0,i.kt)("inlineCode",{parentName:"h4"},"target")),(0,i.kt)("p",null,"DOM element or CSS selector for the form element (",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),",\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("p",null,"This is required for the plugin to work."),(0,i.kt)("h4",{id:"resultname"},(0,i.kt)("inlineCode",{parentName:"h4"},"resultName")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute for the ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="hidden">')," where the result will be\nadded (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"uppyResult"),")."),(0,i.kt)("h4",{id:"getmetafromform"},(0,i.kt)("inlineCode",{parentName:"h4"},"getMetaFromForm")),(0,i.kt)("p",null,"Configures whether to extract metadata from the form (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("p",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the Form plugin will extract all fields from a ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>"),"\nelement before upload begins. Those fields will then be added to Uppy meta data\nstate (",(0,i.kt)("inlineCode",{parentName:"p"},"uppy.state.meta"),") and each file\u2019s meta, and appended as (meta)data to\nthe upload in an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"[file input name attribute]")," ->\n",(0,i.kt)("inlineCode",{parentName:"p"},"[file input value]")," key/values."),(0,i.kt)("h4",{id:"addresulttoform"},(0,i.kt)("inlineCode",{parentName:"h4"},"addResultToForm")),(0,i.kt)("p",null,"Configures whether to add upload/encoding results back to the form in an\n",(0,i.kt)("inlineCode",{parentName:"p"},'<input name="uppyResult" type="hidden">')," element (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("h4",{id:"triggeruploadonsubmit"},(0,i.kt)("inlineCode",{parentName:"h4"},"triggerUploadOnSubmit")),(0,i.kt)("p",null,"Configures whether to start the upload when the form is submitted (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),",\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"When a user submits the form (via a submit button, the ",(0,i.kt)("kbd",null,"Enter")," key or\notherwise), this option will prevent form submission, and instead upload files\nvia Uppy. Then you could:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"submitOnSuccess: true")," if you need the form to ",(0,i.kt)("em",{parentName:"li"},"actually")," be submitted\nonce all files have been uploaded."),(0,i.kt)("li",{parentName:"ul"},"Listen for ",(0,i.kt)("inlineCode",{parentName:"li"},"uppy.on('complete')")," event to do something else if the file\nuploads are all you need. For example, if the form is used for file metadata\nonly.")),(0,i.kt)("h4",{id:"submitonsuccess"},(0,i.kt)("inlineCode",{parentName:"h4"},"submitOnSuccess")),(0,i.kt)("p",null,"Configures whether to submit the form after Uppy finishes uploading/encoding\n(",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."))}k.isMDXComponent=!0}}]);