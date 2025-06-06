const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const outputFileName = 'NarvukTWUI-Latest.zip'; // The name for the zip file
const distFolderPath = path.join(__dirname, 'dist'); // Path to dist folder
const output = fs.createWriteStream(path.join(__dirname, outputFileName));
const archive = archiver('zip', {
  zlib: { level: 9 } // Compression level (0-9)
});

output.on('close', function() {
  console.log(`Zip file has been created: ${archive.pointer()} total bytes`);
});

archive.on('error', function(err) {
  throw err;
});

// Pipe the archive to the output file
archive.pipe(output);

// Function to add files recursively
function addFilesToArchive(folderPath, archive, subfolderPath) {
  const files = fs.readdirSync(folderPath);
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const fileInArchive = subfolderPath ? path.join(subfolderPath, file) : file; // Maintain folder structure in the zip

    if (fs.lstatSync(filePath).isDirectory()) {
      // If it's a directory, recurse into it
      addFilesToArchive(filePath, archive, fileInArchive);
    } else {
      // If it's a file, add it to the archive
      archive.file(filePath, { name: fileInArchive });
    }
  });
}

// Add all files from dist folder (including subdirectories) to the archive
addFilesToArchive(distFolderPath, archive);

// Finalize the archive
archive.finalize();