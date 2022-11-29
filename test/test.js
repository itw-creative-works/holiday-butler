const package = require('../package.json');
const assert = require('assert');

beforeEach(() => {
});

before(() => {
});

after(() => {
});

/*
 * ============
 *  Test Cases
 * ============
 */
describe(`${package.name}`, () => {
  const lib = new (require('../dist/index.js'))();

  // Method
  describe('.method()', () => {

    // Method tests
    it('this => that', () => {
      lib.getHoliday({country: 'US', year: 2022})
      .then(r => {
        console.log('---r', r);
      })
      .catch(e => {
        console.log('---e', e);
      })        
      return true;
      // return assert.equal(lib, {});
    });

    it('this => that', () => {
      lib.isHoliday({country: 'US', date: new Date('2050-11-24T05:00:00.000Z')})
      .then(r => {
        console.log('---r', r);
      })
      .catch(e => {
        console.log('---e', e);
      })        
      return true;
      // return assert.equal(lib, {});
    });    

  });

})
