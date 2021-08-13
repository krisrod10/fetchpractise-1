console.log('Loading Main.js');


// this function is pulling the information from the fetch and using the code writen to see the resonce status and the json payload
fetch("https://randomuser.me/api/?results=10")
.then(function(response){
    //do something with the response 
    //extract the json from the response 
    console.log("response status", response.status)
    return response.json();
}).then(function(json){
    //do something with the json payload
    console.log("response payload:", json);
    processJson(json);
});


//move on

//processing the contact to use the contact information from the wedsite pull information
 let processJson = function(json){
    //print the firstname of the person
for(let i =0; i< json.results.length; i++){
    //console.log(json.results[i].name.first)
let contact = json.results[i];
processContact(contact);
}

}
// process one contact at a time and update the dom with that contact info
// printing out the information given from the website information
//needs to print out the information for each let inside this code
let processContact = function(contact){

    let firstName = contact.name.first;
    let lastName = contact.name.last;
    let email = contact.email;
    let city = contact.location.city;
//object.addEventListener("click", myScript)
    //add the mininal contact info to the ul and the li 
    // add and event listener to the li to show additional extra information
   let element = document.getElementById('div1');
element.innerHTML = firstName;

let element2 = document.getElementById('div2');
element2.innerHTML = lastName;
 
let element3 = document.getElementById('div3');
element3.innerHTML = email;

let element4 = document.getElementById('div4');
element4.innerHTML = city;


}
