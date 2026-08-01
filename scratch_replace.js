const fs = require('fs');
const path = process.argv[2];
const pairsPath = process.argv[3];
let content = fs.readFileSync(path, 'utf8');
const pairs = JSON.parse(fs.readFileSync(pairsPath, 'utf8'));
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
fs.writeFileSync(path, content, 'utf8');
console.log(`OK: ${ok}, FAIL: ${fail.length}`);
if (fail.length) {
  console.log(JSON.stringify(fail, null, 2));
}
