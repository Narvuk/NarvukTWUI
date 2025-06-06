const rimraf = require('rimraf');
const path = require('path');

// List of files to delete
const filesToDelete = [
  'input.css',
  'tailwind.config.js',
  'package.json',
  'package-lock.json',
  'dist-cleanup.js',
  'dist-pack.js',
  'CNAME',
  'NarvukTWUI-Latest.zip'
];

// Loop through the list and delete each file from the 'dist' directory
filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, './dist', file);
  rimraf.sync(filePath);
});
console.log(`Cleanup complete! Removed ${filesToDelete.length} Development files from the 'dist' directory.`);