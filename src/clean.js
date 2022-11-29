const jetpack = require('fs-jetpack')

module.exports = function () {
  // Clear
  jetpack.remove('./dist/holidays');
  
  console.log('Finished cleaning', new Date().toISOString());

  return
};

if (require.main === module) {
  module.exports();
}
