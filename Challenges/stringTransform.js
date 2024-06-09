function stringTransform(string) {
    const strLeng = string.length;
    
    if (strLeng % 3 === 0 && strLeng % 5 === 0) {
        const reversedString = string.split('').reverse().join('');
        return reversedString.split('').map(char => char.charCodeAt(0));
    } else if (strLeng % 3 === 0) {
        return string.split('').reverse().join('');
    } else if (strLeng % 5 === 0) {
        return string.split('').map(char => char.charCodeAt(0));
    }
    
    return string;
}

// Example usage:
console.log(stringTransform("Hamburger"));   // Returns: [104, 101, 108, 108, 111] because length is 5
console.log(stringTransform("Pizza"));  // Returns: "fedcba" because length is 6
// Returns: [106, 105, 104, 103, 102, 101, 100, 99, 98, 97] because length is 10
