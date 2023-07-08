/* const blue=document.getElementById('blue');
console.log(blue) */

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
const newLi=document.creatElement('li');
newLi <-li 태그가 하나 생김
newLi.innerHTML='pink'
newLi <로 확인하면 <li>pink</li> 들어온게 보임
const red=document.getElementById('red')
red < <li id="red"></li>
ul.insertBefore(newLi, red) <-red 아이디 위에 pink가 생김


*/

//삽입
const blue=document.getElementById('blue');
console.log(blue)

const ul=document.getElementById('color');
console.log(ul)
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
const newLi=document.createElement('li');
/* const newLi1=document.createElement('li');
 */const textNode=document.createTextNode('black');
/* const textNode1=document.createTextNode('yellow'); */
newLi.appendChild(textNode);
/* newLi1.appendChild(textNode1); */
const red=document.getElementById('green');
insertAfter(newLi, ul.lastElementChild)
/* ul.insertAfter(newLi1, red) */

//복제
const newYellow=newLi.cloneNode(true);
console.log(newYellow)
ul.appendChild(newYellow)

//삭제
ul.removeChild(newYellow);
ul.removeChild(red);