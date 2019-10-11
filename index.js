// Import stylesheets
import './style.css';

// Write Javascript code!


const appDiv = document.getElementById('myItem');
const input = document.getElementById('add');

document.getElementById("myButton").addEventListener('click',addItem);

function executeTestCase(value,description){
    var testDiv = document.createElement('span');
    document.getElementById('myItem').appendChild(testDiv);
    console.log(typeof(value));
    if(value === ""||!isNaN(value)){
      testDiv.className = 'fail';
      testDiv.innerHTML = `${description} failed`
    }
    else{
      testDiv.className = 'pass';
      testDiv.innerHTML = `${description} passed`
    }
}
function addItem(){
    const Items = [];
    Items.push(input.value);
    input.value="";
    for(let i=0;i<Items.length;i++){
      var newSpan = document.createElement('div');
      document.getElementById('myItem').appendChild(newSpan);
      newSpan.innerHTML = `<span>${Items[i]}</span>`
      executeTestCase(Items[0],"The case is");
    }
}