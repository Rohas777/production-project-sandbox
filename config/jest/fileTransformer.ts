const path = require('path');

module.exports = {
    process(sourceText: string, sourcePath: string) {
        return {
            code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
        };
    },
};
