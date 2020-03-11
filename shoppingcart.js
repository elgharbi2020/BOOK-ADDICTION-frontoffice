/*
function addQte(idLivre) {
    var qtechar = document.getElementById(idLivre);
    qtechar.textContent = Number(qteChr.textContent)
}

function removeQte(idLivre) {
    var qteChr = document.getElementById(idLivre);
    qtechar.textContent = Number(qteChr.textContent)
}
*/

function updateQte(idLivre,operation,idPrix,prix) {
    var qteChr = document.getElementById(idLivre);
    var prixChr = document.getElementById(idPrix);

    if (operation=="add") {
        qteChr.textContent = Number(qteChr.textContent) + 1 ;
        prixChr.textContent = Number(prixChr.textContent) + prix ;
    } else {
        if (Number(qteChr.textContent)>1) {
            qteChr.textContent = Number(qteChr.textContent) - 1 ;
            prixChr.textContent = Number(prixChr.textContent) - prix ;

        }
    }
}


function removeFromCart(idRowLivre){
    var Livre = document.getElementById(idRowLivre);
    Livre.remove();
    var products = document.getElementsByClassName('product');
    var myalertDiv = document.getElementById('aucunproduit');

    if(products.length == 0) {
        myalertDiv.classList.remove('d-none');
    }
}