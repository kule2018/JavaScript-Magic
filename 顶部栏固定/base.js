(function(){
    let top = document.getElementById('top');
    let bar = document.getElementById('bar');

    window.onscroll = function(){
        if(window.pageYOffset > top.offsetHeight){
            bar.style.position = 'fixed';
            bar.style.top = 0;
        }else{
            bar.style.position = 'static';
        }
    }

})();