// Arche Discord Community 

// Function d'annimation

function HeadMenuEventAnim() {

    // Divergente

    const DivAP = document.getElementById("GetAP");
    const DivBlog = document.getElementById("GetBlog");
    const DivProjet = document.getElementById("GetProjet");
    const DivAnnexe = document.getElementById("GetAnnexe");
    const DivPartenaria = document.getElementById("GetPartenaria");

    // Text

    const TextAP = document.getElementById("GetTextAP");
    const TextBlog = document.getElementById("GetTextBlog");
    const TextProjet = document.getElementById("GetTextProjet");
    const TextAnnexe = document.getElementById("GetTextAnnexe");
    const TextPartenaria = document.getElementById("GetTextPartenaria");

    // Main Event Annim

    // Mouse Event

    // HeadLink Avant-Propos

    TextAP.addEventListener("mouseenter", function() {

        TextAP.innerHTML = "📜 • Avant-Propos";

    })

    TextAP.addEventListener("mousemove", function() {

        TextAP.innerHTML = "📜 • Avant-Propos";

    })

    TextAP.addEventListener("mouseout", function() {

        TextAP.innerHTML = "Avant-Propos";

    })

    // HeadLink Blog

    TextBlog.addEventListener("mouseenter", function() {

        TextBlog.innerHTML = "🌍 • Blog";

    })

    TextBlog.addEventListener("mousemove", function() {

        TextBlog.innerHTML = "🌍 • Blog";

    })

    TextBlog.addEventListener("mouseout", function() {

        TextBlog.innerHTML = "Blog";

    })

    // HeadLink Nos-Projet

    TextProjet.addEventListener("mouseenter", function() {

        TextProjet.innerHTML = "📚 • No-Projet";

    })

    TextProjet.addEventListener("mousemove", function() {

        TextProjet.innerHTML = "📚 • No-Projet";

    })

    TextProjet.addEventListener("mouseout", function() {

        TextProjet.innerHTML = "No-Projet";

    })

    // HeadLink Annexe

    TextAnnexe.addEventListener("mouseenter", function() {

        TextAnnexe.innerHTML = "🧩 • Annexe";

    })

    TextAnnexe.addEventListener("mousemove", function() {

        TextAnnexe.innerHTML = "🧩 • Annexe";

    })

    TextAnnexe.addEventListener("mouseout", function() {

        TextAnnexe.innerHTML = "Annexe";

    })

     // HeadLink Partenaria

    TextPartenaria.addEventListener("mouseenter", function() {

        TextPartenaria.innerHTML = "💎 • Partenaria";

    })

    TextPartenaria.addEventListener("mousemove", function() {

        TextPartenaria.innerHTML = "💎 • Partenaria";

    })

    TextPartenaria.addEventListener("mouseout", function() {

        TextPartenaria.innerHTML = "Partenaria";

    })

}

HeadMenuEventAnim()