import {tell} from "../src/libraries";
import moment from 'moment';

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it('should tell the time', function() {
    expect(tell()).toEqual(moment().format('YYYY-MM-Do hh:mm:ss a'));
  })
})
