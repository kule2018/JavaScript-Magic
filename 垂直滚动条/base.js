(function () {
    let app = document.getElementById('app');
    let scroll = document.getElementById('scroll');
    let content = document.getElementById('content');
    let bar = document.getElementById('bar');
    let speed = 10, current = 0;

    function borderJudge() {
        if (current < 0)
            current = 0;
        else if (current > scroll.offsetHeight - bar.offsetHeight)
            current = scroll.offsetHeight - bar.offsetHeight;
    }
    function move() {
        bar.style.top = current + 'px';
        content.style.top = -current + 'px';
    }

    app.onmousewheel = (event) => {
        if (event.deltaY > 0)
            current += speed;
        else
            current -= speed;
        borderJudge();
        move();
    }

    bar.onmousedown = () => {
        document.onmousemove = (event) => {
            current = event.clientY - app.offsetTop - bar.offsetHeight / 2;
            borderJudge();
            move();
            document.getSelection().removeAllRanges();
        }
    }
    document.onmouseup = () => {
        document.onmousemove = null;
    }
})();