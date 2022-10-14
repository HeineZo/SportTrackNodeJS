// Boutton personalisé
const file = document.getElementById('file');
const fileBtn = document.getElementById('fileBtn');
const fileTxt = document.getElementById('fileTxt');

fileBtn.addEventListener('click', function(){
    file.click();
});

file.addEventListener('change', function() {
    console.log('test');
    if (file.value) fileTxt.innerHTML = '<i class="fa-regular fa-file"></i> '+file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    else fileTxt.innerHTML = "Vous n'avez importé aucun fichier";
});