/* Initialization */
let prefix, suffix, source, charset, space, delim, special;
let set = 'default';

/* Main Functions */
let translate = function() {
  source = document.getElementById('source').value.toLowerCase();
  let output = '';
  let lines = source.split('\n');
  for (let l=0; l<lines.length; l++) {
    let line = lines[l];
    for (let c=0; c < line.length; c++) {
      if (line[c].trim() == "") {
          output += ' ' + space + ' ';
      } else {
        if (charset.includes(line[c])) {
          if (special.hasOwnProperty(line[c])) {
              output += prefix + special[line[c]] + suffix;
          } else {
              output += prefix + line[c] + suffix;
          }
        }
      }
    }
    output += '\n';
  }
  document.getElementById('output').value = output;
};

let specialToString = function(obj) {
  let keys = Object.keys(obj);
  let str = '';
  for (let i=0; i<keys.length; i++) {
    str += keys[i] + ' ' + document.getElementById('delim').value + ' ' + obj[keys[i]] + '\n';
  }
  return str;
};

/* Presets */
let preset = {
  'default': {
    prefix: ':',
    suffix: ': ',
    charset: 'abcdefghijklmnopqrstuvwxyz!?0123456789#*$+-/.,;:<>',
    special: { 
    '!':'exclamation', 
    '?':'question',
    '#':'hash',
    '*':'asterisk',
    '$':'heavy_dollar_sign',
    '+':'heavy_plus_sign',
    '-':'heavy_minus_sign',
    '/':'heavy_division_sign',
    '.':'black_small_square',
    ',':'black_small_square',
    ';':'black_small_square',
    ':':'wavy_dash',
    '>':'arrow_right',
    '<':'arrow_left',
    '0':'zero',
    '1':'one',
    '2':'two',
    '3':'three',
    '4':'four',
    '5':'five',
    '6':'six',
    '7':'seven',
    '8':'eight',
    '9':'nine',
    'a':'regional_indicator_a',
    'b':'regional_indicator_b',
    'c':'regional_indicator_c',
    'd':'regional_indicator_d',
    'e':'regional_indicator_e',
    'f':'regional_indicator_f',
    'g':'regional_indicator_g',
    'h':'regional_indicator_h',
    'i':'regional_indicator_i',
    'j':'regional_indicator_j',
    'k':'regional_indicator_k',
    'l':'regional_indicator_l',
    'm':'regional_indicator_m',
    'n':'regional_indicator_n',
    'o':'regional_indicator_o',
    'p':'regional_indicator_p',
    'q':'regional_indicator_q',
    'r':'regional_indicator_r',
    's':'regional_indicator_s',
    't':'regional_indicator_t',
    'u':'regional_indicator_u',
    'v':'regional_indicator_v',
    'w':'regional_indicator_w',
    'x':'regional_indicator_x',
    'y':'regional_indicator_y',
    'z':'regional_indicator_z'
    },
    delim: '::',
    space: '\xa0'
  },
  
  'regional' : {
    prefix: ':regional_indicator_',
    suffix: ': ',
    charset: 'abcdefghijklmnopqrstuvwxyz',
    special: { },
    delim: '::',
    space: '\xa0'
  },
  
  'unown': {
    prefix: ':',
    suffix: '_unknown:',
    charset: 'abcdefghijklmnopqrstuvwxyz!?',
    special: { '!':'ex', '?':'qm' },
    delim: '::',
    space: '\xa0'
  }
};

let updateSet = function() {
  document.getElementById('pre').value = prefix = preset[set].prefix;
  document.getElementById('post').value = suffix = preset[set].suffix;
  document.getElementById('charset').value = charset = preset[set].charset;
  document.getElementById('delim').value = delim = preset[set].delim;
  document.getElementById('space').value = space = preset[set].space;
  special = preset[set].special;
  document.getElementById('special').value = specialToString(special);
};

/* Run an example */
updateSet(); console.log(delim);
source = "Let's write some emoji text!";
document.getElementById('source').value = source;
translate();

/* On Change events */

document.getElementById('source').addEventListener('change', translate);

document.getElementById('pre').addEventListener('change', function() {
  prefix = document.getElementById('pre').value;
  translate();
});

document.getElementById('post').addEventListener('change', function() {
  suffix = document.getElementById('post').value;
  translate();
});

document.getElementById('charset').addEventListener('change', function() {
  charset = document.getElementById('charset').value;
  translate();
});

document.getElementById('special').addEventListener('change', function() {
  text = document.getElementById('special').value;
  lines = text.split('\n');
  special = {};
  for (let i=0; i<lines.length; i++) {
     let v = lines[i].split(delim);
    special[v[0].trim()] = v[1].trim();
  }
  translate();
});

document.getElementById('delim').addEventListener('change', function() {
  delim = document.getElementById('delim').value;
  document.getElementById('special').value = specialToString(special);
  translate();
});

document.getElementById('space').addEventListener('change', function() {
  space = document.getElementById('space').value;
  translate();
});

document.getElementById('emojiset').addEventListener('change', function() {
  set = document.getElementById('emojiset').value;
  updateSet();
  translate();
});