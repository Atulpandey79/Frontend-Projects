const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click',() => {
   selectElement('.nav-List').classList.add('active');
});

selectElement('.close').addEventListener('click',() => {
   selectElement('.nav-List').classList.remove('active');
})
