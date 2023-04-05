document.addEventListener('DOMContentLoaded', function(){

    const groceryItems = document.getElementById('my-display');
    //const displaySome = document.getElementsByClassName('card');
    
    const popUp = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content')
   // const popupImage = document.getElementById('popup-image');
    //popupImage.innerHTML = '<img src="" alt="Popup Image">';
    //popupImage.style.maxWidth = '100%';
    //popupImage.style.maxHeight = '100%';
    //popupImage.style.overflow = 'auto';
    const popupName = document.getElementById('popup-name')
    const popupDescription = document.getElementById('popup-description')
    const popupPrice = document.getElementById('popup-price')
    //const closeBtn = document.getElementById('close-btn')
    
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

    showItems();
     
    function displayItem (groceryObj){
         let myList = document.createElement('li')
         myList.className = 'card'
         myList.innerHTML = `
         <div class="card" style="width: 18rem;">
             <img src="${groceryObj.image}" class="card-img-top" alt="${groceryObj.name}">
             <div class="card-body">
              <p class="card-text"><a href="#">${groceryObj.name}</a></p>
               <p>${groceryObj.price}</p>
             </div>
        </div>
        `;
           groceryItems.appendChild(myList);
           const itemText = myList.querySelector('.card-text a');
           itemText.addEventListener('click', function(){
            //popupImage.querySelector('img').setAttribute('src', groceryObj.image);
            popupName.textContent = groceryObj.name;
            popupDescription.textContent = groceryObj.description;
            popupPrice.textContent = groceryObj.price;
            popUp.style.display = 'block';
           });
    } 

    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function(){
        popupContent.style.display = 'none';
    });
    
});
