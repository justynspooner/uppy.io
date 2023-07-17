"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2465],{25103:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(90814),l=a(23612),s=a(56482);const{version:i}=s;function r(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:s="uppy.min.mjs"}=e,r=[];n.Children.toArray(t).forEach((e=>{r=[...r,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=r.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${i}/${s}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${i}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(l.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(o.Z,{language:"html"},u))}},81589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var n=a(87462),o=(a(67294),a(3905)),l=a(74866),s=a(85162),i=a(25103);const r={sidebar_position:4,slug:"/status-bar"},d="Status bar",p={unversionedId:"user-interfaces/elements/status-bar",id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/status-bar",permalink:"/docs/status-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/status-bar"},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/docs/informer"},next:{title:"Progress bar",permalink:"/docs/progress-bar"}},u={},h=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:h},c="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"status-bar"},"Status bar"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/status-bar")," plugin shows upload progress and speed, estimated time,\npre- and post-processing information, and allows users to control\n(pause/resume/cancel) the upload."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Try it out together with ",(0,o.kt)("a",{parentName:"p",href:"/docs/drag-drop"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))," in\n",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"))),(0,o.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,o.kt)("p",null,"When you use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard"},"Dashboard")," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard. You\ncan still use it without it but it may need some (CSS) tweaking for your use\ncase."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/status-bar\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/status-bar\n"))),(0,o.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(i.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, StatusBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(StatusBar, { target: '#status-bar' })\n      "))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport StatusBar from '@uppy/status-bar';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/status-bar/dist/style.min.css';\n\nnew Uppy().use(StatusBar, { target: '#status-bar' });\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this Status Bar (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'StatusBar'"),")."),(0,o.kt)("p",null,"Use this if you need to add several StatusBar instances."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'body'"),")."),(0,o.kt)("h4",{id:"hideafterfinish"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,o.kt)("p",null,"Hide the Status Bar after the upload is complete (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)("h4",{id:"showprogressdetails"},(0,o.kt)("inlineCode",{parentName:"h4"},"showProgressDetails")),(0,o.kt)("p",null,"Display remaining upload size and estimated time (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"false"),": Uploading: 45%"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"true"),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left")),(0,o.kt)("h4",{id:"hideuploadbutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideUploadButton")),(0,o.kt)("p",null,"Hide the upload button (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom upload button somewhere, and using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," API."),(0,o.kt)("h4",{id:"hideretrybutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideRetryButton")),(0,o.kt)("p",null,"Hide the retry button (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.retryAll()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.retryUpload(fileID)")," API."),(0,o.kt)("h4",{id:"hidepauseresumebutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hidePauseResumeButton")),(0,o.kt)("p",null,"Hide pause/resume buttons (for resumable uploads, via ",(0,o.kt)("a",{parentName:"p",href:"http://tus.io"},"tus"),", for\nexample) (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing custom cancel or pause/resume buttons somewhere,\nand using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.pauseResume(fileID)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.removeFile(fileID)")," API."),(0,o.kt)("h4",{id:"hidecancelbutton"},(0,o.kt)("inlineCode",{parentName:"h4"},"hideCancelButton")),(0,o.kt)("p",null,"Hide the cancel button (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.cancelAll()")," API."),(0,o.kt)("h4",{id:"donebuttonhandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"doneButtonHandler")),(0,o.kt)("p",null,"Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons,\nonce the upload/encoding is done (",(0,o.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("p",null,"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be\nused to close file picker modals or clear the upload state. This is what the\nDashboard plugin, which uses Status Bar internally, sets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const doneButtonHandler = () => {\n    this.uppy.reset();\n    this.requestCloseModal();\n};\n")),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the status bar while files are being uploaded.\n        uploading: 'Uploading',\n        // Shown in the status bar once all files have been uploaded.\n        complete: 'Complete',\n        // Shown in the status bar if an upload failed.\n        uploadFailed: 'Upload failed',\n        // Shown in the status bar while the upload is paused.\n        paused: 'Paused',\n        // Used as the label for the button that retries an upload.\n        retry: 'Retry',\n        // Used as the label for the button that cancels an upload.\n        cancel: 'Cancel',\n        // Used as the label for the button that pauses an upload.\n        pause: 'Pause',\n        // Used as the label for the button that resumes an upload.\n        resume: 'Resume',\n        // Used as the label for the button that resets the upload state after an upload\n        done: 'Done',\n        // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n        filesUploadedOfTotal: {\n            0: '%{complete} of %{smart_count} file uploaded',\n            1: '%{complete} of %{smart_count} files uploaded',\n        },\n        // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n        dataUploadedOfTotal: '%{complete} of %{total}',\n        // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n        xTimeLeft: '%{time} left',\n        // Used as the label for the button that starts an upload.\n        uploadXFiles: {\n            0: 'Upload %{smart_count} file',\n            1: 'Upload %{smart_count} files',\n        },\n        // Used as the label for the button that starts an upload, if another upload has been started in the past\n        // and new files were added later.\n        uploadXNewFiles: {\n            0: 'Upload +%{smart_count} file',\n            1: 'Upload +%{smart_count} files',\n        },\n        upload: 'Upload',\n        retryUpload: 'Retry upload',\n        xMoreFilesAdded: {\n            0: '%{smart_count} more file added',\n            1: '%{smart_count} more files added',\n        },\n        showErrorDetails: 'Show error details',\n    },\n};\n")))}f.isMDXComponent=!0}}]);