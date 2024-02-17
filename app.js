function startGame() {
    var start = document.getElementById('start');
    start.style.display = 'none'
    var left = 0
    function game() {
        console.log(left)
        console.log(event.keyCode);
        var character = document.getElementById("character")
        if (event.keyCode === 39 && left < 1600) {   //forward-right key
            left = left + 10;
            character.style.left = left + 'px'
            character.src = "Animations/forward-2.gif"
        }

        if (event.keyCode === 37 && left > -70) {  //left key
            left = left - 10;
            character.style.left = left + 'px'
            character.src = "Animations/forward-2.gif"
        }

        if (event.keyCode === 32 && left < 1600) {  //spacebar  
            // character.style.height = 350 + 'px'
            // character.style.width = 350 + 'px'
            character.src = "Animations/shoot-2.gif"
        }

        if (event.keyCode === 40 && left < 1600) {  //left key 
            character.src = "Animations/sit-2.gif"
        }

        if (event.keyCode === 38 && left < 1600) {      //up key
            character.style.left = left + 'px'
            character.src = "Animations/jump-2.gif"
        }

        if (event.keyCode === 70 && left < 1600) {      //k key to kick
            character.src = "Animations/flip-2.gif"
        }

        if (event.keyCode === 72 && left < 1600) {  // h key to hide
            character.style.display = "block"
            character.style.top = 0 + 'px'
            character.src = "Animations/hide-2.gif"
            setTimeout(function () {
                character.src = "Animations/forward-2.gif"
                character.style.top = 340 + 'px'
            }, 10000)
        }
    }
    window.onkeydown = game;
}

