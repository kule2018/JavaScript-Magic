
let back = document.getElementById('back');

let timer = null;
    leader = 0,
    target = 0,
    step = 10,
    speed = 50;

window.onscroll = () => {
    leader = window.pageYOffset;
    back.style.visibility = window.pageYOffset > 0 ? 'visible' : 'hidden';
}

back.onclick = () => {
    timer = setInterval(()=>{
        leader = leader + (target - leader) / step;
        window.scrollTo(0, leader);
        if(leader == target)
            clearInterval(timer);
    },speed);
}
