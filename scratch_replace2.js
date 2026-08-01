const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
const pairsPath = process.argv[3];
let content = fs.readFileSync(filePath, 'utf8');
const pairs = require(path.resolve(pairsPath));
let ok = 0, fail = [];
for (const [oldStr, newStr] of pairs) {
  const count = content.split(oldStr).length - 1;
  if (count !== 1) {
    fail.push({ oldStr, count });
    continue;
  }
  content = content.replace(oldStr, newStr);
  ok++;
}
fs.writeFileSync(filePath, content, 'utf8');
console.log(`OK: ${ok}, FAIL: ${fail.length}`);
if (fail.length) console.log(JSON.stringify(fail, null, 2));
