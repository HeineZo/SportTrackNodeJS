// const btn = document.querySelector(".button");

// btn.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.querySelector(".bn").click();
//   }
// });

const input = document.querySelectorAll('input');
const date = document.getElementById('dateDeNaissance');
if (date) {
    date.max = new Date().toISOString().split("T")[0];
}

function previous() {
    const basic = document.querySelector('.basic');
    const personal = document.querySelector('.personal');

    basic.style.display = 'flex';
    personal.style.display = 'none';
}

function next() {
    const basic = document.querySelector('.basic');
    const personal = document.querySelector('.personal');
    const pattern = /^(([a-zA-Z0-9]+(\.|\-|\_)*?[a-zA-Z0-9]+)+)@([a-zA-Z0-9]*\.[a-zA-Z]{2,6})$/;
    let count = 0;
    let texte = '';

    for (let i = 0; i < 4; i++) {
        if (input[i].value !== '') {
            count++;
        } else {
            input[i].classList.add('error');
        }
    }
    if (count === 4 && input[3].value.length >= 8 && pattern.test(input[2].value)) {
        basic.style.display = 'none';
        personal.style.display = 'flex';
    } else {
        if (count !== 4) texte = 'Tous les champs doivent être remplis';
        else if (input[3].value.length < 8) texte = 'Le mot de passe doit faire plus de 8 caractères';
        else if (!pattern.test(input[2].value)) texte = "L'adresse mail est invalide";
        Toastify({
            text: texte,
            duration: 3000,
            newWindow: true,
            gravity: "top", 
            position: "center", // `left`, `center` or `right`
            style: {
                background: "#BF4342"
            }
            }).showToast();  
    }
}


input.forEach(element => {
    element.addEventListener('input', function() {
        if (element.value === '' || (element.id == 'password' && element.value.length < 8)) {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    });
});

