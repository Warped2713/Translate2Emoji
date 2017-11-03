let prefix = ':';
let suffix = ':';
let source = '';

document.getElementById('source').addEventListener('change', function() {
  source = document.getElementById('source').value;
  let output = '';
  for (let c=0; c < source.length; c++) {
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
