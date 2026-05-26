const fs = require('fs');

const exportCSV = (data, filename) => {
  const headers = Object.keys(data[0]).join(',');

  const rows = data.map((row) =>
    Object.values(row).join(',')
  );

  const csvContent = [headers, ...rows].join('\n');

  fs.writeFileSync(filename, csvContent);
};

module.exports = exportCSV;