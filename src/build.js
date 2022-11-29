const jetpack = require('fs-jetpack')
const Holidays = require('date-holidays')
const holidays = new Holidays();
let countries = Object.keys(holidays.getCountries());
const priorities = ['US'];
const years = 100;

module.exports = function () {
  // Clear
  jetpack.remove('./dist/holidays');
  
  // Add US first
  countries = countries.filter(e => !priorities.includes(priorities));
  countries.unshift(...priorities);
  
  // initialize holidays for all
  console.log(`Generating holidays for ${countries.length} countries and ${years} years`);

  countries.forEach((country) => {
    try {
      let date = new Date(0);
      holidays.init(country);

      for (let index = 0; index < years; index++) {
        // console.log(date.getFullYear())
        const year = date.getFullYear();        
        const current = holidays.getHolidays(year);
        
        jetpack.write(`./dist/holidays/${country}/${year}.json`, current);
        
        date.setFullYear(date.getFullYear() + 1);
      }
      
      console.log('Generated country', country, jetpack.list(`./dist/holidays/${country}`).length);
    } catch (e) {
      console.error('Failed for', country, e);
    } 
  });  

  console.log('Finished generating', new Date().toISOString());

  return
};

if (require.main === module) {
  module.exports();
}
