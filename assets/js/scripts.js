//var jour = prompt('Quel jour es-tu née ?');
//var mois = prompt('Quel mois es-tu née ?');
//var annee = prompt('Quelle année es-tu née ?');
var birthday = prompt('Quel est votre date d\'anniversaire ?(JJ/MM/AAAA)');

if (birthday.length == 10) {
    var tableau = birthday.split("/",3);
    var jours = tableau[0];
    var mois = tableau[1];
    var annees = tableau[2];

    if(!isNaN(jours) && !isNaN(mois) && !isNaN(annees)) {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        if (month >= mois) {
            jourMois = (month - mois)*30.4375;
        } else {
            jourMois = (mois - month)*30.4375;
        }

        // Calcul du nombre d'année
        //var nbJours = (year - annee) * 365.25;
        var totalJour = ((year-annees)*365.25) - jourMois - jours;

        var ageTerre = totalJour /365.25;
        var ageVenus = totalJour /224.70;
        var ageMercure = totalJour /87.97;
        var ageJupiter = totalJour /4332.6;
        var ageMars = totalJour /686.980;
        var ageSaturne = totalJour /10759.2;
        var agePluton = totalJour /90469.7;
        var ageUranus = totalJour /30664;
        var ageNeptune = totalJour /60148;

        // Calcul du nombre de jours
        var nbHeures = totalJour*23.93;

        var jourTerre = totalJour;
        var jourVenus = nbHeures /(243*23.93);
        var jourMercure = nbHeures /(58.65*23.93);
        var jourJupiter = nbHeures /9.84;
        var jourMars = nbHeures /24.63;
        var jourSaturne = nbHeures /10.23;
        var jourPluton = nbHeures /(6.39*23.93);
        var jourUranus = nbHeures /17.9;
        var jourNeptune = nbHeures /19.2;

        // Inclusion dans le html
        var terre = document.getElementById('ageTerre');
        terre.innerHTML = 'Tu as '+Math.floor(ageTerre)+' ans.<br />Soit '+Math.floor(jourTerre)+' jours de cette planète !';

        var venus = document.getElementById('ageVenus');
        venus.innerHTML = 'Tu as '+ageVenus.toFixed(1)+' ans.<br />Soit '+jourVenus.toFixed(1)+' jours de cette planète !';

        var mercure = document.getElementById('ageMercure');
        mercure.innerHTML = 'Tu as '+ageMercure.toFixed(1)+' ans.<br />Soit '+jourMercure.toFixed(1)+' jours de cette planète !';

        var jupiter = document.getElementById('ageJupiter');
        jupiter.innerHTML = 'Tu as '+ageJupiter.toFixed(1)+' ans.<br />Soit '+jourJupiter.toFixed(1)+' jours de cette planète !';

        var mars = document.getElementById('ageMars');
        mars.innerHTML = 'Tu as '+ageMars.toFixed(1)+' ans.<br />Soit '+jourMars.toFixed(1)+' jours de cette planète !';

        var saturne = document.getElementById('ageSaturne');
        saturne.innerHTML = 'Tu as '+ageSaturne.toFixed(1)+' ans.<br />Soit '+jourSaturne.toFixed(1)+' jours de cette planète !';

        var pluton = document.getElementById('agePluton');
        pluton.innerHTML = 'Tu as '+agePluton.toFixed(2)+' ans.<br />Soit '+jourPluton.toFixed(1)+' jours de cette planète !';

        var uranus = document.getElementById('ageUranus');
        uranus.innerHTML = 'Tu as '+ageUranus.toFixed(2)+' ans.<br />Soit '+jourUranus.toFixed(1)+' jours de cette planète !';

        var neptune = document.getElementById('ageNeptune');
        neptune.innerHTML = 'Tu as '+ageNeptune.toFixed(2)+' ans.<br />Soit '+jourNeptune.toFixed(1)+' jours de cette planète !';

    } else {
        // pas un nombre
        alert('Tu n\'as pas écrit ta date de naissance !');
    }

    
} else {
    // moins de 10 caracteres
    alert('Tu n\'as pas écrit ta date de naissance !!');
}
