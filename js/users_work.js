
const formRegister = document.getElementById('formRegister');
const userList = document.getElementById('user-list');


function LoadUsers() {
    const users = JSON.parse(localStorage.users);

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "relative flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow";
        
        userCard.innerHTML = `
                        <img class="w-16 h-16 rounded-full" src="${user.avatar}" alt="${user.name}">
                        <button data-modal-target="editModal" data-modal-toggle="editModal" class="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md" style="cursor:pointer" data-user-id="${user.guid}">
        <img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png" alt="Edit" class="w-6 h-6">
    </button>
                        <div>
                <div class="flex items-center space-x-2">
                    <p class="text-lg font-medium text-gray-900">${user.name}</p>
                    <p class="text-lg font-medium text-gray-900">${user.surname}</p>
                </div>
                <p class="text-gray-600" style="font-size:12px">${user.email}</p>
            </div>
                        
                    `;
        userList.appendChild(userCard);
        const btn = userCard.querySelector(`[data-user-id="${user.guid}"]`)
        
        btn.addEventListener('click', () => UserEdit(userCard,user));
    });
}

function UserEdit(userCard,user) {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    console.log(user);
    console.log(user.avatar);
    name.value = user.name;
    surname.value = user.surname;
    email.value = user.email;
    password.value = user.password;
    avatar.src = user.avatar;
}

LoadUsers();