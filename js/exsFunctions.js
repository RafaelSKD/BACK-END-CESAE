function printHeart() {  //ex.12 p65
    var heart = "<3";

    alert(heart);
}

function rant(msg) {  //ex.13 p69
    msg = msg.toUpperCase();
    for (var i = 0; i < 3; i++) {
        console.log(msg);
    }
}

function printSnake() {  // ex.14 p70
  console.log(`
      _______
     / _   _ \\
    / (.) (.) \\
   ( _________ )
    \\\`-V-|-V-'/ 
     \\   |   / 
      \\  ^  / 
  `);
}
function printSnakeDead() {  // ex.14 p70
  console.log(`
      _______
     / _   _ \\
    / (X) (X) \\
   ( _________ )
    \\\`-V-|-V-'/ 
     \\   |   / 
      \\  ^  / 
  `);
}

function isSnakeEyes(d1, d2) {  //ex.14 p72

    let msg1 = "Yay, Snake Eyes!";
    let msg2 = "Not Snake Eyes!";
    if (d1 === 1 && d2 === 1) {
        console.log(msg1);
        printSnake();
    } else {
        console.log(msg2);
        printSnakeDead();
    }
}

