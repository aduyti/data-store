const addProduct = () => {
    const input = document.getElementById('input');
    const name = input.value;
    if (!name) return;
    displayProduct(name);
    setProduct(name);
    input.value = '';
}
const purchaseAll = () => {
    localStorage.removeItem('products');
    document.getElementById('list').innerHTML = '';
}
const displayProduct = name => {
    const list = document.createElement('li')
    list.textContent = name;
    document.getElementById('list').appendChild(list);
}

const showAllProducts = () => {
    const allProducts = getProducts();
    for (const name in allProducts) {
        // console.log(product);
        let count = 1;
        while (count <= allProducts[name]) {
            displayProduct(name);
            count++;
        }
    }
}
const getProducts = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : {};
}


const setProduct = (name) => {
    const products = getProducts();
    products[name] = products[name] ? products[name] + 1 : 1;
    localStorage.setItem('products', JSON.stringify(products));
}

showAllProducts();