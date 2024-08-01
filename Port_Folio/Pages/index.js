let cards = document.querySelectorAll('.Front-Page .card');
cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
})//Card Inside Lighting Effect
//Get the Card, Use the ForEach and add the onmousemove event in each card