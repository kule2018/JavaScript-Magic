
let advert = document.getElementById('advert');

let timer = null,
    advertTop = advert.offsetTop,
    leader = 0,
    target = advertTop,
    step = 10,
    speed = 30;

    setInterval(()=>{
        leader = leader + (target - leader) / step;
        advert.style.top = leader + 'px';
    },speed);

window.onscroll = (event) => {
    target = advertTop + window.pageYOffset;
}

