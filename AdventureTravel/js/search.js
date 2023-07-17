function search() {
    let searchBar = document.querySelector('.search-input').value.toLocaleUpperCase();
    let productList = document.querySelector(".product-list");
    let product = document.querySelectorAll('.product');
    let productName = document.querySelectorAll(".title-name");
    let ntf = document.querySelector(".not-found");

    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toLocaleUpperCase().indexOf(searchBar) >= 0) {
            product[i].style.display = '';
            ntf.style.display = 'none';
            




        } else {
            product[i].style.display = 'none';
            if (i == 0) {
                ntf.style.display = 'block'
            }
        }


    }
}