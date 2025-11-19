const fs = require('fs');
const path = require('path');

function readJSON(filename, defaultData) {
  const p = path.join(__dirname, filename);
  try {
    if (!fs.existsSync(p)) fs.writeFileSync(p, JSON.stringify(defaultData, null, 2));
    const raw = fs.readFileSync(p);
    return JSON.parse(raw);
  } catch (e) {
    console.error('DB read error', e);
    return defaultData;
  }
}

function writeJSON(filename, data) {
  const p = path.join(__dirname, filename);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

module.exports = { readJSON, writeJSON };
