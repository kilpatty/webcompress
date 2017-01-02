#!/usr/bin/env node --harmony

var program = require('commander');

program
    .version('0.1.0')
    .arguments('<file>')
    .option('-b, --brotli <brotliEnabled>', 'False is brotli compression should not be enabled')
    .option('-z, --zopfli <zopfliEnabled>', 'False is Zopfli compression should not be enabled')
    .action(function(file) {
        // Check if this file is a directory?
        // If it is a directory, then automatically compress the entire directory?
        // Perhaps prompt the user?
        // So for example, if -r is present and is a directory = no prompt
        // If no -r and directory then prompt the user.

        //Default Brotli compression to true.
        if (!program.brotliEnabled) {
            program.brotliEnabled = true;
        }
        //Default zopfli compress to true.
        if (!program.zopfliEnabled) {
            program.zopfliEnabled = true;
        }
     console.log('Brotli Enabled: %s Zopfli Enabled: %s file: %s',
         program.brotliEnabled, program.zopfliEnabled, file);
  })
  .parse(process.argv);
