const palindromes = function (str) {
    let reg = /[\W_]/g;
    let oldStr = str.toLowerCase().replace(reg, "");
    let lowStr = str.toLowerCase().replace(reg, "");
    let revStr = lowStr.split("").reverse().join("");
    console.log(str)
    console.log(lowStr)
     if (revStr === oldStr) {
      return true;
    } else {
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;