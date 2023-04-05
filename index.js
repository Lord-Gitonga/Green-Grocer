const groceryItems = document.getElementById('my-display');

function showItems () {
    fetch('http://localhost:3000/groceries')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const groceries = data;
        let myListArr = groceries.map(list=>{
            let groceryObj = {
                name : list.name,
                image : list.img,
                price : list.price,
                description : list.description
            }
            return groceryObj;
        })
        //console.log(myListArr)
        myListArr.map(list=>displayItem(list))

    //return myListArr(displayItem())
    })
}
 
function displayItem (groceryObj){
     let myList = document.createElement('li')
     myList.className = 'card'
     myList.innerHTML = `
     <div class="card col-m" style="width: 18rem;">
         <img src="${groceryObj.image}" class="card-img-top" alt="${groceryObj.name}">
         <div class="card-body">
           <p class="card-text">${groceryObj.name}</p>
           <p>${groceryObj.price}</p>
         </div>
       `
    groceryItems.appendChild(myList);

}

 showItems()
