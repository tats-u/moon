"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{4556:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"v0.18","metadata":{"permalink":"/blog/v0.18","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-31_v0.18.mdx","source":"@site/blog/2022-10-31_v0.18.mdx","title":"v0.18 - Improved configuration and initialization flow","description":"Happy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we\'ve focused heavily on our internals and","date":"2022-10-31T00:00:00.000Z","formattedDate":"October 31, 2022","tags":[{"label":"projects","permalink":"/blog/tags/projects"},{"label":"config","permalink":"/blog/tags/config"},{"label":"init","permalink":"/blog/tags/init"},{"label":"node","permalink":"/blog/tags/node"}],"readingTime":2.025,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.18","title":"v0.18 - Improved configuration and initialization flow","authors":["milesj"],"tags":["projects","config","init","node"]},"nextItem":{"title":"v0.17 - Webhooks, extended YAML, and improved runtime performance","permalink":"/blog/v0.17"}},"content":"import Image from \'@site/src/components/Image\';\\n\\nHappy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we\'ve focused heavily on our internals and\\nbenchmarking performance metrics, so it\'s rather light on new features, but we still have some to\\nshow!\\n\\n\x3c!--truncate--\x3e\\n\\n## Improved projects configuration\\n\\nWhen moon initially launched, it required defining all\\n[`projects`](../docs/config/workspace#projects) using a map. In v0.3, we added support for globs to\\nease the burden of defining many projects. At this point, you had to choose between the 2 patterns,\\nwhich wasn\'t always ideal.\\n\\nTo improve upon this, you can now define a map _and_ globs using a 3rd pattern, like so.\\n\\n```yaml title=\\".moon/workspace.yml\\"\\nprojects:\\n  globs:\\n    - \'apps/*\'\\n    - \'packages/*\'\\n  sources:\\n    www: \'www\'\\n```\\n\\n## Improved `moon init` flow\\n\\nThe `moon init` command hasn\'t changed much since our v0.1 release, and with many new features and\\nconfigurations over these last 18 releases, the initialization flow has fallen quite behind. We felt\\nit was the perfect time to modernize this command a bit.\\n\\nOn top of automatically detecting settings from the environment, the command will also now prompt\\nyou with additional questions while configuring Node.js or TypeScript. Here\'s an example of this\\nflow:\\n\\n<Image src={require(\'./img/v0.18/init-flow.png\')} width=\\"80%\\" />\\n\\nFurthermore, the command also supports enabling a new tool (appending configuration to\\n`.moon/workspace.yml`) into an _existing_ moon repository, by running `moon init --tool <name>`.\\n\\n## Customize `node` execution arguments\\n\\nmoon manages the Node.js binary in our toolchain, and runs all Node.js based tasks using this\\nbinary, instead of relying on the binary found in the developer\'s environment. Because of this, how\\n`node` is executed is abstracted away from end users.\\n\\nWhat if you wanted to use an [experimental loader](https://nodejs.org/api/esm.html#loaders) and\\nexecute TypeScript code at _runtime_? Or to preserve symlinks? Well, you couldn\'t... but no longer,\\nas we\'ve added a new setting, [`node.binExecArgs`](../docs/config/workspace#binexecargs), that\\nallows additional `node` [CLI arguments](https://nodejs.org/api/cli.html#options) to be defined,\\nthat will be passed to _all_ executions.\\n\\n```yaml title=\\".moon/workspace.yml\\" {2-4}\\nnode:\\n  binExecArgs:\\n    - \'--loader\'\\n    - \'@boost/module/loader\'\\n```\\n\\n> Learn more about the\\n> [Boost module loader](https://boostlib.dev/docs/module#ecmascript-module-loaders)!\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.18.0) for a\\nfull list of changes.\\n\\n- Default Node.js version has been updated to v18.12 (the new LTS) from v16.17.\\n- Improvements to how we store stdout/stderr logs for ran targets.\\n- Work tree dirty checks when running migration commands.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.19 release!\\n\\n- Laying the groundwork for _remote caching_!\\n- An in-repo secrets management layer.\\n- Performance improvements."},{"id":"v0.17","metadata":{"permalink":"/blog/v0.17","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-21_v0.17.mdx","source":"@site/blog/2022-10-21_v0.17.mdx","title":"v0.17 - Webhooks, extended YAML, and improved runtime performance","description":"With this release, we\'re landing the first iteration of our notifier service, starting with","date":"2022-10-21T00:00:00.000Z","formattedDate":"October 21, 2022","tags":[{"label":"notifier","permalink":"/blog/tags/notifier"},{"label":"runner","permalink":"/blog/tags/runner"},{"label":"config","permalink":"/blog/tags/config"},{"label":"editors","permalink":"/blog/tags/editors"},{"label":"vscode","permalink":"/blog/tags/vscode"}],"readingTime":3.18,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.17","title":"v0.17 - Webhooks, extended YAML, and improved runtime performance","authors":["milesj"],"tags":["notifier","runner","config","editors","vscode"],"image":"./img/v0.17.png"},"prevItem":{"title":"v0.18 - Improved configuration and initialization flow","permalink":"/blog/v0.18"},"nextItem":{"title":"New VS Code extension!","permalink":"/blog/vscode-extension"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nWith this release, we\'re landing the first iteration of our notifier service, starting with\\nwebhooks! We\'ve also spent some time working on quality of life improvements.\\n\\n\x3c!--truncate--\x3e\\n\\n## Breaking changes\\n\\nTo start, we have a few breaking changes this release to be aware of!\\n\\n### Minor changes to ID formatting\\n\\nAn ID refers to many things \u2014 project names, task names, target segments, so on and so forth. When\\nparsing these values, we format them to remove unwanted characters, as these IDs are used in many\\ncontexts, many of which need to be strict.\\n\\nPreviously, we would remove unwanted characters entirely. Instead, we now replace them with dashes\\n(`-`) for better readability. Take the following for example:\\n\\n| ID         | Old       | New        |\\n| :--------- | :-------- | :--------- |\\n| domain.com | domaincom | domain-com |\\n| build:esm  | buildesm  | build-esm  |\\n\\n### Task `type` has been renamed to `platform`\\n\\nThis setting was renamed for a few reasons. To start, tasks actually have a\\n[type internally](../docs/concepts/task#types) that is not configured, but is inferred based on\\nwhat\'s configured. This was a bit confusing.\\n\\nAnd secondly, our toolchain refers to language integrations as platforms, and since this setting\\ndetermines which tool to run with, we wanted to align on the platform terminology.\\n\\n<Tabs\\n  groupId=\\"task-type\\"\\n  defaultValue=\\"before\\"\\n  values={[\\n    { label: \'Before\', value: \'before\' },\\n    { label: \'After\', value: \'after\' },\\n  ]}\\n>\\n<TabItem value=\\"before\\">\\n\\n```yaml\\ntasks:\\n  clean:\\n    command: \'rm -rf ./dist\'\\n    type: \'system\'\\n```\\n\\n</TabItem>\\n<TabItem value=\\"after\\">\\n\\n```yaml\\ntasks:\\n  clean:\\n    command: \'rm -rf ./dist\'\\n    platform: \'system\'\\n```\\n\\n</TabItem>\\n</Tabs>\\n\\n> Because of this change, the `$taskType` token was also renamed to `$taskPlatform`!\\n\\n## Webhook events (experimental)\\n\\nLooking to gather metrics for your pipelines? Gain insight into run durations and failures? Maybe\\nyou want to send Slack or Discord notifications? With our new notifier system, this is now possible\\nthrough webhooks!\\n\\nSimply enable the [`notifier.webhookUrl`](../docs/config/workspace#webhookurl) setting to start\\nreceiving events from your CI environments.\\n\\n```yaml title=\\".moon/workspace.yml\\"\\nnotifier:\\n  webhookUrl: \'https://api.company.com/some/endpoint\'\\n```\\n\\n> View the [official guide on webhooks](../docs/guides/webhooks) for a full list of events and an\\n> example payload structure!\\n\\n## YAML anchors and aliases\\n\\nWe\'ve updated our YAML configuration files to support extended syntax,\\n[anchors (`&`) and aliases (`*`)](https://support.atlassian.com/bitbucket-cloud/docs/yaml-anchors/).\\nWith this new syntax, you\'re now able to reduce the amount of duplication required in your config\\nfiles, especially when declaring tasks, as demonstrated below!\\n\\n<Tabs\\n  groupId=\\"yaml\\"\\n  defaultValue=\\"before\\"\\n  values={[\\n    { label: \'Before\', value: \'before\' },\\n    { label: \'After\', value: \'after\' },\\n  ]}\\n>\\n<TabItem value=\\"before\\">\\n\\n```yaml\\ntasks:\\n  astro:\\n    command: \'astro\'\\n    local: true\\n\\n  dev:\\n    command: \'astro dev\'\\n    inputs:\\n      - \'@group(astro)\'\\n    local: true\\n\\n  build:\\n    command: \'astro build\'\\n    inputs:\\n      - \'@group(astro)\'\\n    outputs:\\n      - \'dist\'\\n\\n  check:\\n    command: \'astro check\'\\n    inputs:\\n      - \'@group(astro)\'\\n    deps:\\n      - \'~:typecheck\'\\n\\n  preview:\\n    command: \'astro preview\'\\n    inputs:\\n      - \'@group(astro)\'\\n    deps:\\n      - \'~:build\'\\n    local: true\\n```\\n\\n</TabItem>\\n<TabItem value=\\"after\\">\\n\\n```yaml\\n_astro: &astro\\n  command: \'astro\'\\n  inputs:\\n    - \'@group(astro)\'\\n\\ntasks:\\n  dev:\\n    <<: *astro\\n    args: \'dev\'\\n    local: true\\n\\n  build:\\n    <<: *astro\\n    args: \'build\'\\n    outputs:\\n      - \'dist\'\\n\\n  check:\\n    <<: *astro\\n    args: \'check\'\\n\\n  preview:\\n    <<: *astro\\n    args: \'preview\'\\n    deps:\\n      - \'~:build\'\\n    local: true\\n```\\n\\n</TabItem>\\n</Tabs>\\n\\n## VS Code extension\\n\\nIf you missed the [announcement earlier this week](./vscode-extension), we released the initial\\nversion of our new VS Code extension! Give it a try and\\n[refer to the documentation](../docs/editors/vscode) for more information.\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.17.0) for a\\nfull list of changes.\\n\\n- Increased runtime performance and reduced memory consumption.\\n- Template enum variables can now define objects for their\\n  [`values`](../docs/config/template#values).\\n- Task `deps` can now omit the `~:` prefix for tasks within the current project.\\n- The `moon check` command can now use the `--report` option.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.18 release!\\n\\n- Workflow improvements for `moon init`.\\n- Benchmarks and performance tuning.\\n- Individual stdout/stderr log files when running tasks."},{"id":"vscode-extension","metadata":{"permalink":"/blog/vscode-extension","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-17_vscode-extension.mdx","source":"@site/blog/2022-10-17_vscode-extension.mdx","title":"New VS Code extension!","description":"We\'re very excited to announce the initial release of our Visual Studio Code extension!","date":"2022-10-17T00:00:00.000Z","formattedDate":"October 17, 2022","tags":[{"label":"editors","permalink":"/blog/tags/editors"},{"label":"vscode","permalink":"/blog/tags/vscode"}],"readingTime":0.645,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"vscode-extension","title":"New VS Code extension!","authors":["milesj"],"tags":["editors","vscode"]},"prevItem":{"title":"v0.17 - Webhooks, extended YAML, and improved runtime performance","permalink":"/blog/v0.17"},"nextItem":{"title":"v0.16 - Per-project tool versions and TypeScript improvements","permalink":"/blog/v0.16"}},"content":"import Image from \'@site/src/components/Image\';\\n\\nWe\'re very excited to announce the initial release of our Visual Studio Code extension!\\n\\n\x3c!--truncate--\x3e\\n\\nIf you\'re a huge VS Code fan like us, you most likely use extensions in your everyday workflow. We\\nwant to enhance this experience by providing a fully integrated and interactive moon console! Here\'s\\na preview of what it looks like:\\n\\n<Image src={require(\'../docs/editors/vscode/projects-view.png\')} width=\\"40%\\" />\\n\\nExcited?? Want to learn more? Check out the official\\n[moonrepo.moon-console](https://marketplace.visualstudio.com/items?itemName=moonrepo.moon-console)\\nmarketplace page, or read the [official documentation](../docs/editors/vscode). This is only the\\nfirst iteration of the extension. Expect more advanced features in the future, like...\\n\\n- Schema validation for configuration files\\n- Autocompletion for configuration files\\n- Automatic running/building of projects in the background\\n- File type association\\n- Integrated language server\\n- And much more!"},{"id":"v0.16","metadata":{"permalink":"/blog/v0.16","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-06_v0.16.mdx","source":"@site/blog/2022-10-06_v0.16.mdx","title":"v0.16 - Per-project tool versions and TypeScript improvements","description":"With this release, we\'ve landed a long standing request of supporting project-level overrides for","date":"2022-10-06T00:00:00.000Z","formattedDate":"October 6, 2022","tags":[{"label":"toolchain","permalink":"/blog/tags/toolchain"},{"label":"runner","permalink":"/blog/tags/runner"},{"label":"generator","permalink":"/blog/tags/generator"},{"label":"typescript","permalink":"/blog/tags/typescript"},{"label":"node","permalink":"/blog/tags/node"}],"readingTime":3.265,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.16","title":"v0.16 - Per-project tool versions and TypeScript improvements","authors":["milesj"],"tags":["toolchain","runner","generator","typescript","node"],"image":"./img/v0.16.png"},"prevItem":{"title":"New VS Code extension!","permalink":"/blog/vscode-extension"},"nextItem":{"title":"v0.15 - Enhanced Docker support and 1,000 stars!","permalink":"/blog/v0.15"}},"content":"With this release, we\'ve landed a long standing request of supporting project-level overrides for\\ntools configured in the workspace, as well as some quality of life improvements for TypeScript.\\n\\n\x3c!--truncate--\x3e\\n\\n## Per-project tool version overrides\\n\\nSince moons inception, our [toolchain](../docs/concepts/toolchain) has only supported a single\\nversion of a tool (Node.js), as we wanted to embrace the single version policy and encourage all\\nconsumers to keep their tooling version consistent across all projects for reliability. While this\\nworks flawlessly, it\'s not entirely realistic, as many companies have legacy projects that are stuck\\non older versions for whatever reason, and integrating them into moon was rather difficult.\\n\\nWell no more! We\'ve refactored our toolchain to support tool overrides on a project-by-project\\nbasis. Since we only support Node.js at the moment, this can be achieved with the new\\n[`workspace.node.version`](../docs/config/project#node) setting in\\n[`moon.yml`](../docs/config/project).\\n\\nFor example, if your workspace Node.js version is configured as v18.\\n\\n```yml title=\\".moon/workspace.yml\\"\\nnode:\\n  version: \'18.0.0\'\\n```\\n\\nYou can now override this version at the project-level. Let\'s go with v14.\\n\\n```yml title=\\"<project>/moon.yml\\"\\nworkspace:\\n  node:\\n    version: \'14.0.0\'\\n```\\n\\nWhen running a task from a project with overrides, the toolchain will download, install, and\\nconfigure the new version behind the scenes. This new version will then be used to install\\ndependencies and execute the tasks commands.\\n\\n> Although we now support overriding the tool version, the workspace configured package manager\\n> (`node.packageManager`) and associated version cannot be overridden. This is unlikely to change.\\n\\n## Per-project dependency installs\\n\\nBecause of the toolchain refactor above, we now support per-project dependency installs as a welcome\\nside-effect. This is a necessary step in supporting new languages, especially for those that don\'t\\ninstall dependencies in the workspace for all projects, and must install them per project.\\n\\nThis also means that moon now supports non-`package.json` workspaces! If your repository _is not_\\nusing npm/pnpm/yarn workspaces, or a project _is not_ listed within the workspaces glob list,\\ndependencies will be installed within the project.\\n\\n## TypeScript improvements\\n\\n### Routing `outDir` to the cache\\n\\nA requirement for using project references is that each project must compile declarations (`.d.ts`)\\nso that consumers/dependees can resolve type information. While this makes sense, it becomes rather\\nunfortunate as each project folder is now littered with the declaration outputs, which are typically\\ngitignored.\\n\\nTo improve this experience, we\'re introducing a new setting\\n[`typescript.routeOutDirToCache`](../docs/config/workspace#routeoutdirtocache), that will update the\\n`outDir` compiler option of _all_ projects to route to moon\'s cache directory (which should already\\nbe gitignored). This will standardize the use of project references for the entire repository.\\n\\nFor example, a project at \\"packages/components\\" will route to the following output directory:\\n\\n```json title=\\"<project>/tsconfig.json\\"\\n{\\n  // ...\\n  \\"compilerOptions\\": {\\n    // ...\\n    \\"outDir\\": \\"../../.moon/cache/types/packages/components\\"\\n  }\\n}\\n```\\n\\n> If you require declarations to live within the project, for example an npm package that ships\\n> types, you should introduce an additional configuration to handle this, like\\n> `tsconfig.build.json`.\\n\\n### Mapping project references as `paths`\\n\\nmoon automatically keeps TypeScript project references in sync with the\\n[`typescript.syncProjectReferences`](../docs/config/workspace#syncprojectreferences) setting, which\\nis great, but we can take it further. With the new\\n[`typescript.syncProjectReferencesToPaths`](../docs/config/workspace#syncprojectreferencestopaths)\\nsetting, project references (either synced or explicitly defined) will _also_ be mapped to the\\n`paths` compiler option, automating the list of import aliases.\\n\\nFor example, if a reference has the package name `@brand/components`, the `paths` will be mapped\\nwith:\\n\\n```json title=\\"<project>/tsconfig.json\\"\\n{\\n  // ...\\n  \\"compilerOptions\\": {\\n    // ...\\n    \\"paths\\": {\\n      \\"@brand/components\\": [\\"../shared/components/src/index.ts\\"],\\n      \\"@brand/components/*\\": [\\"../shared/components/src/*\\"]\\n    }\\n  },\\n  \\"references\\": [\\n    {\\n      \\"path\\": \\"../shared/components\\"\\n    }\\n  ]\\n}\\n```\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.16.0) for a\\nfull list of changes.\\n\\n- Template files can now be suffixed with `.tera` or `.twig` for\\n  [syntax highlighting](../docs/guides/codegen#file-extensions).\\n- We now display more commands and information when running tasks.\\n- Declare implicit task dependencies with a new\\n  [`runner.implicitDeps`](../docs/config/workspace#implicitdeps) setting.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.17 release!\\n\\n- Webhooks for important pipeline events (for real this time)!\\n- YAML anchors and references in config files.\\n- And [many more](https://github.com/moonrepo/moon/issues/356)..."},{"id":"v0.15","metadata":{"permalink":"/blog/v0.15","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-26_v0.15.mdx","source":"@site/blog/2022-09-26_v0.15.mdx","title":"v0.15 - Enhanced Docker support and 1,000 stars!","description":"With this release, we\'ve focused heavily on Docker integration and enhancing the Dockerfile","date":"2022-09-26T00:00:00.000Z","formattedDate":"September 26, 2022","tags":[{"label":"generator","permalink":"/blog/tags/generator"},{"label":"docker","permalink":"/blog/tags/docker"}],"readingTime":3.495,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.15","title":"v0.15 - Enhanced Docker support and 1,000 stars!","authors":["milesj"],"tags":["generator","docker"],"image":"./img/v0.15.png"},"prevItem":{"title":"v0.16 - Per-project tool versions and TypeScript improvements","permalink":"/blog/v0.16"},"nextItem":{"title":"v0.14 - Code generation and implicit dependencies","permalink":"/blog/v0.14"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\nWith this release, we\'ve focused heavily on Docker integration and enhancing the `Dockerfile`\\nworkflow, as well as some minor quality of life improvements for template files and run reports.\\n\\n\x3c!--truncate--\x3e\\n\\n## 1,000 \u2b50\ufe0f\ud83c\udf1f\u2b50\ufe0f!\\n\\nBefore we dive into the release, we want to thank everyone for the initial support, as we passed\\n[1,000 stars on GitHub](https://github.com/moonrepo/moon) earlier this week! moon was announced back\\nin June, and to reach this milestone in roughly 3 months is very exciting. We greatly appreciate the\\nsupport, and to everyone that is using moon and providing feedback, we thank you from the bottom of\\nour hearts!\\n\\nWe have a very long roadmap ahead of us, but are very excited to bring all of these features to you,\\nand to improve the overall developer experience for your monorepos! Here\'s to 10,000 stars!\\n\\n## First-class Docker support\\n\\n[Docker](https://www.docker.com/) is a very popular tool that is typically a part of a developers\\nworkflow, but is also a very tedious one, as `Dockerfile`s have to be manually curated for every\\nproject. We aim to mitigate this problem by supporting Docker as a first-class feature, and by\\nintroducing 2 new commands, [`moon docker scaffold`](../docs/commands/docker/scaffold) and\\n[`moon docker prune`](../docs/commands/docker/prune).\\n\\nThese commands will automate a `Dockerfile` as much as possible to effectively take advantage of\\nDocker\'s layer caching, multi-staged builds, to reduce the amount of manual `COPY` commands, to\\nreduce the overall size of the container or image, and much more. To demonstrate this, compare the\\nbefore and after `Dockerfile`s below!\\n\\n<Tabs\\n  groupId=\\"dockerfile\\"\\n  defaultValue=\\"before\\"\\n  values={[\\n    { label: \'Before\', value: \'before\' },\\n    { label: \'After\', value: \'after\' },\\n  ]}\\n>\\n<TabItem value=\\"before\\">\\n\\n```docker\\nFROM node:latest\\n\\nWORKDIR /app\\n\\n# Install moon binary\\nRUN npm install -g @moonrepo/cli\\n\\n# Copy moon files\\nCOPY ./.moon ./.moon\\n\\n# Copy all package.json\'s and lockfiles\\nCOPY ./packages/cli/package.json ./packages/cli/package.json\\nCOPY ./packages/core-linux-arm64-gnu/package.json ./packages/core-linux-arm64-gnu/package.json\\nCOPY ./packages/core-linux-arm64-musl/package.json ./packages/core-linux-arm64-musl/package.json\\nCOPY ./packages/core-linux-x64-gnu/package.json ./packages/core-linux-x64-gnu/package.json\\nCOPY ./packages/core-linux-x64-musl/package.json ./packages/core-linux-x64-musl/package.json\\nCOPY ./packages/core-macos-arm64/package.json ./packages/core-macos-arm64/package.json\\nCOPY ./packages/core-macos-x64/package.json ./packages/core-macos-x64/package.json\\nCOPY ./packages/core-windows-x64-msvc/package.json ./packages/core-windows-x64-msvc/package.json\\nCOPY ./packages/runtime/package.json ./packages/runtime/package.json\\nCOPY ./packages/types/package.json ./packages/types/package.json\\nCOPY ./package.json ./package.json\\nCOPY ./yarn.lock ./yarn.lock\\nCOPY ./.yarn ./.yarn\\nCOPY ./.yarnrc.yml ./yarnrc.yml\\n\\n# Install toolchain and dependencies\\nRUN moon setup\\n\\n# Copy project and required files\\nCOPY ./packages/types ./packages/types\\nCOPY ./packages/runtime ./packages/runtime\\n# COPY . .\\n\\n# Build the target\\nRUN moon run runtime:build\\n```\\n\\n</TabItem>\\n<TabItem value=\\"after\\">\\n\\n```docker\\n#### BASE\\nFROM node:latest AS base\\nWORKDIR /app\\n\\n# Install moon binary\\nRUN npm install -g @moonrepo/cli\\n\\n#### WORKSPACE\\nFROM base AS workspace\\nWORKDIR /app\\n\\n# Copy entire repository and scaffold\\nCOPY . .\\nRUN moon docker scaffold runtime\\n\\n#### BUILD\\nFROM base AS build\\nWORKDIR /app\\n\\n# Copy workspace skeleton\\nCOPY --from=workspace /app/.moon/docker/workspace .\\n\\n# Install toolchain and dependencies\\nRUN moon setup\\n\\n# Copy source files\\nCOPY --from=workspace /app/.moon/docker/sources .\\n\\n# Build the target\\nRUN moon run runtime:build\\n\\n# Prune workspace\\nRUN moon docker prune\\n```\\n\\n</TabItem>\\n</Tabs>\\n\\n> View the official [Docker usage guide](../docs/guides/docker) for an in-depth walkthrough of all\\n> these new features!\\n\\n## Frontmatter for template files\\n\\nWe released [templates and the generator in v0.14](./v0.14) for quick and easy code generation.\\nSince it was the initial release, it provided the bare minimum of features for common workflows.\\nWe\'ll continually improve this system over each release, and have done just that for this release,\\nas all template files now support [frontmatter](../docs/guides/codegen#frontmatter)! Frontmatter is\\na mechanism for declaring _per-file configuration_, and is denoted by `---` delimiters at the top of\\nthe file.\\n\\nThis allows you to do some really cool stuff, like overriding the destination path of the file using\\nthe `to` field, as well as taking full advantage of Tera\'s filters and conditional rendering!\\n\\n```twig title=\\"templates/react/components/base.tsx\\"\\n{% set component_name = name | pascal_case %}\\n\\n---\\nto: components/{{ component_name }}.tsx\\n---\\n\\nexport function {{ component_name }}() {\\n\\treturn <div />;\\n}\\n```\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.15.0) for a\\nfull list of changes.\\n\\n- Run reports (via `--report`) now include additional information, like the total duration, and\\n  estimated time savings.\\n  - The [moonrepo/run-report-action](https://github.com/marketplace/actions/moon-ci-run-reports) has\\n    been updated with this information.\\n- Improved pnpm integration for Go/Rust binaries shipped in node modules.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.16 release!\\n\\n- Quality of life improvements for TypeScript.\\n- Per-project overrides for language/tool versions."},{"id":"v0.14","metadata":{"permalink":"/blog/v0.14","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-13_v0.14.mdx","source":"@site/blog/2022-09-13_v0.14.mdx","title":"v0.14 - Code generation and implicit dependencies","description":"With this release, we\'ve landed some new features that have been requested multiple times since","date":"2022-09-13T00:00:00.000Z","formattedDate":"September 13, 2022","tags":[{"label":"generator","permalink":"/blog/tags/generator"},{"label":"project-graph","permalink":"/blog/tags/project-graph"},{"label":"ci","permalink":"/blog/tags/ci"}],"readingTime":1.715,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.14","title":"v0.14 - Code generation and implicit dependencies","authors":["milesj"],"tags":["generator","project-graph","ci"]},"prevItem":{"title":"v0.15 - Enhanced Docker support and 1,000 stars!","permalink":"/blog/v0.15"},"nextItem":{"title":"v0.13 - Hashing and toolchain improvements","permalink":"/blog/v0.13"}},"content":"import Image from \'@site/src/components/Image\';\\n\\nWith this release, we\'ve landed some new features that have been requested multiple times since\\nlaunch. A code generation and template scaffolding layer, as well as implicit dependency scanning\\nfor the project graph!\\n\\n\x3c!--truncate--\x3e\\n\\n## New `moon generate` command\\n\\nCode generation is the staple of any large company or repository. Want to spin up a new application?\\nWhat about an npm package? Or maybe third-party integrations? Avoid copy-and-pasting existing code,\\nand instead generate it with the new `moon generate` command, which is powered by our new generator\\nsystem.\\n\\nThe generator will locate a template by name on the file system (\\"npm-package\\" in the example\\nbelow), prompt and interpolate variables, render the files with [Tera](https://tera.netlify.app/) (a\\nRust based template engine), and write the files to the target destination.\\n\\n```shell\\n# Generate code from a template to a target directory\\n$ moon generate npm-package ./packages/example\\n```\\n\\nLearn more about [code generation in the official guide](../docs/guides/codegen)!\\n\\n## Implicit dependency scanning\\n\\nThis has been a request since moon\'s official release, and it\'s finally here! Up until now, if you\\nwanted project-to-project dependency relationships, you had to explicitly declare them with\\n[`dependsOn`](../docs/config/project#dependson). But thanks to a\\n[ton of](https://github.com/moonrepo/moon/pull/288)\\n[infrastructure](https://github.com/moonrepo/moon/pull/249) and\\n[platform](https://github.com/moonrepo/moon/pull/277) changes, we can now infer implicit\\ndependencies automatically!\\n\\nWe still suggest using explicit dependencies, as it provides more\\n[automation like project syncing](../docs/concepts/project#dependencies), but implicit is great for\\nadoption and migration purposes.\\n\\n## Report CI runs on pull requests\\n\\nWe\'re fans of continuous and easily accessible feedback, and as such, have released a new GitHub\\naction, [`moonrepo/run-report-action`](https://github.com/marketplace/actions/moon-ci-run-reports),\\nwhich reports the results of [`moon ci`](../docs/commands/ci) as a pull request comment. The report\\nlooks something like the following:\\n\\n<Image src={require(\'../static/img/github/run-report.png\')} width=\\"60%\\" />\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.14.0) for a\\nfull list of changes.\\n\\n- When running in a Docker container, caching is disabled in an effort to greatly reduce the size of\\n  the image.\\n- Updated `moon setup` to also install Node.js dependencies.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.15 release!\\n\\n- Major Docker workflow improvements!\\n- Frontmatter configuration within template files."},{"id":"v0.13","metadata":{"permalink":"/blog/v0.13","editUrl":"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-01_v0.13.mdx","source":"@site/blog/2022-09-01_v0.13.mdx","title":"v0.13 - Hashing and toolchain improvements","description":"With this release, we\'ve landed some improvements to our smart hashing, and paved the road for","date":"2022-09-01T00:00:00.000Z","formattedDate":"September 1, 2022","tags":[{"label":"hasher","permalink":"/blog/tags/hasher"},{"label":"toolchain","permalink":"/blog/tags/toolchain"}],"readingTime":2.995,"hasTruncateMarker":true,"authors":[{"name":"Miles Johnson","title":"Founder, developer","url":"https://github.com/milesj","imageURL":"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg","key":"milesj"}],"frontMatter":{"slug":"v0.13","title":"v0.13 - Hashing and toolchain improvements","authors":["milesj"],"tags":["hasher","toolchain"]},"prevItem":{"title":"v0.14 - Code generation and implicit dependencies","permalink":"/blog/v0.14"}},"content":"With this release, we\'ve landed some improvements to our smart hashing, and paved the road for\\nadditional languagues and tooling.\\n\\n\x3c!--truncate--\x3e\\n\\n## Node.js is now optional\\n\\nTitle may seem confusing at first, but don\'t worry, everything is fine! For some context, moon has\\nbeen designed to be language agnostic as we plan to support more than JavaScript in the future.\\nHowever, some aspects of the codebase were hard-coded for JavaScript and made the assumption that\\nJavaScript will always be used, with one such aspect being the\\n[`node`](../docs/config/workspace#node) setting in\\n[`.moon/workspace.yml`](../docs/config/workspace).\\n\\nWe\'ve reworked this setting to be optional, which allows a repository to opt out of JavaScript.\\nRight now, this basically does nothing as we do not support other languages yet, but we felt it\\nnecessary to report it anyways! A side-effect of this change is that actions in the runner have been\\nrenamed, for example, `SetupToolchain` -> `SetupNodeToolchain`.\\n\\n## Improved hashing accuracy\\n\\nOur [smart hashing layer](../docs/concepts/cache#hashing) is pretty powerful, but was not entirely\\naccurate. Up until now, when hashing a Node.js project, we\'d include the `dependencies`,\\n`devDependencies`, and `peerDependencies` versions located within the project\'s `package.json` as\\nhash inputs. This was great, because if a dependency was explicitly upgraded in the `package.json`,\\nit would invalidate the previous hashes as the version number changed.\\n\\nHowever, what if the dependency was implicitly upgraded by another project, but the `package.json`\\nwas not modified? These kind of transitive changes were currently ignored by moon, but no longer, as\\nmoon will now resolve all `package.json` dependencies to the resolved version found in the root\\nlockfile (`package-lock.json`, `yarn.lock`, etc)!\\n\\nAt moon, we believe in providing consumers with the ability to configure to their needs, and as\\nsuch, have added a new [`hasher`](../docs/config/workspace#hasher) setting to\\n[`.moon/workspace.yml`](../docs/config/workspace). This setting will allow you to choose between the\\n2 hashing patterns above!\\n\\n## New `moon check` command\\n\\nIf you\'re like us, you\'re constantly testing, linting, typechecking, so on and so forth, a project\\nwhile developing. This was rather cumbersome, as you either had to use separate run commands\\n(`moon run project:test`, `moon run project:lint`, etc), or use the multi-run approach\\n(`moon run project:test project:lint`). Both approaches were not ideal for rapid development.\\n\\nTo simplify this process, we\'ve added a new [`moon check`](../docs/commands/check) command, that\\nwill automatically run _all_ build and test tasks for a project (or many projects)! Local and non-CI\\ntasks will _not_ be ran.\\n\\n```shell\\n# Check project at current working directory\\n$ moon check\\n\\n# Check project by name\\n$ moon check app\\n\\n# Check multiple projects by name\\n$ moon check client server\\n```\\n\\n## New `@moonrepo/types` package\\n\\nWe have many ideas for moon specific npm packages that we plan to release, but before we do that, we\\nneed to ensure all of them are built with the correct interfaces. To solve this, we are shipping a\\nnew package, [@moonrepo/types](https://www.npmjs.com/package/@moonrepo/types), that simply publishes\\nTypeScript declarations. It contains everything from project and task shapes, configuration\\nstructures, runner information, and more.\\n\\n```ts\\nimport type { ProjectConfig } from \'@moonrepo/types\';\\n```\\n\\n## Other changes\\n\\nView the\\n[official release](https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.13.0) for a\\nfull list of changes.\\n\\n- The runner will now fail with an error if a task has defined `outputs` but an output was not\\n  created after the task is executed. This change was made so that artifacts are deterministic.\\n- The `actionRunner` setting in [`.moon/workspace.yml`](../docs/config/workspace) was renamed to\\n  `runner`.\\n\\n## What\'s next?\\n\\nExpect the following in the v0.14 release!\\n\\n- A `moon generate` command to generate new projects, files, scaffolding, and more from pre-defined\\n  templates.\\n- Implicit dependency discovery. moon will now scan manifest files and determine project\\n  relationships."}]}')}}]);