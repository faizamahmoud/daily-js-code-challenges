
function matchingStrings(strings, queries) {

    if ((strings.length || queries.length) < 1) return [];

    let len = queries.length
    let counter = new Array(len).fill(0)

    for (let i = 0; i < queries.length; i++) {

        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                console.log(`${queries[i]} ${strings[j]}`)
                counter[i] += 1;
                strings.splice(1, strings[j])
            }
        }
    }

    return counter;
}

const strings1 = ['aba', 'baba', 'aba', 'xzxb'] //j
const queries1 = ['aba', 'xzxb', 'ab'] // i 
console.log(matchingStrings(strings1, queries1))

//   matchingStrings(strings1, queries1)


