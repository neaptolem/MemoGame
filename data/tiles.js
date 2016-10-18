export default () => {
    let tiles = [];

    for (let i = 0; i < 16; i += 2) {
        tiles.push({
            id: i,
            rel: i + 1,
            flipped: false,
            url: `/static/img/${(i/2)+1}.jpg`,
            discovered: false
        });
        tiles.push({
            id: i + 1,
            rel: i,
            flipped: false,
            url: `/static/img/${(i/2)+1}a.jpg`,
            discovered: false
        });
    }

    return shuffle(tiles);
}

function shuffle(array) {
    let currentIndex = array.length,
        temp, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
