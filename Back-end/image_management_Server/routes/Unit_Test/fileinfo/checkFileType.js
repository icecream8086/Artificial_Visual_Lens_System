// @ts-nocheck
const { checkFileType } = require('../../../lib/life_cycle/checkFileType');

const filename = '../../../File_Stream/Test/catch/eager-for-power.jpg';

checkFileType(filename)
    .then(isSupportedType => {
        if (isSupportedType) {
            console.log('True');
        } else {
            console.log('False');
        }
    })
    .catch(error => {
        console.error('发生错误：', error);
    });
