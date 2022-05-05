console.log(document.domain);
console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
console.log(document.forms);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.textContent = " Namastey Bhaiya, Welcome to Kumar Parth's Website ";
header.style.borderBottom ='solid 3px #000';

// getElementsByClassName 
var items = document.getElementsByClassName('list-group-item');

items[1].style.fontWeight ='bold';
items[2].style.fontWeight ='bold';
items[3].style.fontWeight ='bold';
items[0].style.fontWeight ='bold';
items[2].style.backgroundColor= ' green'