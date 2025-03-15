
const formRegister = document.getElementById('formRegister');
console.log("form", formRegister);
formRegister.onsubmit = (e) => {
    e.preventDefault();
    console.log("Submit form", e);
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        avatar: document.getElementById('avatar').src,
        guid: crypto.randomUUID()
    };
    const oldItems = JSON.parse(localStorage.users ?? "[]");
    console.log("Old list", oldItems);

    let items = [...oldItems, formData];
    let json = JSON.stringify(items);

    //localStorage.users = json; // запис масиву в localStorage
    localStorage.setItem("users", json);// інший спосіб (безпечніший)
    console.log("json", json);
    let users = localStorage.getItem("users");
    console.log("json", users);

    location.href = "/users.html";
}