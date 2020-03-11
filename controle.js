function addtocart(title) {
    var shopnbrtag = document.getElementById('shopcartnbr');
    //var shopnbrchar =;
    //var shopnbr = ;
    shopnbrtag.textContent = Number(shopnbrtag.textContent) + 1;


    if (shopnbrtag.classList.contains('badge-primary')){
        shopnbrtag.classList.remove('badge-primary');
        shopnbrtag.classList.add('badge-warning');
    }
    var modalbody = document.getElementById('modal-body');
    modalbody.textContent = title +  " à éte ajouter a votre panier";
}


 
function filterBooks(category) {
    var books = document.getElementsByClassName('allBooks');

    if (category == "all") {
        for (var index = 0; index < books.length; index++) {
            if (books[index].classList.contains("desafficher")) {
                books[index].classList.remove("desafficher");
            }
        }

    } else {
        for (var index = 0; index < books.length; index++) {
            if (!books[index].classList.contains(category)) {
                books[index].classList.add('desafficher')
            }else{
                if (books[index].classList.contains("desafficher")) {
                    books[index].classList.remove("desafficher");
                }
            }
        }
    }

}
