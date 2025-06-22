#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all English content files
const englishCopyPath = path.join('src', 'copy');
const hebrewCopyPath = path.join('src', 'copy', 'he');

const englishFiles = fs.readdirSync(englishCopyPath).filter(file => file.endsWith('.md'));
const hebrewFiles = fs.existsSync(hebrewCopyPath) 
  ? fs.readdirSync(hebrewCopyPath).filter(file => file.endsWith('.md'))
  : [];

console.log('📋 Hebrew Content Translation Status\n');

console.log('✅ Hebrew files already created:');
hebrewFiles.forEach(file => {
  console.log(`  - ${file}`);
});

console.log('\n❌ English files still needing Hebrew translation:');
englishFiles.forEach(file => {
  if (!hebrewFiles.includes(file)) {
    console.log(`  - ${file}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`  Total English files: ${englishFiles.length}`);
console.log(`  Hebrew files created: ${hebrewFiles.length}`);
console.log(`  Files remaining: ${englishFiles.length - hebrewFiles.length}`);

console.log('\n🎯 Priority files to translate next:');
const priorityFiles = [
  'what-is-the-trinity.md',
  'what-is-sin.md', 
  'what-is-humanity.md',
  'what-is-gods-providence.md',
  'how-does-god-reveal-himself.md',
  'from-the-trenches-an-evangelism-guide.md',
  'this-history-of-everything.md'
];

priorityFiles.forEach(file => {
  if (englishFiles.includes(file) && !hebrewFiles.includes(file)) {
    console.log(`  - ${file}`);
  }
});

console.log('\n💡 To create a Hebrew version of a file:');
console.log('   1. Copy the English .md file to src/copy/he/');
console.log('   2. Translate all content to Hebrew');
console.log('   3. Maintain the same markdown structure');
console.log('   4. Update any internal links to point to Hebrew pages'); 