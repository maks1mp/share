(function(){
    const btn = document.getElementById('share-btn');

    btn.addEventListener('click', () => {
        const loc = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: '#DrinksOnD smarturl.it/DrinksonMe',
                text: '#DrinksOnD smarturl.it/DrinksonMe',
                url: `${loc}/assets/DMunoz_share_love.gif`,
            });
        }
    });
})()