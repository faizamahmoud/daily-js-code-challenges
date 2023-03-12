const  {googleArrays} = require( "./googleArrays")
describe('twoOccurences', function () {
    it('should return 2', function () {
        let nums = [2, 5, 1, 2, 12];
        googleArrays(nums);
        expect(googleArrays(nums)).toEqual(2);
    }),

    it('should return 1', function () {
        let nums = [2, 1, 1, 2, 12];
        googleArrays(nums);
        expect(googleArrays(nums)).toEqual(1);
    }),

    it('no duplicates', function () {
        let nums = [2, 1, 3,5];
        googleArrays(nums);
        expect(googleArrays(nums)).toEqual(undefined);
    })

});