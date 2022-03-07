// store products in object
 const productList = {
    products:  [
        {
            title: 'Picture 1',
            imageUrl: 'https://unsplash.com/photos/Z8TQv3yKQd4',
            price: 500.00,
            description: 'flores'
        }, 
        {
            title: 'Picture 2',
            imageUrl: 'https://unsplash.com/photos/Nyvq2juw4_o',
            price: 550.00,
            description: 'city picture'
        },
    ],
    // Added the method to render the list of products
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        // logic to render a single item
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div> 
            <img src="${prod.imageUrl}" alt ="${prod.title}">
            <div class="product-item_content"> 
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
            </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
 }; 


 productList.render();