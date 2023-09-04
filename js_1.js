let p1 = document.querySelector('#a1');
let p2 = document.querySelector('#a2');
let b1 = document.querySelector('#pop1');
let b2 = document.querySelector('#pop2');
let b3 = document.querySelector('#reset');
let s1 = document.querySelector('#score');
let sc1 = 0;
let sc2 = 0;
let winsc = 3;
let gameover = false;
s1.addEventListener('change', function () {
    winsc = this.value;
    reset();
})
b1.addEventListener('click', function () {
    if (!gameover) {
        sc1++;
        if (sc1 == winsc) {
            gameover = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
            b1.disabled = true;
            b2.disabled = true;
            setTimeout(() => {
                alert("Player 1 won the game");
            }, 300);
        }
        p1.innerText = sc1;
    }
});

b2.addEventListener('click', function () {
    if (!gameover) {
        sc2++;
        if (sc2 == winsc) {
            p2.classList.add('winner');
            p1.classList.add('loser');
            gameover = true;
            b1.disabled = true;
            b2.disabled = true;
            setTimeout(() => {
                alert("Player 2 won the game");
            }, 300);

        }
        p2.innerText = sc2;
    }
});

b3.addEventListener('click', reset);
function reset() {
    sc1 = 0;
    sc2 = 0;
    p1.innerText = '0';
    p2.innerText = '0';
    gameover = false;
    p2.classList.remove('winner', 'loser');
    p1.classList.remove('loser', 'winner');
    b1.disabled = false;
    b2.disabled = false;
}
