[].forEach.call(document.getElementsByClassName('mini-tile__content'), function (prod) {
    var quantity = prod.getElementsByClassName('trolley-counter--quantity-value')[0].innerHTML
    var link = prod.getElementsByClassName('mini-tile__product-info')[0].href
    var price = prod.getElementsByClassName('mini-tile__price')[0].getElementsByClassName('value')[0].innerHTML
    if (quantity > 1) {
        console.log(quantity + 'x ' + link + ' ' + price)
    } else {
        console.log(link + ' ' + price)
    }
});
