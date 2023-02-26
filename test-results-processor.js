// module.exports = (testResults, options) => {
//     const { testResultsProcessor } = require('jest-jasmine2');
//     const result = testResultsProcessor(testResults, options);
//     const { testResults: formattedResults } = result;
//     const output = formattedResults.map(({ ancestorTitles, title, status }) =>
//       `● ${ancestorTitles.join(' › ')} › ${title}\n\n${status}\n`
//     ).join('');
//     console.log(output);
//     return result;
//   };
  

module.exports = (testResults, options) => {

  const { testResultsProcessor } = require('jest-jasmine2');
  
   // The testResults and options parameters are passed into the testResultsProcessor function, which returns a result object.
   const result = testResultsProcessor(testResults, options);

   // The testResults property of the result object is assigned to a new variable named formattedResults.
   const { testResults: formattedResults } = result;
 
   // The formattedResults array is mapped to a new array of objects with only the ancestorTitles, title, and status properties.
   const output = formattedResults.map(({ ancestorTitles, title, status }) => ({
     title: `${ancestorTitles.join(' › ')} › ${title}`,
     status,
   }));
 
   // The output array is logged to the console as a formatted JSON string.
   console.log(JSON.stringify(output, null, 2));
 
  return result;
};

module.exports = {
    testResultsProcessor: '<rootDir>/test-results-processor.js',
  };
  