/**
 * @param {string} s
 * @return {string}
 */

 var makeFancyString = function(s) {
    let result = ""; // Initialize an empty string to store the result
    let count = 1; // Initialize a counter for consecutive characters

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++; // Increase the counter if the current character matches the previous one
        } else {
            count = 1; // Reset the counter if the character is different
        }

        if (count < 3) {
            result += s[i - 1]; // Append the previous character if it doesn't form three in a row
        }
    }

    result += s[s.length - 1]; // Add the last character, as it wasn’t added in the loop

    return result;
};

// var makeFancyString=function(s){
//     let splitChar=s.split("")
//     console.log(splitChar)
//     for(let i =0;i<splitChar.length;i++){
//         if( splitChar[i]==splitChar[i+2]){
//             splitChar.splice(i+2,1)
//         }
//     }
//     return splitChar.join("")
// }