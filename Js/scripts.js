const direction = document.querySelector('.direction')
btnTraerInfo = document.getElementById('traer')
phone = document.querySelector('.phone');
mail = document.querySelector('.mail');
github = document.getElementsByClassName('github');
linkedin = document.getElementsByClassName('linkedin');
cv = document.getElementsByClassName('cv');
main = document.querySelector('main')
resume = document.getElementsByClassName('resume');
nombre = document.getElementById('name')
nav = document.querySelector('nav')
foto = document.getElementById('portada')
fotito = document.getElementById('fotito')
main = document.querySelector('main')



fetch('./Js/data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        nombre.innerHTML = `${data.name.first} ${data.name.last}`
        direction.innerHTML = `<span class="material-symbols-outlined">location_on</span>${data.location.city}, ${data.location.state}. ${data.location.country}`
        phone.innerHTML = `<span class="material-symbols-outlined">call</span>${data.cell}`;
        mail.innerHTML = `<span class="material-symbols-outlined">mail</span> ${data.email}`;
        foto.src = `${'./Img/andrew (2).png'}`
        fotito.href = `${'./Img/andrew (2).png'}`
    })
    .catch(error => {
        console.error('Error al cargar los datos', error);
    });


function openDownloadableFile(file) {
    setTimeout(() => {
        window.open(file, '_blank');
    }, 100);
}

function Modals(data) {


}


cv[0].addEventListener('click', () => {
    openDownloadableFile('../Docs/CV.pdf');
});

resume[0].addEventListener('click', () => {
    openDownloadableFile('../Docs/Resume.pdf');
});


btnTraerInfo.addEventListener('click', () => {
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data) {
            const dataT = data.results[0]
            nombre.innerHTML = `${dataT.name.first} ${dataT.name.last}`
            direction.innerHTML = `<span class="material-symbols-outlined">location_on</span>${dataT.location.city}, ${dataT.location.state}. ${dataT.location.country}`
            phone.innerHTML = `<span class="material-symbols-outlined">call</span>${dataT.cell}`;
            mail.innerHTML = `<span class="material-symbols-outlined">mail</span> ${dataT.email}`;
            foto.src = `${dataT.picture.large}`
            fotito.href = `${dataT.picture.thumbnail}`
            main.innerHTML = `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>

          </div>`
        }
    });
})
