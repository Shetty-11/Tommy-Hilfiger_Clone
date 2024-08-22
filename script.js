const navbar = document.getElementById('navbar');
const logo = document.querySelector('.logo');
let lastScrollTop = 0;
const promoHeight = document.querySelector('.promo-container').offsetHeight;

window.addEventListener('scroll', function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop > promoHeight) {
        navbar.classList.add('scrolled');
        logo.src="res/Logo.svg";
    } else {
        navbar.classList.remove('scrolled');
        logo.src="res/transparent-logo2.svg";
    }

    if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
        
        navbar.classList.add('hidden');
    } else {
        
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

const promoText=document.getElementById('promo-text');
const slides=[
{
    text:'30 TO 50% OFF CLOTHING AND ACCESORIES',
    links:['Men','Women','Kids','Details']
},
{
    text:'40% OFF POLOS,TEES, AND PANTS',
    links:['Men','Women','Kids','Details']

},
{
    text:'FREE SHIPPING ON PRODUCTS OVER 100$',
    links:['Details']
}

]
let promoIndex=0;
function updatePromoContent(){
    const currentSlide=slides[promoIndex];
    promoText.innerHTML='';
    const promoSlide=document.createElement('span');
    promoSlide.classList.add('promo-slide');
    promoSlide.textContent=currentSlide.text;
    promoText.appendChild(promoSlide);
    currentSlide.links.forEach(linktext=>{
        const link=document.createElement('a');
        link.classList.add('hlink');
        link.innerHTML=`<u>${linktext}</u>`;
        promoText.appendChild(link);
    });
    promoIndex=(promoIndex+1)%slides.length;
}

setInterval(updatePromoContent,5000);
updatePromoContent();

