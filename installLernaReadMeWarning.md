mitko@PC-OMEN MINGW64 /i/dev/application-software/efremtid/e-faktury_no/proto_ra-v-4-0-0-beta/e-faktury_ra-4b_v-2-0-0 (v-2-0-0)
$ git commit -m "init(lerna.json): add lerna to workspace yarn in monorepo"
[v-2-0-0 6700b19] init(lerna.json): add lerna to workspace yarn in monorepo
 5 files changed, 682 insertions(+), 56 deletions(-)
 rewrite app/invoice-app/src/App.js (95%)
 create mode 100644 packages/doc/MarkdownExample.md

mitko@PC-OMEN MINGW64 /i/dev/application-software/efremtid/e-faktury_no/proto_ra-v-4-0-0-beta/e-faktury_ra-4b_v-2-0-0 (v-2-0-0)
$ git push
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 8 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 12.44 KiB | 1.13 MiB/s, done.
Total 12 (delta 9), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (9/9), completed with 8 local objects.
To https://github.com/marekmitko/e-faktury-ra4b.git
   af88ac6..6700b19  v-2-0-0 -> v-2-0-0

mitko@PC-OMEN MINGW64 /i/dev/application-software/efremtid/e-faktury_no/proto_ra-v-4-0-0-beta/e-faktury_ra-4b_v-2-0-0 (v-2-0-0)
$  yarn add lerna@2.5.1 -D -W
yarn add v1.22.17
[1/4] Resolving packages...
warning lerna > temp-write > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning lerna > conventional-changelog-cli > tempfile > uuid@2.0.3: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which 
is known to be problematic.  See https://v8.dev/blog/math-random for details.
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > @testing-library/user-event@13.5.0" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > @emotion/react > @emotion/babel-plugin@11.7.2" has unmet peer dependency "@babel/core@^7.0.0".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > ra-data-json-server > ra-core@4.0.0-beta.1.0" has unmet peer dependency "history@^5.1.0". 
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > ra-data-json-server > ra-core@4.0.0-beta.1.0" has unmet peer dependency "react-hook-form@^7.25.0".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > ra-data-json-server > ra-core@4.0.0-beta.1.0" has unmet peer dependency "react-router@^6.1.0".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > ra-data-json-server > ra-core@4.0.0-beta.1.0" has unmet peer dependency "react-router-dom@^6.1.0".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > react-scripts > tailwindcss@3.0.23" has unmet peer dependency "autoprefixer@^10.0.2".     
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > @emotion/react > @emotion/babel-plugin > @babel/plugin-syntax-jsx@7.16.7" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > react-scripts > eslint-config-react-app > eslint-plugin-flowtype@8.0.3" has unmet peer dependency "@babel/plugin-syntax-flow@^7.14.5".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > react-scripts > eslint-config-react-app > eslint-plugin-flowtype@8.0.3" has unmet peer dependency "@babel/plugin-transform-react-jsx@^7.14.9".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > react-scripts > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.0" has unmet peer dependency "typescript@>= 2.7".
warning "workspace-aggregator-0056b986-bd4c-48ca-8fb3-f9db8dbfde27 > @app/invoice-app > react-scripts > eslint-config-react-app > @typescript-eslint/eslint-plugin > tsutils@3.21.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".