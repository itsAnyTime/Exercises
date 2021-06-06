

// Change the font of the body element. 
document.body.style.fontFamily = 'arial';

// Center the text of h1 on the page.
document.getElementsByTagName("h1")[0].style.textAlign = 'center';
// or
document.getElementsByClassName("title")[0].style.textAlign = "center";

// The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 

document.getElementsByClassName("category")[0].style.color = "green";
document.getElementsByClassName("category")[0].style.fontStyle = "italic";

// Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 

function colorGeneratorExtended() {
    let color = "#00f9f944";
    let randomColor = "#";
    for (let j = 0; j < 8; j++) {
        randomColor += color[Math.floor(Math.random()*7)]    
    }
    return randomColor;
}

for (let i = 0; i < 3; i++) {

    document.getElementsByClassName("food-category")[i].style.color = colorGeneratorExtended();

    document.getElementsByClassName("food-category")[i].style.backgroundColor = colorGeneratorExtended();
    
}


// Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
document.getElementsByClassName("main")[0].style.display = "flex";

document.getElementsByClassName("main")[0].style.textAlign = "center";

// Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
 

// Select all _even_ `allergy-info` items. Give the even items a different background color.


// Make the `allergy-warning` appear as a column in the center of the page.
document.getElementsByClassName("allergy-warning")[0].style.textAlign = "center";

document.getElementsByClassName("allergies")[0].style.listStyleType = "none";

// The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.