// create out directory for static Chrome Extension

const fs = require('fs');
const glob = require('glob');
const fsextra = require('fs-extra');


function cpExtension(){
  var sourcePath = 'extension';
  var destinationPath = 'out';
  fsextra.copySync(sourcePath, destinationPath);
}

cpExtension();


console.log('Files and directories copied successfully.');


const files = glob.sync('out/**/*.html');
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  let modifiedContent = content.replace(/\/_next/g, './next');
  // BEGIN inline scripts process
  const inlineScripts = [];
  modifiedContent = modifiedContent.replace(/<script>(.*?)<\/script>/gs, (match, scriptContent) => {
    scriptContent.endsWith(';') || (scriptContent += ';');
    inlineScripts.push(scriptContent);
    return '';
  });
  fs.writeFileSync('out/inline-scripts-' + file.replace(/^.*[\\\/]/, '') + '.js', inlineScripts.join('\n'), 'utf-8');
  modifiedContent = modifiedContent.replace('</body>', `<script src="./inline-scripts-${file.replace(/^.*[\\\/]/, '')}.js"></script>\n</body>`);
  // END inline scripts process 

  fs.writeFileSync(file, modifiedContent, 'utf-8');
});

function renameIndexTxt(){
  const files = glob.sync('out/index.txt');
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    let modifiedContent = content.replace(/\/_next/g, './next');
    fs.writeFileSync(file, modifiedContent, 'utf-8');
  });
}

renameIndexTxt();



const sourcePath = 'out/_next';
const destinationPath = 'out/next';

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});


