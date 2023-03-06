var filter = document.getElementById('filter');
var itemList = document.getElementById('items');
//Filter event
filter.addEventListener('keyup', filterItems);

//FilterItems
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    


var items = itemList.getElementsByTagName('li');
//convert to an arrray
Array.from(items).forEach(function(item)
{
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';

    }else{
        item.style.display = 'none';
    }
});
}
