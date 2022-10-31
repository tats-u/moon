"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6394],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7378);function a(e){let{src:t,width:n="90%",alt:a="",title:r,align:i="center",padding:l="1rem"}=e;return o.createElement("div",{style:{paddingBottom:l,paddingTop:l,textAlign:i}},o.createElement("img",{src:t.default,width:n,alt:a,title:r}))}},9106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(5773),a=(n(7378),n(5318)),r=n(8109);const i={slug:"v0.18",title:"v0.18 - Improved configuration and initialization flow",authors:["milesj"],tags:["projects","config","init","node"]},l=void 0,s={permalink:"/blog/v0.18",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-31_v0.18.mdx",source:"@site/blog/2022-10-31_v0.18.mdx",title:"v0.18 - Improved configuration and initialization flow",description:"Happy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we've focused heavily on our internals and",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[{label:"projects",permalink:"/blog/tags/projects"},{label:"config",permalink:"/blog/tags/config"},{label:"init",permalink:"/blog/tags/init"},{label:"node",permalink:"/blog/tags/node"}],readingTime:2.025,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.18",title:"v0.18 - Improved configuration and initialization flow",authors:["milesj"],tags:["projects","config","init","node"]},nextItem:{title:"v0.17 - Webhooks, extended YAML, and improved runtime performance",permalink:"/blog/v0.17"}},p={authorsImageUrls:[void 0]},m=[{value:"Improved projects configuration",id:"improved-projects-configuration",level:2},{value:"Improved <code>moon init</code> flow",id:"improved-moon-init-flow",level:2},{value:"Customize <code>node</code> execution arguments",id:"customize-node-execution-arguments",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:m};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Happy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we've focused heavily on our internals and\nbenchmarking performance metrics, so it's rather light on new features, but we still have some to\nshow!"),(0,a.kt)("h2",{id:"improved-projects-configuration"},"Improved projects configuration"),(0,a.kt)("p",null,"When moon initially launched, it required defining all\n",(0,a.kt)("a",{parentName:"p",href:"../docs/config/workspace#projects"},(0,a.kt)("inlineCode",{parentName:"a"},"projects"))," using a map. In v0.3, we added support for globs to\nease the burden of defining many projects. At this point, you had to choose between the 2 patterns,\nwhich wasn't always ideal."),(0,a.kt)("p",null,"To improve upon this, you can now define a map ",(0,a.kt)("em",{parentName:"p"},"and")," globs using a 3rd pattern, like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n  globs:\n    - 'apps/*'\n    - 'packages/*'\n  sources:\n    www: 'www'\n")),(0,a.kt)("h2",{id:"improved-moon-init-flow"},"Improved ",(0,a.kt)("inlineCode",{parentName:"h2"},"moon init")," flow"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"moon init")," command hasn't changed much since our v0.1 release, and with many new features and\nconfigurations over these last 18 releases, the initialization flow has fallen quite behind. We felt\nit was the perfect time to modernize this command a bit."),(0,a.kt)("p",null,"On top of automatically detecting settings from the environment, the command will also now prompt\nyou with additional questions while configuring Node.js or TypeScript. Here's an example of this\nflow:"),(0,a.kt)(r.Z,{src:n(7992),width:"80%",mdxType:"Image"}),(0,a.kt)("p",null,"Furthermore, the command also supports enabling a new tool (appending configuration to\n",(0,a.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml"),") into an ",(0,a.kt)("em",{parentName:"p"},"existing")," moon repository, by running ",(0,a.kt)("inlineCode",{parentName:"p"},"moon init --tool <name>"),"."),(0,a.kt)("h2",{id:"customize-node-execution-arguments"},"Customize ",(0,a.kt)("inlineCode",{parentName:"h2"},"node")," execution arguments"),(0,a.kt)("p",null,"moon manages the Node.js binary in our toolchain, and runs all Node.js based tasks using this\nbinary, instead of relying on the binary found in the developer's environment. Because of this, how\n",(0,a.kt)("inlineCode",{parentName:"p"},"node")," is executed is abstracted away from end users."),(0,a.kt)("p",null,"What if you wanted to use an ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#loaders"},"experimental loader")," and\nexecute TypeScript code at ",(0,a.kt)("em",{parentName:"p"},"runtime"),"? Or to preserve symlinks? Well, you couldn't... but no longer,\nas we've added a new setting, ",(0,a.kt)("a",{parentName:"p",href:"../docs/config/workspace#binexecargs"},(0,a.kt)("inlineCode",{parentName:"a"},"node.binExecArgs")),", that\nallows additional ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#options"},"CLI arguments")," to be defined,\nthat will be passed to ",(0,a.kt)("em",{parentName:"p"},"all")," executions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',title:'".moon/workspace.yml"',"{2-4}":!0},"node:\n  binExecArgs:\n    - '--loader'\n    - '@boost/module/loader'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more about the\n",(0,a.kt)("a",{parentName:"p",href:"https://boostlib.dev/docs/module#ecmascript-module-loaders"},"Boost module loader"),"!")),(0,a.kt)("h2",{id:"other-changes"},"Other changes"),(0,a.kt)("p",null,"View the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.18.0"},"official release")," for a\nfull list of changes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default Node.js version has been updated to v18.12 (the new LTS) from v16.17."),(0,a.kt)("li",{parentName:"ul"},"Improvements to how we store stdout/stderr logs for ran targets."),(0,a.kt)("li",{parentName:"ul"},"Work tree dirty checks when running migration commands.")),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"Expect the following in the v0.19 release!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Laying the groundwork for ",(0,a.kt)("em",{parentName:"li"},"remote caching"),"!"),(0,a.kt)("li",{parentName:"ul"},"An in-repo secrets management layer."),(0,a.kt)("li",{parentName:"ul"},"Performance improvements.")))}d.isMDXComponent=!0},7992:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/init-flow-2a3ba1d56ee42c65dabf1f219d732e98.png"}}]);