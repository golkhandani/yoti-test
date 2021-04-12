const fs = require('fs');
const path = require('path');

const yotiConfig = require('yoti/config').yoti;

module.exports = {
  YOTI_CLIENT_SDK_ID: process.env.YOTI_CLIENT_SDK_ID,
  YOTI_PEM: fs.readFileSync(path.join(__dirname, './keys', 'YotiVerification-access-security.pem')),
  YOTI_DOC_SCAN_IFRAME_URL: `${yotiConfig.docScanApi}/web/index.html`,
  YOTI_APP_BASE_URL: process.env.YOTI_APP_BASE_URL || 'http://localhost:3000',
};
