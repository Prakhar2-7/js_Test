//Check if a String is a Palindrome  
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/\s/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
  
  console.log(isPalindrome("Race car")); 