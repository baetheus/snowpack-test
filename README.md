# Test

This is a test repo the reproduces an issue in snowpack. To see the issue:

1. Clone the repo
2. Install dependencies
3. Run `npm run build`

The issue should be as follows:

```
> test@1.0.0 build /Users/brandon/Documents/github/baetheus/test
> snowpack build

! rebuilding dependencies...
⠼ snowpack installing... preact, preact-router
✖ snowpack failed to load snowpack-wrap:node_modules/preact/dist/preact.module.js
  'FunctionalComponent' is not exported by node_modules/preact/dist/preact.module.js, imported by snowpack-wrap:/Users/brandon/Documents/github/baetheus/test/node_modules/preact/dist/preact.module.js
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! test@1.0.0 build: `snowpack build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the test@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/brandon/.npm/_logs/2020-06-22T23_53_30_825Z-debug.log
```
