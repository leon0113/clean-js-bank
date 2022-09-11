function setPlayerStyle(player) {
    player.style.border = '3px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}

function addplayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Harum neque, pariatur saepe esse cumque quis at, fugiat molestiae eos facere culpa natus dolor
        modi quod eum nihil delectus beatae, eius tenetur mollitia eligendi deleniti sequi iste
        molestias. Ex!</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'red';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})
