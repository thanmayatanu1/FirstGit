function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    localStorage.setItem('name' , name);
    localStorage.setItem('email', email);
}
let myObj = {
    name: "name",
    email: "email" ,
};

let Obj = JSON.stringify(myObj);
console.log(myObj);
localStorage.setItem("myObj", myObj);
console.log(localStorage);