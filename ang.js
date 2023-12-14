// Copyright (c) 2023 AbelBill<learn.9527.8589@qq.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// 补齐.00
// 转换类型为数字

function isn(f, n = 0.0) {
  // if ([null, undefined, "", NaN, Infinity].includes(f)) {
  //   return n;
  // }
  // return f && isNaN(Number(f)) ? n : Number(f);
  if (!f || [null, undefined, "", NaN, Infinity].includes(f) || isNaN(Number(f))) {
    return n;
  }
  return Number(f);
}
function fill0(_val, return_type = 1, precision = 2) {
  let temp_v;
  let _precision = isn(precision) || 2;

  // 替换,
  let _v = String(_val).replace(/,/gi, "");
  let _vl = isn(_v).toFixed(_precision);
  // 判断类型
  if (return_type === 1) {
    temp_v = Number(_vl).toLocaleString();
  } else if (return_type === 2) {
    temp_v = String(_vl);
  } else {
    return _vl;
  }
  let dot_index = temp_v.indexOf(".");
  let rep_n = dot_index === -1 ? _precision : _precision - temp_v.slice(dot_index + 1).length;
  let prs = dot_index === -1 ? "." + "0".repeat(rep_n) : "0".repeat(rep_n);
  return temp_v + prs; //给合计项以使用千分位(逗号)分隔
}
function fillZero(_val, type = "toLocalString") {
  let _vl = _val ? String(_val).replace(/,/gi, "") : "";
  let val = isn(_vl).toFixed(2);
  let sums_ts;
  if (type === "toLocalString") {
    sums_ts = Number(val).toLocaleString();
  } else if (type === "number") {
    sums_ts = val;
  } else {
    return val;
  }
  let dot_index = sums_ts.indexOf(".");
  let rep_n = dot_index === -1 ? 2 : 2 - sums_ts.slice(dot_index + 1).length;
  let prs = dot_index === -1 ? "." + "0".repeat(rep_n) : "0".repeat(rep_n);
  return sums_ts + prs; //给合计项以使用千分位(逗号)分隔
}
module.exports = {
  isn,
  fillZero,
  fill0,
};
