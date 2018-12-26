var unified = require('unified')
var stream = require('unified-stream')
var vfile = require('to-vfile')

// remark features
var remark = require('remark')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')
var breaks = require('remark-breaks')
var toc = require('remark-toc')

var fs = require('fs');


// Process file and create correct markdown
var input = 'utils-new.md';
var newContent1 = "";
var newContent2 = "";

// break https://github.com/remarkjs/remark-breaks
unified()
  .use(markdown)
  .use(breaks)
  .use(remark2rehype)
  .use(html)
  .process(vfile.readSync('utils-startup.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })

// console.log('step ok', newContent1)

//process.stdin.pipe(stream(processor)).pipe(process.stdout)

// Write the new file
/*
fs.writeFile(input, newContent1, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('write1 ok');
});
*/

// Generate TOC
// https://github.com/remarkjs/remark-toc

/*
remark()
.use(toc)
.process(vfile.readSync(file), function(err, file) {
  if (err) throw err
  // newContent2 = file
  console.log('toc ok', String(file))
})
*/

/*
    // Write the new file
    fs.writeFile(file, newContent2, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log('write2 ok');
  }); */



//process.exit(0);