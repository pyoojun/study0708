const blue=document.getElementById('blue');
console.log(blue)

/* blueTextNode.nodeValue='파랑'
blueTextNode.nodeValue
const ul=document.getElementById()
console.log(ul)
*/


/* ul.nodeType
노드타입 속성
ul.nodeName
ul.nodeValue
ul.textContent='<li>red</li>' <-기존에 있던걸 지우고 새로 넣을때 
ul.innerHTML='<li>Red</li><li>blue</li>' <-새로운걸 추가할때 씀
ul.innerHTML='<li>red</li><li>blue</li><li>green</li>' <-그러나 새로 다시 작성해야 되는 번거로움
const newLi=document.createElement('li');
newLi
newLi.innerHTML='orange';
newLi
const ul=document.getElementById('color')
ul.appendChild(newLi) <-기존에 있던거 건드리지 않고 새로운거 추가시 
newLi.innerHTML='white'
ul.appendChild(newLi)
const newLi3=document.createElement('li');
const textNode3=document.createTextNode('yellow');
newLi3.appendChild(textNode3);
const red=document.getElementById('red')
ul.insertBefore(newLi3,red)

새롭게
const newLi4=document.createElement('li');
const newText=document.createTextNode('pink')
newLi4.appendChild(newText) < pink 집어넣기
const red=document.getElementById('red')
ul.insertBefore(blue, newLi4)



*/
