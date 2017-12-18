/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Clipboard/Clipboard.js
 */
let _content = null;

const ExportGetUserInfo = {
  getOpenId() {
    return Promise.resolve(_content);
  }
};

module.exports = ExportGetUserInfo;
