import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/Accueil", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
    new Route("/Connexion", "Connexion", "/pages/connexion.html", "/js/auth/signin.js"),
    new Route("/Inscription", "Inscription", "/pages/inscription.html", "/js/auth/signup.js"),
    new Route("/Profil", "Profil", "/pages/profil.html"),
    new Route("/Reservations", "Reservations", "/pages/reservations.html"),
    new Route("/Reserver", "Reserver", "/pages/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";