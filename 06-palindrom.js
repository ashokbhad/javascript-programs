console.log(`%cProgram to check the whether the string is palindrome or not?`, "color: green");
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Compare the cleaned string with its reverse
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("dad")); // true
console.log(isPalindrome("hello")); // false

console.log(`%cProgram to check the whether the string is anagram or not?`, "color: green");

function areAnagrams(str1, str2) {
    // Function to clean and sort the string
    function cleanAndSort(str) {
        return str
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
    }
    // Compare sorted versions of both strings
    return cleanAndSort(str1) === cleanAndSort(str2);
}

// Examples
console.log(areAnagrams("Silent", "Listen")); // true
console.log(areAnagrams("Hello", "World")); // false
console.log(areAnagrams("Such", "much")); // false
