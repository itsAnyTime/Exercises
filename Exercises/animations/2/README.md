2.	Specify that the transition of the <div> element should have a "ease-in-out" speed curve.
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
}@keyframes example {
}
</style>

HTML:
<div></div>