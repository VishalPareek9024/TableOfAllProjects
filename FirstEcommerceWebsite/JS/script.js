let icons = document.querySelectorAll('.cart-icon-show')

let showTotalAmm = document.getElementById('show-total-amm');

let shopCount = showTotalAmm.parentElement.nextElementSibling.querySelector('.show-count-number');

let colorBtns = document.querySelectorAll('.color-btns input')

let filterRange = document.getElementById('filter-range')

let shoppingCartCutIcon = document.querySelector('.shopping-cart-heading i')

let viewCartSection = document.querySelector('.view-cart');

let headerCartBagIcon = document.querySelector('.fa-bag-shopping')

let cartProjectData = []

// console.log(icons);
let colorImages = {
     bags : {
        blue:'../Images/product-bag3-c-300x300.jpg',
        brown : '../Images/product-bag3-300x300.jpg',
        orange : "../Images/product-bag3-d-300x300.jpg",
        pink : '../Images/product-bag3-b-300x300.jpg'
    },

    AccesoriesBracelet: {
        black : '../Images/product-accessory2-300x300.jpg',
        brown : '../Images/product-accessory2-b-300x300.jpg',
        orange : '../Images/product-accessory2-c-300x300.jpg'
    },


    Bracelets : {
        blue : '../Images/product-accessory1-300x300.jpg',
        green : '../Images/product-accessory1-b-300x300.jpg',
        red : '../Images/product-accessory1-c-300x300.jpg'
    },

    tshirts : {
        blue:'../Images/tshirt4-300x300.jpg',
        orange : '../Images/tshirt7-300x300.jpg',
        pink : '../Images/tshirt3-300x300.jpg',
        green : '../Images/tshirt5-300x300.jpg'
    }
}

let totlaAmmount = 0;
let count = 0;

icons.forEach(i=>{

    

    i.addEventListener('click',()=>{
    
        if(count==0)
            {
                
                // cartProjectData = JSON.parse(localStorage.getItem("AllCartData"))
                cartProjectData.push({
                    numberOfCarts : count,
                    cartImgSrc : i.parentElement.querySelector('img').src,
                    cartPoductName : i.parentElement.querySelector('h3').innerHTML,
                    cartProductPrice : i.parentElement.querySelector('#pro-price').innerHTML,
                    howMuchItem : 1
                })

                console.log(cartProjectData)
                localStorage.setItem("AllCartData",JSON.stringify(cartProjectData))
                AddDivIntoCartBox(i.parentElement.querySelector('h3').innerHTML)
            }
        
        totlaAmmount += Number(i.parentElement.querySelector('#pro-price').innerHTML.slice(1,))
        // console.log(totlaAmmount);
        showTotalAmm.innerHTML = "$ " + totlaAmmount;
        count += 1;
        shopCount.innerHTML = `${count}`
     
        cartProjectData = JSON.parse(localStorage.getItem('AllCartData'))
        // console.log(JSON.parse(localStorage.getItem("AllCartData")));
        
        let a;
        for(a=0;a<cartProjectData.length;a++)
        {
            console.log(cartProjectData[a])
            if(i.parentElement.querySelector('h3').innerHTML == cartProjectData[a].cartPoductName)
                {
                    console.log("Loop True");
                    console.log(a);
                    
                    console.log(cartProjectData[a].howMuchItem);
                    
                    cartProjectData[a].howMuchItem = cartProjectData[a].howMuchItem+1
                    console.log(cartProjectData);
                    
                    localStorage.setItem("AllCartData",JSON.stringify(cartProjectData))

                    
                    console.log("Breaked");
                    
                    break;
                }   
        }
        
        console.log(a);
        

        if(a == cartProjectData.length){
            console.log("hhhhhh");
            
            cartProjectData = JSON.parse(localStorage.getItem("AllCartData"))
            cartProjectData.push({
                numberOfCarts : count,
                cartImgSrc : i.parentElement.querySelector('img').src,
                cartPoductName : i.parentElement.querySelector('h3').innerHTML,
                cartProductPrice : i.parentElement.querySelector('#pro-price').innerHTML,
                howMuchItem : 1
            })
            localStorage.setItem("AllCartData",JSON.stringify(cartProjectData))
            AddDivIntoCartBox(i.parentElement.querySelector('h3').innerHTML)
            
        }

        console.log(cartProjectData);
        

        if(i.parentElement.querySelector('h3') == 1){
        }
        // Deleting Item From Cart in the header section 

        document.querySelector('.all-added-carts').querySelectorAll('.delete-cart').forEach(e=>{
                e.addEventListener('click',()=>{
                e.parentElement.parentElement.style.display = "none"
             })
        })

        // Showing sub total in the cart section
        let subtotalShow = document.getElementById('subtotal-show');
        console.log(showTotalAmm.innerHTML);
        console.log(subtotalShow);
        subtotalShow.innerHTML =  showTotalAmm.innerHTML;
    })
})


