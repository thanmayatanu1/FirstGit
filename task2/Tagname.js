var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'green';

//getElementsByTagName

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello2';
li[0].style.fontWeight = 'bold';
li[1].style.fontWeight = 'bold';
li[2].style.fontWeight = 'bold';
li[3].style.fontWeight = 'bold';
li[3].style.backgroundColor = 'green';

for(var i=0; i<li.length; i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}

