let fle = require("./fle");
function enc_base64(str) {
  return Buffer.from(str, "utf-8").toString("base64");
}
function dec_base64(str) {
  return Buffer.from(str, "base64").toString("utf-8");
}

// lower letters 26
var L26 = [];
// upper letters 26
var U26 = [];
var n09 = "0123456789";
var n90 = "9876543210";
for (var a = 97; a < 123; a++) {
  L26.push(String.fromCharCode(a));
  U26.push(String.fromCharCode(a).toUpperCase());
}
var S26 = L26.join(""); // 'a-z'
var B26 = U26.join(""); // 'A-Z'
var S62 = S26.split("").reverse().join(""); // 'Z-A' inverted order
var B62 = B26.split("").reverse().join(""); // 'z-a' inverted order

function myIsNaN(value) {
  return typeof Number(value) === "number" && !isNaN(value);
}
function IsUpperOrLower(value, isType = "upper") {
  var uindex = value.charCodeAt();
  var n_pre = 0;
  var n_suf = 0;
  if (isType === "upper") {
    // 65-91是大写, 前闭后开区间
    n_pre = 65;
    n_suf = 91;
  } else if (isType === "lower") {
    // 97-122是小写, 前闭后开区间
    n_pre = 97;
    n_suf = 123;
  } else {
    return "value at myIsUpper is invalid";
  }

  return n_pre <= uindex && uindex < n_suf;
}

function clo(temp_str, _type = "enc") {
  var sublist = [];
  if (_type == "enc") {
    var sub_digit = n90;
    var sub_digit_pushed = n09;
    var sub_big = B26;
    var sub_gib = B62;
    var sub_small = S26;
    var sub_lams = S62;
  } else {
    var sub_digit = n09;
    var sub_digit_pushed = n90;
    var sub_big = B62;
    var sub_gib = B26;
    var sub_small = S62;
    var sub_lams = S26;
  }

  if (["", null, undefined, NaN].includes(temp_str)) {
    return "The type of the value is incorrect";
  }
  // 分割字符串
  var substr = temp_str.split("");
  for (a = 0; a < substr.length; a++) {
    // 判断数字
    if (myIsNaN(substr[a])) {
      // 当前字符串的下标
      var e_digit_index = sub_digit.indexOf(substr[a]);
      sublist.push(sub_digit_pushed[e_digit_index]);
    }
    // 判断大写
    else if (IsUpperOrLower(substr[a], "upper")) {
      // 当前字符串的下标
      var e_upper_index = sub_big.indexOf(substr[a]);
      sublist.push(sub_gib[e_upper_index]);
    }
    // 判断大写
    else if (IsUpperOrLower(substr[a], "lower")) {
      // 当前字符串的下标
      var e_lower_index = sub_small.indexOf(substr[a]);
      sublist.push(sub_lams[e_lower_index]);
    } else {
      sublist.push(substr[a]);
    }
  }
  return sublist.join("");
}

module.exports = { enc_base64, dec_base64, clo, fle };
