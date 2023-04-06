document.addEventListener('DOMContentLoaded',()=>{

    const groceryItems = document.getElementById('my-display');
    
    
    const popUp = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content')
    const popupName = document.getElementById('popup-name')
    const popupDescription = document.getElementById('popup-description')
    const popupPrice = document.getElementById('popup-price')
    const popUpRatings = document.getElementById('popup-rating')
    
    function showItems () {
        fetch('http://localhost:3000/groceries')
        .then( response=> response.json())
        .then(function(data){
            const groceries = data;
            let myListArr = groceries.map(list=>{
                let groceryObj = {
                    name : list.name,
                    image : list.img,
                    price : list.price,
                    description : list.description,
                    rating : list.ratings
                }
                return groceryObj;
            })
            myListArr.map(list=>displayItem(list))
    
        })
    }

    showItems();
     
    function displayItem (groceryObj){
         let myList = document.createElement('li')
         //myList.className = 'card'
         myList.innerHTML = `
         <div class="card" style="width: 18rem;">
             <img src="${groceryObj.image}" class="card-img-top" alt="${groceryObj.name}">
             <div class="card-body">
              <p class="card-text"><a class="text" href="#">${groceryObj.name}</a></p>
               <p>${groceryObj.price}</p>
             </div>
        </div>
        `;
           groceryItems.appendChild(myList);


           const itemText = myList.querySelector('.card-text a');
           itemText.addEventListener('click', ()=>{
           popupName.textContent = groceryObj.name;
            popupDescription.textContent = groceryObj.description;
            popupPrice.textContent = groceryObj.price;
            popUpRatings.textContent =groceryObj.rating;
           
            popUp.style.display = 'block';

            const buyButton = document.createElement('button');
            buyButton.className = 'buy_btn'
            buyButton.textContent = 'Buy Now';
            popupContent.appendChild(buyButton);

            buyButton.addEventListener('click', ()=>{
                popupContent.style.display = 'none';
            });

            const cartButton = document.createElement('button');
            cartButton.className = 'cart-btn'
            cartButton.textContent = 'Add To Cart';
            popupContent.appendChild(cartButton);

            cartButton.addEventListener('click', ()=>{
                popupContent.style.display = 'none';
            });

           });
    } 

    const closeBtn = document.getElementById('close-btn');
    //closeBtn.className = "close_btn";
    closeBtn.addEventListener('click', ()=>{
        popupContent.style.display = 'none';
    });
    
});
