import _path from 'path';

const packagePath = _path.resolve(process.cwd(), './package.json');
const { version } = require(packagePath);

export default function versionTransform() {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'VERSION') {
          path.replaceWithSourceString('"' + version + '"');
        }
      },
    },
  };
};

