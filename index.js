var btnP = document.querySelectorAll('.btnP')
var btnM = document.querySelectorAll('.btnM')
var trashs = document.querySelectorAll('.fa-trash')
var hearts = document.querySelectorAll('.fa-heart')
// var trashs = document.getElementsByClassName('fa-trash')
// console.log(trashs)
for(let i = 0; i<btnP.length; i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].previousElementSibling.innerHTML++
        SommeTotal()
    })
}

for(let i = 0;i<btnM.length;i++){
    btnM[i].addEventListener('click',function(){
        if(btnM[i].nextElementSibling.innerHTML>0){
            btnM[i].nextElementSibling.innerHTML--
            SommeTotal()
        }
        
    })
}

for(let i = 0; i < trashs.length; i++){
    trashs[i].addEventListener('click',function(){
        trashs[i].parentElement.remove()
        SommeTotal()
        // console.log(trashs)
    })
}

for(let i = 0;i<hearts.length;i++){
    hearts[i].addEventListener('click',function(){
        hearts[i].classList.toggle('hazem')
    })
}


function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var priT = document.querySelector('#total')
    var sum = 0

    for(let i =0; i<price.length;i++){
        sum = sum + price[i].innerHTML * qte[i].innerHTML
    }

    priT.innerHTML = sum
}