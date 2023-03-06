function savsaveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

const obj = {
    name: name,
    email: email,
}

localStorage.setItem('userDetails', JSON.stringify(obj));
}