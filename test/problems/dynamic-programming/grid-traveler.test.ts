// eslint-disable-next-line camelcase
import {gridTraveler_memoized} from '../../../src/problems/dynamic-programming/grid-traveler';

describe('grid traveler', function () {
	it('should test grid traveler', function () {
		twoNumberTester(gridTraveler_memoized(5, 4), 35);
	});
});
