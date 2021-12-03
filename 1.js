document.addEventListener("DOMContentLoaded", function (event) {
    let button = document.getElementById("button")

    let a, b, sum;
    let res=document.getElementById("res")
    let price1,price2,price3,price4,price5
    price1=document.getElementById('price1');
    price2=document.getElementById('price2');
    price3=document.getElementById('price3');
    price4=document.getElementById('price4');
    price5=document.getElementById('price5');
    price1.textContent="TEST"
    button.onclick = function () {
        a=(document.getElementById("input1").value)
        b=(document.getElementById("input2").value)
        if(!isNaN(parseInt(a)) && !isNaN(parseInt(b)))
        {
           sum=parseInt(a)+parseInt(b);
           res.textContent="Ваш результат: "+sum
            let timer=setTimeout(()=>{
                res.hidden=true;
            },10000)

        }
        else
        {
            res.textContent="Ты еблан?"
        }


    }
});
