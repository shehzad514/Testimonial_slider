var slides = document.querySelectorAll('.items');
var btns = document.querySelectorAll('.btn');

let currentslide=1;


// for manual 

btns.forEach((btn, i) =>
{
    btn.addEventListener('click',()=>
    {
        manualnav(i);
        currentslide=i;
    })
});


var manualnav= function(manual)
{
    //by this if there is any active class then ist remove that 
    slides.forEach((slide)=>
    {
        slide.classList.remove('active');
    });

    btns.forEach((btn)=>
    {
        btn.classList.remove('active');
    });


    //after it when ever you click on btn in corresponding div class will be add 
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

