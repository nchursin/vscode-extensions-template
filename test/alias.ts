import * as moduleAlias from 'module-alias';
import * as path from 'path';
const tsconfigContent = require('../../tsconfig.json');

//
// Register alias
//

const paths = tsconfigContent.compilerOptions.paths;
const extensionRoot = path.resolve(__dirname, '..', '..');

Object.entries(paths).forEach(([aliasName, aliasContentList]: [string, unknown]) => {
    const [ aliasContent ] = aliasContentList as string[];
    const name = aliasName.replace('/*', '');
    const aliasPath = path.resolve(extensionRoot, 'out', aliasContent.replace('/*', ''));
    moduleAlias.addAlias(name,  aliasPath);
})

