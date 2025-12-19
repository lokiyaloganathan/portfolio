/*Animation avec AOS*/
AOS.init({
      once: false,
      mirror: true,
      offset: 100
    });


/*Mode*/
let btn = document.getElementById("toggle-theme");/*bouton pour changer le mode*/

/*Mode sombre*/
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀︎";
}

/*Fonction quand on clique sur le bouton*/
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    let isDark = document.body.classList.contains("dark"); /*Vérifier si le mode sombre est active*/
    
    btn.textContent = isDark ? "☀︎" : "☽";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});


/*Message après l'envoie du formulaire*/
document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault(); /* empêche le rechargement de la page*/

    /*Affiche le message de succès*/
    let successMsg = document.getElementById("successMessage");
    successMsg.style.display = "block";

    /*Réinitialise le formulaire*/
    this.reset();

    /* Cache le message après 4 secondes*/
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 4000);
});

