function frequencySort(str) {
    const charFrequency = {};
    
    // Calculate the frequency of each character in the string
    for (const char of str) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
    
    // Sort the characters based on the frequency, case, and alphabetical order
    const sortedChars = Object.keys(charFrequency).sort((a, b) => {
      if (charFrequency[a] === charFrequency[b]) {
        if (a.toLowerCase() === b.toLowerCase()) {
          return a.localeCompare(b);
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
      }
      return charFrequency[b] - charFrequency[a];
    });
    
    // Build the new string with sorted characters
    let result = '';
    for (const char of sortedChars) {
      result += char.repeat(charFrequency[char]);
    }
    
    return result;
  }
  
  // Test cases
  console.log(frequencySort("tree")); // Output: "eert"
  console.log(frequencySort("cccaaa")); // Output: "aaaccc"
  console.log(frequencySort("Aabb")); // Output: "bbAa"
  