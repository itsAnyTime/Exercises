# TASKS 1-5:
-------------

## 1.
Add a 2 second animation for the <div> element, which changes the color from red to blue. Call the animation "example"

CSS:
<style> 
    div {
      width: 100px;
      height: 100px;
      background-color: red;
    }
</style>

HTML:
<div></div>

## 2.	
Add the following 5 steps to the animation "example" (using 0%, 25%, 50%, 75%, and 100%):

a.	0% - Set background color to "red", left position to "0px", top position to: "0px"
b.	25% - Set background color to "blue", left position to "0px", top position to: "200px"
c.	50% - Set background color to "green", left position to "200px", top position to: "200px"
d.	75% - Set background color to "yellow", left position to "200px", top position to: "0px"
e.	100% - Set background color to "red", left position to "0px", top position to: "0px"

CSS:
<style> 
    div {
      width: 100px;
      height: 100px;
      position: relative;
      background-color: red;
      animation-name: example;
      animation-duration: 4s;
    }
    
    @keyframes example {
    }
</style>

HTML:
<div></div>

## 3.	
Specify that the animation of the <div> element should have a "1" second delay before starting.

CSS:
<style> 
  div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
  }
  
  @keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
  }
</style>
	HTML:
<div></div>

## 4.	
Specify that the animation of the <div> element should continue to loop for ever.

CSS:
<style> 
  div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
  }
  
  @keyframes example {
    0%   {background-color: red; left:0px;}
    50%  {background-color: yellow; left:200px;}
    100% {background-color: red; left:0px;}
  }
</style>
HTML:
<div></div>

## 5.	
Specify that the animation of the <div> element should alternate between running forwards and backwards.

CSS:
<style> 
  div {
    width: 100px;
    height: 100px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;  
  }
  
  @keyframes example {
    0%   {background-color: red; left:0px; top:0px;}
    25%  {background-color: blue; left:0px; top:200px;}
    50%  {background-color: green; left:200px; top:200px;}
    75%  {background-color: yellow; left:200px; top:0px;}
    100% {background-color: red; left:0px; top:0px;}
  }
</style>

HTML:
<div></div>