
//How to create dom element/object using javascript
//Imperative dom programming
function createElement(){

   const heading=document.createElement('h1')
   console.dir(heading)
   heading.innerHTML = 'Hello React!!!'
   heading.style.color = 'green';
   const rootElement = document.getElementById('root')
   rootElement.appendChild(heading)


}
createElement();