const shoppingList = [`acqua`,`pane`,`pasta`,`riso`,`mele`];

let i = 0;
let list = document.getElementById('list');
let item;
while(i < shoppingList.length){
    item = shoppingList[i];
    list.innerHTML+= `<li>${item}</li>`
    console.log(item)
    i++;
}