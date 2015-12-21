// function isAnagramSubstring(string1, string2){
//     var string1Length = string1.length;
//     var string2Length = string2.length;
//
//     if(string1Length > string2Length) return false;
//
//     // prime the character map with frequency counts of characters
//     var target = {};
//     string1.split('').forEach(function(string1Char){
//         target[string1Char] = target[string1Char] === undefined ? 1 : target[string1Char] + 1;
//     });
//
//     //process initial window, decreasing frequency count of string1 characters each time it is found in string2
//     var i;
//     for(i = 0; i < string1Length; ++i){
//         var string2Char = string2[i];
//
//         if(string2Char in target){
//             target[string2Char] -= 1;
//         }
//     }
//
//     // set discrepency to absolute sum of all character values in target
//     var discrepency = 0;
//     for(var c in target){
//         discrepency += Math.abs(target[c]);
//     }
//
//     //repeatedly check then slide
//     for(i = string1Length; i < string2Length; ++i){
//
//         //anagram found!
//         if(discrepency === 0){
//             return true;
//         }
//
//         // first process letter from string1Length steps ago from s2
//         var string2Char = string2[i-string1Length];
//
//         if(string2Char in target){
//             target[string2Char] += 1;
//
//             if(target[string2Char] > 0){
//                 discrepency += 1; //worse
//             }else{
//                 discrepency -= 1; //better
//             }
//         }
//
//         //now process new letter
//         string2Char = string2[i];
//
//         if(string2Char in target){
//             target[string2Char] -= 1;
//
//             if(target[string2Char] < 0){
//                 discrepency += 1; //worse
//             }else{
//                 discrepency -= 1; //better
//             }
//         }
//     }
//
//     return discrepency === 0;
// }

function isAnagram(s1, s2){
    if(s1.length !== s2.length) return false;

    var s1CharMap = {};
    var s2CharMap = {};

    s1.split('').forEach(function(s1Char){
        s1CharMap[s1Char] = s1CharMap[s1Char] === undefined ? 1 : s1CharMap[s1Char] + 1;
    });

    s2.split('').forEach(function(s2Char){
        s2CharMap[s2Char] = s2CharMap[s2Char] === undefined ? 1 : s2CharMap[s2Char] + 1;
    });

    for(var s1Char in s1CharMap){
        if(s1CharMap[s1Char] !== s2CharMap[s1Char]){
            return false;
        }

        delete s1CharMap[s1Char];
        delete s2CharMap[s1Char];
    }

    return Object.keys(s2CharMap).length === 0;
}

function isSubAnagram(s1, s2){
    if(s1.length > s2.length) return false;

    for(var i = 0; i <= s2.length - s1.length; ++i){
        console.log(i, i + s1.length, s2.substring(i, i + s1.length));
        if(isAnagram(s1, s2.substring(i, i + s1.length))){
            return true;
        }
    }

    return false;
}

function isSubAnagram(string1, string2){
    if(string1.length > string2.length) return false;

    for(let i = 0; i <= string2.length - string1.length; ++i){
        const window = string2.substring(i, i + string1.length);

        if(isAnagram(string1, window)){
            return true;
        }
    }

    return false;
}
// console.log(isSubAnagram("wofl", "stack overflow"))

// console.log(isAnagramSubstring("rove", "stack overflow"));
// console.log(isAnagramSubstring("rowe", "stack overflow"));


function isAnagram(string1, string2){
    if(string1.length !== string2.length) return false;

    let string1CharCounts = {};
    let string2CharCounts = {}

    for(let i = 0; i < string1.length; ++i){
        let char = string1[i];
        string1CharCounts[char] = string1CharCounts[char] === undefined ? 1 : ++string1CharCounts[char];
    }

    for(let i = 0; i < string2.length; ++i){
        let char = string2[i];
        string2CharCounts[char] = string2CharCounts[char] === undefined ? 1 : ++string2CharCounts[char];
    }

    for(let char in string1CharCounts){
        let leftCount = string1CharCounts[char];
        let rightCount = string2CharCounts[char];

        if(leftCount !== rightCount) return false;

        delete string1CharCounts[char];
        delete string2CharCounts[char];
    }

    return !Object.keys(string2CharCounts).length;
}


console.log(isSubAnagram("wofl", "stack overflow"))

console.log(isSubAnagram("rove", "stack overflow"));
console.log(isSubAnagram("rowe", "stack overflow"));
