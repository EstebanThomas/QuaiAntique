const galerieImage = document.getElementById("allImages");

//Récupérer les infos des img
let monImage = getImage("titre test", "../elements/Plat1.jpg"); 

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return `
        <div class="col-12 col-lg-6 image-card">
            <img src="${urlImage}" class="img-fluid img-galerie" alt="Image de ${titre}">
            <h1 class="image-title">${titre}</h1>
            <div class="action-img-btn">
                <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#ModalEdit"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#ModalDelete"><i class="bi bi-trash"></i></button>
            </div>
        </div>`;
}
