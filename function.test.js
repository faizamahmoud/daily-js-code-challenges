const { moveZeroesCountAndSwap, moveZeroesTwoPointers } = require('./functions');

// describe('Contains Duplicate', () => {
//     test('returns true if any value appears at least twice in the array', () => {
//         expect(bruteForce([1, 2, 3, 1])).toBe(true);
//         expect(bruteForce([1, 2, 3, 4])).toBe(false);
//         expect(bruteForce([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
//         expect(bruteForce([1])).toBe(false)
//         expect(bruteForce([])).toBe(false)
//     });
// });



describe('moveZeroesCountAndSwap', function () {
    it('should move all zeros to the end of the array', function () {
        let nums = [0, 1, 0, 3, 12];
        moveZeroesCountAndSwap(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    it('should move all zeros to the end of the array (multiple zeros)', function () {
        let nums = [0, 0, 1, 0, 3, 0, 0, 12, 0];
        moveZeroesCountAndSwap(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0, 0, 0, 0, 0]);
    });
    // it('should move all zeros to the end of the array (multiple zeros)', function () {
    //     let nums = [0, 0, 1, 0];
    //     moveZeroesCountAndSwap(nums);
    //     expect(nums).toEqual([1,0,0,0]);
    // });

    it('should not change the array if there are no zeros', function () {
        let nums = [1, 2, 3];
        moveZeroesCountAndSwap(nums);
        expect(nums).toEqual([1, 2, 3]);
    });

    it('should not change the array if it is empty', function () {
        let nums = [];
        moveZeroesCountAndSwap(nums);
        expect(nums).toEqual([]);
    });

    it('should handle arrays with only zeros', function () {
        let nums = [0, 0, 0];
        moveZeroesCountAndSwap(nums);
        expect(nums).toEqual([0, 0, 0]);
    })
});


describe('moveZeroesTwoPointers', function () {
    it('should move all zeros to the end of the array', function () {
        let nums = [0, 1, 0, 3, 12];
        moveZeroesTwoPointers(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    it('should move all zeros to the end of the array (multiple zeros)', function () {
        let nums = [0, 0, 1, 0, 3, 0, 0, 12, 0];
        moveZeroesTwoPointers(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0, 0, 0, 0, 0]);
    });
    // it('should move all zeros to the end of the array (multiple zeros)', function () {
    //     let nums = [0, 0, 1, 0];
    //     moveZeroesTwoPointers(nums);
    //     expect(nums).toEqual([1,0,0,0]);
    // });

    it('should not change the array if there are no zeros', function () {
        let nums = [1, 2, 3];
        moveZeroesTwoPointers(nums);
        expect(nums).toEqual([1, 2, 3]);
    });

    it('should not change the array if it is empty', function () {
        let nums = [];
        moveZeroesTwoPointers(nums);
        expect(nums).toEqual([]);
    });

    it('should handle arrays with only zeros', function () {
        let nums = [0, 0, 0];
        moveZeroesTwoPointers(nums);
        expect(nums).toEqual([0, 0, 0]);
    })
});