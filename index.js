const password_element = document.getElementById("pw");
const copy_element = document.getElementById("copy");
const length_element = document.getElementById("len");
const upper_element = document.getElementById("upper");
const lower_element = document.getElementById("lower");
const number_element = document.getElementById("number");
const symbol_element = document.getElementById("symbol");
const generate_element = document.getElementById("generate");

const ULetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LLetters = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return LLetters[Math.floor(Math.random() * LLetters.length)];
}

function getUppercase() {
    return ULetters[Math.floor(Math.random() * ULetters.length)];
}

function getNumber() {
    return num[Math.floor(Math.random() * num.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = length_element.value;

    let password = "";

    if (upper_element.checked) {
        password += getUppercase();
    }

    if (lower_element.checked) {
        password += getLowercase();
    }

    if (number_element.checked) {
        password += getNumber();
    }

    if (symbol_element.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    password_element.innerText = password;
}

function generateX() {
    const xs = [];
    if (upper_element.checked) {
        xs.push(getUppercase());
    }

    if (lower_element.checked) {
        xs.push(getLowercase());
    }

    if (number_element.checked) {
        xs.push(getNumber());
    }

    if (symbol_element.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generate_element.addEventListener("click", generatePassword);

copy_element.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = password_element.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});