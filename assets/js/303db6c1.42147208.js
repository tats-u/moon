"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6065],{9798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),l=n(8944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),l=n(7378),o=n(8944),i=n(6457),r=n(784),s=n(9947),p=n(3457);const c="tabList_J5MA",u="tabItem_l0OV";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:k,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,r.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,j]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&b.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(E(t),j(a),null!=k&&N(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},6642:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7378),l=n(4267),o=n(9798),i=n(3337);function r(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function p(e){let t=r(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=r(e,!0,!0),n+=s(e,!0)),a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(l.Z,{language:"shell"},r(e,!1,!1))),a.createElement(o.Z,{value:"yarn1"},a.createElement(l.Z,{language:"shell"},t)),a.createElement(o.Z,{value:"npm"},a.createElement(l.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(o.Z,{value:"pnpm"},a.createElement(l.Z,{language:"shell"},n)))}},2189:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),l=n(3469),o=n(1792);function i(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(o.Z,{icon:l.dT$}))}},5453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(5773),l=(n(7378),n(5318)),o=n(3337),i=n(9798),r=n(6642),s=n(2189);const p={title:"Packemon example",sidebar_label:"Packemon"},c=void 0,u={unversionedId:"guides/examples/packemon",id:"guides/examples/packemon",title:"Packemon example",description:"In this guide, you'll learn how to integrate Packemon into moon. Packemon",source:"@site/docs/guides/examples/packemon.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/packemon",permalink:"/docs/guides/examples/packemon",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/packemon.mdx",tags:[],version:"current",frontMatter:{title:"Packemon example",sidebar_label:"Packemon"},sidebar:"guides",previous:{title:"Nuxt",permalink:"/docs/guides/examples/nuxt"},next:{title:"Prettier",permalink:"/docs/guides/examples/prettier"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Build targets",id:"build-targets",level:3}],k={toc:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{to:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L22",mdxType:"HeadingApiLink"}),(0,l.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,l.kt)("a",{parentName:"p",href:"https://packemon.dev/"},"Packemon")," into moon. Packemon\nis a tool for properly building npm packages for distribution, it does this by providing the\nfollowing functionality:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compiles source code to popular formats: CJS, MJS, ESM, UMD, etc."),(0,l.kt)("li",{parentName:"ul"},"Validates the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," for incorrect fields or values."),(0,l.kt)("li",{parentName:"ul"},"Generates ",(0,l.kt)("inlineCode",{parentName:"li"},"exports")," mappings for ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," based on the define configuration."),(0,l.kt)("li",{parentName:"ul"},"And many more ",(0,l.kt)("a",{parentName:"li",href:"https://packemon.dev/docs/features"},"optimizations and features"),"!")),(0,l.kt)("p",null,"Begin by installing ",(0,l.kt)("inlineCode",{parentName:"p"},"packemon")," in your root. We suggest using the same version across the entire\nrepository."),(0,l.kt)(r.Z,{dep:"packemon",dev:!0,mdxType:"AddDepsTabs"}),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Package building does not apply to every project, only packages, so where you place the build task\nis up to you. The following patterns are suggested:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"buildPackage")," task in ",(0,l.kt)("a",{parentName:"li",href:"../../config/global-project"},(0,l.kt)("inlineCode",{parentName:"a"},".moon/project.yml")),", which can be\ninherited by package based projects."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"build")," task in each ",(0,l.kt)("a",{parentName:"li",href:"../../config/project"},(0,l.kt)("inlineCode",{parentName:"a"},"moon.yml")),".")),(0,l.kt)(o.Z,{groupId:"config-type",defaultValue:"global",values:[{label:"Globally inherited",value:"global"},{label:"Per project",value:"local"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"global",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"buildPackage:\n    command:\n        - 'packemon'\n        - 'pack'\n        # Add `engines` field to package\n        - '--addEngines'\n        # Add `exports` field to package\n        - '--addExports'\n        # Generate TypeScript declarations\n        - '--declaration'\n        - '--declarationConfig'\n        - 'tsconfig.build.json'\n    inputs:\n        # Source files only\n        - 'src/**/*'\n        - 'package.json'\n        # A build specific tsconfig\n        - 'tsconfig.build.json'\n        - '/tsconfig.options.json'\n    outputs:\n        # Matches `compilerOptions.outDir`\n        - 'dts'\n    env:\n        NODE_ENV: 'production'\n")),(0,l.kt)("p",null,"With this being defined globally, all package-based projects can inherit this task and rename it as\nfollows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<package>/moon.yml"',title:'"<package>/moon.yml"'},"# Rename the `buildPackage` task to `build` for this project\nworkspace:\n    inheritedTasks:\n        rename:\n            buildPackage: 'build'\n\n# Define additional compiled files unique to this project\ntasks:\n    build:\n        outputs:\n            - 'cjs'\n")),(0,l.kt)("p",null,"However, for other project types like applications, this task will need to be ",(0,l.kt)("em",{parentName:"p"},"excluded"),", otherwise\nit will run and fail in CI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<app>/moon.yml"',title:'"<app>/moon.yml"'},"# Exclude the `buildPackage` task for this project\nworkspace:\n    inheritedTasks:\n        exclude: ['buildPackage']\n"))),(0,l.kt)(i.Z,{value:"local",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<package>/moon.yml"',title:'"<package>/moon.yml"'},"build:\n    command:\n        - 'packemon'\n        - 'pack'\n        # Add `engines` field to package\n        - '--addEngines'\n        # Add `exports` field to package\n        - '--addExports'\n        # Generate TypeScript declarations\n        - '--declaration'\n        - '--declarationConfig'\n        - 'tsconfig.build.json'\n    inputs:\n        # Source files only\n        - 'src/**/*'\n        - 'package.json'\n        # A build specific tsconfig\n        - 'tsconfig.build.json'\n        - '/tsconfig.options.json'\n    outputs:\n        # Compiled files: lib, esm, cjs, mjs, etc\n        - 'lib'\n        # Matches `compilerOptions.outDir`\n        - 'dts'\n    env:\n        NODE_ENV: 'production'\n")))),(0,l.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,l.kt)("p",null,"Packemon has built-in support for TypeScript, but to ",(0,l.kt)("em",{parentName:"p"},"not")," conflict with a\n",(0,l.kt)("a",{parentName:"p",href:"./typescript"},"typecheck task"),", a separate ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file is required, which we named\n",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.build.json"),"."),(0,l.kt)("p",null,"This config is necessary to ",(0,l.kt)("em",{parentName:"p"},"only")," compile source files, and to not include unwanted files in the\ndeclaration output directory (",(0,l.kt)("inlineCode",{parentName:"p"},"dts"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.build.json"',title:'"tsconfig.build.json"'},'{\n  "extends": "../../tsconfig.options.json",\n  "compilerOptions": {\n    "outDir": "dts",\n    "rootDir": "src"\n  },\n  "include": ["src/**/*"],\n  "references": []\n}\n')),(0,l.kt)("h3",{id:"build-targets"},"Build targets"),(0,l.kt)("p",null,"To configure the target platform(s) and format(s), you must define a\n",(0,l.kt)("a",{parentName:"p",href:"https://packemon.dev/docs/config"},(0,l.kt)("inlineCode",{parentName:"a"},"packemon")," block")," in the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". The chosen\nformats must also be listed as ",(0,l.kt)("inlineCode",{parentName:"p"},"outputs")," in the task."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "package",\n  // ...\n  "packemon": {\n    "format": "esm",\n    "platform": "browser"\n  }\n}\n')))}g.isMDXComponent=!0}}]);