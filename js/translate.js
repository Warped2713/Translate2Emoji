let prefix = ':';
let suffix = '_unknown:';
let source = '';
let charset = 'abcdefghijklmnopqrstuvwxyz1234567890!?';
let special = { '?':'qm', '!':'ex' };
let delim = '::';

document.getElementById('source').addEventListener('change', function() {
  source = document.getElementById('source').value.toLowerCase();
  let output = '';
  for (let c=0; c < source.length; c++) {
      if (charset.includes(source[c])) {
          if (source[c].trim() == "") {
              output += " ";
          } else {
              if (special.hasOwnProperty(source[c])) {
                  output += prefix + special[source[c]] + suffix + " ";
              } else {
                  output += prefix + source[c] + suffix + " ";
              }
          }
      }
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

document.getElementById('special').addEventListener('change', function() {
  text = document.getElementById('special').value;
  lines = text.split('\n');
  special = {};
  for (let i=0; i<lines.length; i++) {
     let v = lines[i].split(delim);
    special[v[0].trim()] = v[1].trim();
  }
});

document.getElementById('delim').addEventListener('change', function() {
  delim = " " + document.getElementById('delim').value + " ";
});
