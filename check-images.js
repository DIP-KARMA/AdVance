// A simple script to output image paths and verify they exist
const fs = require('fs');
const path = require('path');

// Path to the images directory
const imagesDir = path.join(__dirname, 'public', 'images');

console.log('Checking images in:', imagesDir);

try {
  // Check if directory exists
  if (fs.existsSync(imagesDir)) {
    // Read all files in the directory
    const files = fs.readdirSync(imagesDir);
    
    console.log(`Found ${files.length} images:`);
    files.forEach(file => {
      const stats = fs.statSync(path.join(imagesDir, file));
      console.log(`- ${file} (${Math.round(stats.size / 1024)} KB)`);
    });
    
    // Check slideshow images from index.js
    console.log('\nChecking slideshow images referenced in index.js:');
    const slideshowImages = [
      'GnDbp5sWMAAtctx.jpg',
      'GnDbp5sWcAAblkZ.jpg',
      'GnDbp6MXIAE9VA7.jpg',
      'Gm_lG8GWsAEadAN.jpg'
    ];
    
    slideshowImages.forEach(image => {
      const imagePath = path.join(imagesDir, image);
      if (fs.existsSync(imagePath)) {
        const stats = fs.statSync(imagePath);
        console.log(`✓ ${image} exists (${Math.round(stats.size / 1024)} KB)`);
      } else {
        console.log(`✗ ${image} does not exist!`);
      }
    });
  } else {
    console.log('Images directory does not exist!');
  }
} catch (err) {
  console.error('Error checking images:', err);
}
