//var jour = prompt('Quel jour es-tu née ?');
//var mois = prompt('Quel mois es-tu née ?');
var annee = prompt('Quelle année es-tu née ?');
var date = new Date();
var year = date.getFullYear();
var age = year - annee;

var terre = document.getElementById('ageTerre');
terre.innerHTML = 'Tu as '+age+' ans.';

var venus = document.getElementById('ageVenus');


var mercure = document.getElementById('ageMercure');


var jupiter = document.getElementById('ageJupiter');


var mars = document.getElementById('ageMars');


var saturne = document.getElementById('ageSaturne');


var pluton = document.getElementById('agePluton');

console.log(age);

