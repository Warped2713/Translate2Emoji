let prefix = ':';
let suffix = ':';
let source = '';
let charset = 'abcdefghijklmnopqstuvwxyz1234567890!?';

document.getElementById('source').addEventListener('change', function() {
  source = document.getElementById('source').value;
  let output = '';
  for (let c=0; c < source.length; c++) {
    // TODO: Check if c is in charset
    if (source[c].trim() == "") {
        output += " ";
    } else {
        output += prefix + source[c].toLowerCase() + suffix + " ";
    }
    console.log(source[c]);
  }
  console.log(output);
  document.getElementById('output').value = output;
});

document.getElementById('pre').addEventListener('change', function() {
  prefix = document.getElementById('pre').value;
});

document.getElementById('post').addEventListener('change', function() {
  suffix = document.getElementById('post').value;
});

document.getElementById('charset').addEventListener('change', function() {
  charset = document.getElementById('charset').value;
});
