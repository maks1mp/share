(function(){
    const loc = window.location.href;
    const shareContent = fileName => event => {
        if (event) {
            event.preventDefault();
        }
        
        navigator.share({
            title: '#DrinksOnD smarturl.it/DrinksonMe',
            text: '#DrinksOnD smarturl.it/DrinksonMe',
            url: `${loc}/assets/${fileName}`,
        });
    };

    document.getElementById('share-btn')
        .addEventListener('click', shareContent('DMunoz_share_love.gif'));
})()