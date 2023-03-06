
 const her = [
    { names: 'A', content: 'UXYSBwZXNzb2EgdGVpbW9zYSBlIGF1dG9yaXTDoXJpYSBzZSBuw6NvIGFnaXIgY29tIGN1aWRhZG8u' },
    { names: 'B', content: 'UgdmVyZ29uaGEgZSBvIGRlc2N1aWRvLg=='},
 ];
 
 var n = 0;
while (n < her.length) {
  const a = her[n].names;
  her[n].names =  Buffer.from(a, 'base64').toString('utf8');
  n++;
}

console.log(her)
