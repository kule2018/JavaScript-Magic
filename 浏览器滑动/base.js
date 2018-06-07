(function () {
    let lis = document.getElementsByTagName('li');
    let index = 0;
    let timer = null,leader = 0,target = 0,step = 10,speed = 50;

    window.onmousewheel = (event) => {
        clearInterval(timer);
        if(event.deltaY > 0 && index < 3){
            index++;
        }else if(event.deltaY < 0 && index > 0){
            index--;
        }
        target = lis[index].offsetTop;
        timer = setInterval(()=>{
            leader = leader + (target - leader) / step;
            window.scrollTo(0,leader);
            if(Math.abs(target-leader) < 1)
                clearInterval(timer);
        },speed);
    }

    // window.onkeydown = (event) => {
    //     if(event.key == 'ArrowDown' && index < 3){
    //         index++;
    //     }else if(event.key == 'ArrowUp' && index > 0){
    //         index--;
    //     }
    //     target = index * height;
    //     timer = setInterval(()=>{
    //         leader = leader + (target - leader) / step;
    //         window.scrollTo(0,leader);
    //         if(leader == target)
    //             clearInterval(timer);
    //     },speed);
        // if (window.pageYOffset > current) {
        //     index++;
        //     if (index > 3)
        //         index = 3;
        // } else {
        //     index--;
        //     if (index < 0)
        //         index = 0;
        // }
        // current = window.pageYOffset;
        // console.log(current);
        // console.log(index);
        
    // }
})();