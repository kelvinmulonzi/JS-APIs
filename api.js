//fetch api from fake store api
// display the cards
async function productList(){
    try {
        const response = await fetch("https://fakestoreapi.com/products?");
        return await response.json();
    } catch (error){ 
        console.log(error.message);
    }
}

let displayproductlist = async function (){
    let products = document.getElementById("card-container")
    let getdata = await productList()
    products.innerHTML = getdata.map(items => {
        return `    
        <div class="card" style="width: 18rem;">
                 <img src="${items.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${items.title}</h5>
                  <p class="card-text">${items.description.substring(0, 30) }... </p>
                  <p class="card-text">${items.price}</p>
             </div>
            </div>`;
    }).join('');
}
displayproductlist()


