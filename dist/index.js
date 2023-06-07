(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/templates/returnExports.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  var nodeFetch;

  var environment = (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') ? 'node' : 'browser';

  var SOURCE = 'library';
  var VERSION = '1.0.0';

  function HolidayButler(options) {
    var self = this;

    self.options = options || {};

    return self
  };

  HolidayButler.prototype.getHoliday = function (options) {
    var self = this;

    return new Promise(function(resolve, reject) {
    
      options = options || {};
      options.country = options.country || 'US';
      options.year = options.year || new Date().getFullYear();

      if (!nodeFetch) {
        nodeFetch = self.options.environment === 'browser' ? window.fetch : require('node-fetch');
      }

      nodeFetch('https://cdn.jsdelivr.net/npm/holiday-butler@latest/dist/holidays/' + options.country + '/' + options.year + '.json', {
        method: 'get',
      })
      .then(function (res) {
        if (res.status >= 200 && res.status < 300) {
          res.json()
          .then(function (json) {
            return resolve(json);
          })
          .catch(function (e) {
            return reject(e);
          })
        } else {
          res.text()
          .then(function (text) {
            return reject(new Error(text || res.statusText));
          })
          .catch(function (e) {
            return reject(e);
          })
        }
      })
      .catch(function (e) {
        return reject(e);
      })      

    });
  }

  HolidayButler.prototype.isHoliday = function (options) {
    var self = this;

    return new Promise(function(resolve, reject) {

      options = options || {};
      options.date = new Date(options.date || new Date());
    
      self.getHoliday({country: options.country, year: options.date.getFullYear()})
      .then(function (holidays) {
        for (var index = 0; index < holidays.length; index++) {
          var holiday = holidays[index];

          if (options.date >= new Date(holiday.start) && options.date <= new Date(holiday.end)) {
            return resolve(true);
          }
        }

        return resolve(false);
      })
      .catch(function (e) {
        return reject(e);
      })

    });
  }

  // Register
  if (environment === 'browser') {
    try {
      window.HolidayButler = HolidayButler;
    } catch (e) {
    }
  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return HolidayButler; // Enable if using UMD

}));
