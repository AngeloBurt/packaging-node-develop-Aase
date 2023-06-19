// Copyright (c) 2023 AbelBill<learn.9527.8589@qq.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// 补齐.00
module.exports = {
  fillZero: (_val, type = "toLocalString") => {
    let _vl = _val ? String(_val).replace(/,/gi, "") : "";
    let val = fg.isn(_vl).toFixed(2);
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
  },
};
