import { createReadStream } from 'fs';

import X12parser from './lib/X12parser.js';

// Create a new parser
const myParser = new X12parser('ascii','~','>','*','U');
myParser.on('error', err => {
    console.error(err);
})

// Create a read stream from a file
const ediFile = createReadStream('./edi.txt')
ediFile.on('error', err => {
    console.error(err);
})

// Handle events from the parser
ediFile.pipe(myParser).on('data', data => {
    console.log(data);
})