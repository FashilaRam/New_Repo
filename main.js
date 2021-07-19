//Passing user commands from terminal to application//

/*const terminal = process.argv[2];
process.argv.forEach((val,index) => {
console.log('${index}:${val}');
});
if(terminal == 'add'){
  console.log('Adding a note');
}else if(terminal == 'remove'){
  console.log('Removing a note');
}*/

//JSON Handling//

/*const books ={
  title : "Test Project",
  Author : "Fashila Barveen"
}

const booksJson = JSON.stringify(books);
console.log(booksJson);
const booksObject = JSON.parse(booksJson);
console.log(booksObject);*/

//Arrow functions//

/*const square = (x) => x*x;
console.log(square(2));*/

//This Keyword//

/*const test={
  name:'testing',
  guestList:['sdfs','SFa','asfas'],
  testFunction(){
    console.log('Testing project for' + this.name);
    this.guestList.forEach((guest) =>{
      console.log(guest + 'is attending' + this.name);
    })
  }
}
test.testFunction()*/

//Find method//

/*const users = [{"name":"Fashila","id":"1"},
{"name":"Banu","id":"2"},
{"name":"Ismail","id":"3"}]
const finding = users.find((finding) => finding.id == "3")
console.log(finding);*/

//Asynchronous Code//
//setTimeout//
/*console.log('starting');

setTimeout(() =>{
  console.log('Waiting timer')
},2000)
console.log('stopping');*/

//Http Requests to other API's//

/*const requestCall=require('request');
const url="https://google.com";
requestCall({url:url,json:true},(error,response) =>{
  const parsed=JSON.stringify(response.body)
  if(error){
    console.log('Sorry');
  }else if(response.body.length === 0){
    console.log('undefined');
  }else{
    console.log('Success');
  }
  console.log(parsed);
})*/

//Callback function//

/*const functionA = (address,callBack) =>{
  setTimeout(()=>{
    const sampleDate = {
      name:'Fashila',
      company:'Accenture'
    }
    callBack(sampleDate)
  },2000)
}
functionA('Chennai',(sampleData)=>{
  console.log(sampleData);
})*/


//Callback abstraction//

/*const abstraction =require('request');
const absSample =(address,callBack)=>{
  const url ="https://google.com";
  request({url:url,json:true},(error,response)=>{
    if(error){
      callBack("Sorry");
    }else if(response.body.length===0){
      callBack("undefined");
    }else{
      callBack("Success");
    }
  })
}
module.exports=abstraction*/

//ES6 Shorthand//

/*const name = "Fashila"
const age = 27

const user = {
  name,
  age,
  company : "Accenture"
}
console.log(user);*/

//Web servers//

/*1.const app = express();

app.get('',(req,res) =>{
  res.send(<h1>Weather</h1>)
})

app.get('/homes',(req,res) =>{
  res.send({
    name : "Fashila",
    company : "Accenture"
  })
})

app.listen(3000,() =>{
  console.log("Code listening to port 3000");
})*/

/*2.const path = require('path');
const express = require('express');
const app = express();
const directory = path.join(__dirname,'./public');
app.use(express.static(directory));
app.get('/homes',(req,res) =>{
  res.send({
    name : "Fashila",
    company : "Accenture"
  })
})

app.listen(3000,() =>{
  console.log("Code listening to port 3000");
})*/

//Fetch API//
/*const fetch = require('node-fetch')
fetch('http://google.com').then((response) =>{
  response.json().then((data) =>{
    if(data.error){
      console.log('error');
    }else{
      console.log('success');
    }
  })
})*/

//Search Form//

<form>
<input placeholder="name"/>
<button>Submit</button>
</form>

const name = document.querySelector('form');
const intake = document.querySelector('input');

name.addEventListener('submit',(e) =>{
  e.preventDefault()
})
