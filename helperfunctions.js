var helperFunctions = {
  sortLetters: function(s, reverse) {
    return reverse ? s.trim().split("").sort().reverse().join("") : s.trim().split("").sort().join("");
  },

  firstLetterUpperCase: function(s) {
    return s.trim().slice(0, 1).toUpperCase() + s.slice(1);
  },

  uniqueChars: function(str) {
    str = str.toLowerCase();
    var chars = [];

    for (var i = 0; i < str.length; i++) {
      if (chars.indexOf(str.charAt(i)) == -1 && str.charAt(i) !== " ") {
        chars.push(str[i]);
      }
    }
    return chars.sort();
  },

  passwordGenerator: function(passwordLength, option) {
    var pass = "";
    var chars = "";
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbol = "!+&=?_-*";

    switch (option) {
      case 1:
        // only lowercase letters
        chars = lowerCaseChars;
        break;
      case 2:
        // lowercase+uppercase+number
        chars = upperCaseChars + lowerCaseChars + numbers;
        break;
      default:
        // lowercase+uppercase+number+symbol
        chars = upperCaseChars + lowerCaseChars + numbers + symbol;
    }
    for (var i = 0; i < passwordLength; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  },
  passwordChecker: function(password) {
    var charCount = password.length;

    if (charCount < 8 || password.search(/[0-9]/) === -1 || password.search(/[A-Z]/) === -1) {
      return "password must contain:\n*8 chars\n*at least 1 number\n at least 1 number";
    } else {
      return true;
    }
  }
}
