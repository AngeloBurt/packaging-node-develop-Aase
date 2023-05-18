//获取项目工程里的图片
var fs = require("fs"); //引用文件系统模块
var path = require("path"); //引用path
var process = require("process"); //引用process

function verifyType(name) {
  var type = "";
  if (!name) {
    return "文件名不能为空";
  } else if (/\.(png|jpg|gif|jpeg|webp)$/.test(name.toLowerCase())) {
    type = "img";
  } else if (/\.(mp4|rmvb|flv|avi|mpeg)$/.test(name.toLowerCase())) {
    type = "mp4";
  } else if (/\.(m3u8)$/.test(name.toLowerCase())) {
    type = "m3u8";
  } else if (/\.(txt)$/.test(name.toLowerCase())) {
    type = "txt";
  } else if (/\.(ts)$/.test(name.toLowerCase())) {
    type = "ts";
  } else if (/\.(pdf)$/.test(name.toLowerCase())) {
    type = "pdf";
  } else if (/\.(doc|docx)$/.test(name.toLowerCase())) {
    type = "doc";
  } else if (/\.(mp3)$/.test(name.toLowerCase())) {
    type = "mp3";
  } else if (/\.(zip|7z|rar)$/.test(name.toLowerCase())) {
    type = "zip";
  } else if (/\.(js)$/.test(name.toLowerCase())) {
    type = "js";
  } else {
    type = "luffy_other";
  }
  return type;
}
function readFileList(path, filesList) {
  try {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
      if (!["node_modules", ".git", ".idea"].includes(itm)) {
        var stat = fs.statSync(path + itm);
        if (stat.isDirectory()) {
          //递归读取文件
          readFileList(path + itm + "/", filesList);
        } else {
          var obj = {}; //定义一个对象存放文件的路径和名字
          obj.path = path; //路径
          obj.filename = itm; //名字
          obj.type = verifyType(itm);
          filesList.push(obj);
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
}
var getFiles = {
  //获取文件夹下的所有文件
  getFileList: function (path) {
    if (path && path[path.length - 1] === "/") {
      var filesList = [];
      readFileList(path, filesList);
      return filesList;
    } else {
      throw Error("path不是以/结尾,请修改");
    }
  },
  test: function () {
    console.log("Output: getFiles => test");
    return "Output: getFiles => test";
  },
};

// fs.writeFile("./" + process.uptime() + ".json", JSON.stringify(getFiles.getFileList("./")), { flag: "wx" }, function (_err) {
//   if (_err) {
//     console.log("🚀 ~ file: getAllFile.js ~ line 54 ~ _err", _err);
//   } else {
//     console.log("保存成功", "green");
//   }
// });

module.exports = { getFiles };
