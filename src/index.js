import _path from 'path';

const packagePath = _path.resolve(process.cwd(), './package.json');
import { version } from packagePath;

export default function versionTransform() {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'VERSION') {
          path.replaceWithSourceString('"' + VERSION + '"');
        }
      },
    },
  };
};

