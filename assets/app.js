// store products in object
 const productList = {
    products:  [
        {
            title: 'Picture 1',
            imageUrl: 'https://scontent.fmex11-1.fna.fbcdn.net/v/t1.6435-9/180566207_10225726551050510_2431552693953559645_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGt4NIExHnNJTmd51Brkc01CMMI5-k7VxUIwwjn6TtXFbKpQ3F6ABN-osXFMGfjzrI&_nc_ohc=xuq27OVB7u0AX92iGqS&tn=89qhMx2t13NgT0ce&_nc_ht=scontent.fmex11-1.fna&oh=00_AT9B_sZCucqNLfL6XiiCeR0-8bl9luO4I59RiKJ6VAv7hg&oe=624CB98C',
            price: 500.00,
            description: 'flores'
        }, 
        {
            title: 'Picture 2',
            imageUrl: 'https://scontent.fmex11-1.fna.fbcdn.net/v/t39.30808-6/274242102_10227479450671905_3664816574059744825_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH8wX0cUGiIeD17-Mc_Tkxpdr-YNa3Mldx2v5g1rcyV3BP9AwsSG9QwXlZjZg8BvZw&_nc_ohc=GRHDLrqutyYAX8yqqZa&_nc_ht=scontent.fmex11-1.fna&oh=00_AT8rYNKPzHv0Ca1zcyEy59zIMDfIm6chRbfSgEi4xF7E6g&oe=622AE4CA',
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