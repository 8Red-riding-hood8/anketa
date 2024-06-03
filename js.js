let user_name = prompt("Введіть ваше ім'я");
let name_items = user_name.trim().split(/[\s-]+/);

let uppperName = name_items.map(name_item => {
    return name_item.charAt(0).toUpperCase() + name_item.slice(1).toLowerCase();
});

user_name = uppperName.join(user_name.includes('-') ? '-' : ' ');
console.log(user_name);


let user_surname= prompt("Введіть ваше прізвище");
let surname_items = user_surname.trim().split(/[\s-]+/);

let uppperSurname = surname_items.map(surname_item => {
    return surname_item.charAt(0).toUpperCase() + surname_item.slice(1).toLowerCase();
});

user_surname = uppperSurname.join(user_surname.includes('-') ? '-' : ' ');
console.log(user_surname);


let email = prompt("Введіть свій email:");
let email_mes = "";
email = email.split(' ').join('').toLowerCase(); // Можна написати спільну функцію яка це робить
let [namePart, domailPart] = email.split('@');

if (email.indexOf('@') === -1) {
    // console.log(`not valid email <b>${email}</b> (символ @ відсутній)`);
    email_mes += ` not valid email <b>${email}</b> (символ @ відсутній);`;
}else if (email.indexOf('@') === 0) {
    // console.log(`not valid email <b>${email}</b> (символ @ знаходиться на першому місці)`);
    email_mes += ` not valid email <b>${email}</b> (символ @ знаходиться на першому місці);`
}else if (email.indexOf('@') === email.length - 1) {
    // console.log(`not valid email <b>${email}</b> (символ @ знаходиться на останньому місці)`);
    email_mes += ` not valid email <b>${email}</b> (символ @ знаходиться на останньому місці);`;
}if(!domailPart.includes('.')) {
        // console.log(`not valid email <b>${email}</b> (після символу @ відсутня крапка або символи)`);
        email_mes += ` not valid email <b>${email}</b> (після символу @ відсутня крапка або символи);`;
}else {
    // console.log(`valid email: ${email}`);
    email += ` valid email: ${email}`;
}

// document.write(email, email_mes);

let birthYear;
do {
    birthYear = prompt("Введіть ваш рік народження");
}while(birthYear < 1900)

birthYear = +birthYear.trim();
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.write(`<b>Full name:</b> ${user_name} ${user_surname}<br/>`);
document.write(`<b>Email:</b> ${email, email_mes}<br/>`);
document.write(`<b>Age:</b> ${age}<br/>`);

