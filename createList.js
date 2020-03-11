const docs = require("./all");
var arr = [];
const fs = require("fs");

Object.keys(docs).forEach(g => {
  docs[g].forEach(c => {
    if (typeof c == "object") {
      Object.keys(c).forEach(name => {
        c[name].forEach(el => {
          arr.push(g + " " + name + " " + el);
        });
      });
    } else {
      if (c !== "") arr.push(g + " " + c);
    }
  });
});

fs.writeFileSync("text-list.json", JSON.stringify(arr));
