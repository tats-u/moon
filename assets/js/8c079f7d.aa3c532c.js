"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(5773),i=(n(7378),n(5318));const o={title:"init"},a=void 0,l={unversionedId:"commands/init",id:"commands/init",title:"init",description:"The moon init [dest] command will initialize moon into a repository and scaffold config files by",source:"@site/docs/commands/init.mdx",sourceDirName:"commands",slug:"/commands/init",permalink:"/docs/commands/init",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/init.mdx",tags:[],version:"current",frontMatter:{title:"init"},sidebar:"docs",previous:{title:"generate",permalink:"/docs/commands/generate"},next:{title:"migrate",permalink:"/docs/commands/migrate"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"moon init [dest]")," command will initialize moon into a repository and scaffold config files by\ncreating a ",(0,i.kt)("inlineCode",{parentName:"p"},".moon")," folder. By default, moon will automatically infer the Node.js version, package\nmanager, and potential projects based on existing files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon init\n\n# In another directory\n$ moon init ./app\n")),(0,i.kt)("p",null,"The command can also be used to initialize a specific tool ",(0,i.kt)("em",{parentName:"p"},"after")," moon has already been\ninitialized. Perfect for adopting a new language into the workspace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon init --tool typescript\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[dest]")," - Destination to initialize and scaffold into. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},".")," (current working\ndirectory).")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--force")," - Overwrite existing config files if they exist."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--tool")," - Individual tool to initialize and configure.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accepts: ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--yes")," - Skip all prompts and use default values.")))}m.isMDXComponent=!0}}]);