// function for adding items in the cart after clicking on any cart button from localstorage 

function AddDivIntoCartBox(h3){
    
    
    let AllcartData = JSON.parse(localStorage.getItem('AllCartData'))

    console.log(AllcartData);
    for (let key in AllcartData){
        console.log(AllcartData[key])
        if(AllcartData[key]['cartPoductName'] == h3)
        {
            let cartItem = document.createElement('div')
            cartItem.classList.add('cart-item')

            cartItem.innerHTML = `
            <img src=${AllcartData[key]['cartImgSrc']} alt="">
            <div>
                <h3>${AllcartData[key]['cartPoductName']}</h3>
                <p>1 x ${AllcartData[key]['cartProductPrice']}}</p>
             </div>

             <p><i class="fa-solid fa-x delete-cart"></i></p>
`
            document.querySelector('.all-added-carts').appendChild(cartItem)

        }
    }

    // console.log(i.parentElement.querySelector('img').src);
    

    
}


colorBtns.forEach(element => {
    element.addEventListener('change',()=>{

        let objName = element.name;
        
        let colorName = element.classList[0];
        // console.log(colorName);
        colorName = colorName.split('-')
        colorName = colorName[0]
        // console.log(colorImages[objName][colorName])
        element.parentElement.parentElement.querySelector('img').src = colorImages[objName][colorName]


    })
});

// cart cut icon working using js hide the cart when click on the cross icon

shoppingCartCutIcon.addEventListener('click',()=>{
    viewCartSection.style.display = 'none';
})

// This JS work when user click on header's cart bag icon

headerCartBagIcon.addEventListener('click',()=>{
    viewCartSection.style.display = "block"
})



// Menu icon code which display in responsive header

document.querySelector('.menuicon i').addEventListener('click',()=>{
    if(document.querySelector('.menuicon i').classList.contains('fa-bars')){

    document.querySelector('.responsiveMenu').style.visibility= "visible"
    document.querySelector('.left-nav ul').style.visibility= "visible"
    document.querySelector('.menuicon i').classList.remove('fa-bars')  
    document.querySelector('.menuicon i').classList.add('fa-x')  
    }

    else{
         document.querySelector('.responsiveMenu').style.visibility= "hidden"
    document.querySelector('.left-nav ul').style.visibility= "hidden"
        document.querySelector('.menuicon i').classList.remove('fa-x')  
    document.querySelector('.menuicon i').classList.add('fa-bars')    
    }
})


// Getting the value of range in the filter box 

// filterRange.addEventListener('change',()=>{
//     filterRange.nextElementSibling.querySelector('p').innerHTML = `Price:$${filterRange.value} - $200`
    
// })


// Explanation of this code

// first accesing cart icon and header ammount showing tag
//then apply a foreach loop on all cart icons and add a addeventlistner on every cart icon
// then this eventlistenr's call back function is doing := getting the price from which icon is clicked and add it into the innerHTML of header section tag