//GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'green';


console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

//GETELEMENTSBYID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>ItemLister</h3>'
header.style.borderBottom = 'solid 3px #000';



