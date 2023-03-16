"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[442],{7134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=t(7462),o=(t(7294),t(3905)),i=t(5488),p=t(5162),r=t(3068);const l={},s="Instagram",m={unversionedId:"sources/companion-plugins/instagram",id:"sources/companion-plugins/instagram",title:"Instagram",description:"The @uppy/instagram plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/instagram.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/instagram",permalink:"/uppy.io/pr-preview/pr-73/docs/sources/companion-plugins/instagram",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/instagram.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Drive",permalink:"/uppy.io/pr-preview/pr-73/docs/sources/companion-plugins/google-drive"},next:{title:"OneDrive",permalink:"/uppy.io/pr-preview/pr-73/docs/sources/companion-plugins/onedrive"}},d={},u=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:u};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instagram"},"Instagram"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/instagram")," plugin lets users import files from their\n",(0,o.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,o.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,o.kt)("p",null,"When you want to let users import files from their\n",(0,o.kt)("a",{parentName:"p",href:"https://instagram.com"},"Instagram")," account."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Instagram plugin to\nwork. Companion handles authentication with Instagram, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."),(0,o.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/instagram\n"))),(0,o.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/instagram\n"))),(0,o.kt)(p.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Instagram } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Instagram, {\n          // Options\n        })\n      '))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"Using Instagram requires setup in both Uppy and Companion."),(0,o.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Instagram from '@uppy/instagram';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(Instagram, {\n        target: Dashboard,\n        companionUrl: 'https://your-companion.com',\n    });\n")),(0,o.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,o.kt)("p",null,"To sign up for API keys, go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/products/instagram/"},"Instagram Platform from Meta"),"."),(0,o.kt)("p",null,"Create a project for your app if you don\u2019t have one yet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the Instagram API."),(0,o.kt)("li",{parentName:"ul"},"Use this for an authorized redirect URI:\n",(0,o.kt)("inlineCode",{parentName:"li"},"https://$YOUR\\_COMPANION\\_HOST\\_NAME/instagram/redirect"))),(0,o.kt)("p",null,"Meta will give you an OAuth client ID and client secret."),(0,o.kt)("p",null,"Configure the Instagram key and secret in Companion. With the standalone\nCompanion server, specify environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_GOOGLE_KEY="Instagram OAuth client ID"\nexport COMPANION_GOOGLE_SECRET="Instagram OAuth client secret"\n')),(0,o.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        drive: {\n            key: 'Instagram OAuth client ID',\n            secret: 'Instagram OAuth client secret',\n        },\n    },\n});\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,o.kt)("inlineCode",{parentName:"p"},"'Instagram'"),")."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,o.kt)("p",null,"URL to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionheaders"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,o.kt)("p",null,"Custom headers that should be sent along to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("h4",{id:"companionallowedhosts"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,o.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,o.kt)("p",null,"This value can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,o.kt)("h4",{id:"companioncookiesrule"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,o.kt)("p",null,"This option correlates to the\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,o.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameInstagram: 'Instagram',\n    },\n};\n")))}h.isMDXComponent=!0}}]);