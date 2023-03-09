const form = document.querySelector('.form');
let sel = document.getElementById('Interested') [0];

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
    
    console.log(form.nama.value);
    console.log(form.email.value);
    console.log(form.Interested.value);
})



