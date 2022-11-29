const jetpack = require('fs-jetpack')
const Holidays = require('date-holidays');
const holidays = new Holidays();
const moment = require('moment');
let countries = Object.keys(holidays.getCountries());
const priorities = ['US'];
const years = 100;

module.exports = function () {
  // Clear
  jetpack.remove('./dist/holidays');
  
  // Add US first
  countries = countries.filter(e => !priorities.includes(priorities));
  countries.unshift(...priorities);

  // if (true) {
  //   countries = priorities;
  // }
  
  // initialize holidays for all
  console.log(`Generating holidays for ${countries.length} countries and ${years} years`);

  countries.forEach((country) => {
    try {
      let date = new Date(0);
      holidays.init(country);

      for (let index = 0; index < years; index++) {
        const year = date.getFullYear();        
        const current = holidays.getHolidays(year);

        current
        .forEach(h => {
          // h.date = h.start;
          delete h.date;
        });

        setCustomHolidays(current, country, year);
        
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

function setCustomHolidays(list, country, year) {
  if (country === 'US') {
    replace(list, 'Day after Thanksgiving Day', {name: 'Black Friday'});
    insert(list, 'after', 'Black Friday', function (existing) {
      const start = moment(existing.start).add(3, 'days').toISOString();
      const end = moment(existing.start).add(4, 'days').toISOString();
      return {
        start: start,
        end: end,
        name: 'Cyber Monday',
        type: 'observance',
        rule: 'monday after 4th thursday in November'
      }      
    });
  }
}

function replace(list, name, data) {
  const index = list.findIndex(i => i.name === name);
  if (index !== -1) {
    Object.keys(data)
    .forEach(function (key) {
      list[index][key] = data[key]
    })
  }
}

function insert(list, position, name, fn) {
  const index = list.findIndex(i => i.name === name);
  if (index !== -1) {
    const p = position === 'before' ? index - 1 : index + 1;

    list[p] = fn(list[index]);
  }
}
