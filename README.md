# VSCode Extensions template

This is my custom VSCode extension template. Mainly used to illustrate my blog post about aliases actually.

## How to use it

1. Clone the repo
2. Do `git remote remove origin`
3. Find all occurenses of `templaet` in the project and replace them with your extension name

You're good to go!

## Configuring aliases

Aliases are configure in `tsconfig.json`. There are 2 sample aliases.

### Move aliasing to another extension

To use aliasing in another extension you need to do the following:

1. Migrate the following code from webpack config:
```javascript
const tsconfigContent = require('./tsconfig.json');

const alias = {}
Object.entries(tsconfigContent.compilerOptions.paths).forEach(([aliasName, [ aliasContent ]]) => {
  const name = aliasName.replace('/*', '');
  const aliasPath = path.resolve(root, 'out', aliasContent.replace('/*', ''));
  alias[name] = aliasPath;
})
```
2. Move `alias.ts` to your test folder
3. Migrate the following code from `runTest.ts`
```typescript
import './alias';
import 'module-alias/register';
```
4. Install `module-alias` package

## Version under test

I have a restriction on the VSCode version I can use at work, so I create my extensions with respect to that. For this template it means I have a code that makes sure I run test against a speciic version instead of the latest stable.

The version under test is specified in `package.json` in `engines.vscode`.

To remove this functionality simply change thfollowing line in `runTest.ts`:

`await runTests({ extensionDevelopmentPath, extensionTestsPath, version });`

to

`await runTests({ extensionDevelopmentPath, extensionTestsPath });`
