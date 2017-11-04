let prefix = ':';
let suffix = '_unown:';
let source = '';
let charset = 'abcdefghijklmnopqrstuvwxyz1234567890!?';
let special = { '?':'qm', '!':'ex' };
let delim = '::';

//let newline = '&#13;&#10;';
let space = '\xa0';

/* Initialization */
document.getElementById('pre').value = prefix;
document.getElementById('post').value = suffix;
document.getElementById('source').value = source;
document.getElementById('charset').value = charset;
//document.getElementById('special').value = '? :: qm' + newline + '! :: ex';
document.getElementById('special').value = '? :: qm\n! :: ex';
document.getElementById('delim').value = delim;
document.getElementById('space').value = space;

/* Main Functions */

let translate = function() {
  source = document.getElementById('source').value.toLowerCase();
  let output = '';
  for (let c=0; c < source.length; c++) {
    if (source[c].trim() == "") {
        output += space + ' ';
    } else {
      if (charset.includes(source[c])) {
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
};

/* Run an example */
source = "What is an unown?";
document.getElementById('source').value = source;
translate();


/* On Change events */

document.getElementById('source').addEventListener('change', translate);

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

document.getElementById('space').addEventListener('change', function() {
  space = document.getElementById('space').value;
});
