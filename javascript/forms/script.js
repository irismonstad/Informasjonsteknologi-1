const skjema = document.getElementById('skjema');

skjema.addEventListener('submit', function(event){
    event.preventDefault();
    const navn = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(`Hei ${navn}! Du er en ${gender} :)`);
});

