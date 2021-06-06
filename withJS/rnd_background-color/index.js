function colorGenerator() {
    let letters = "0134ABC";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random()*7)]    
    }
    return randomColor;
}

document.getElementById("box").style.backgroundColor = colorGenerator();

