alert ("Welkom bij de beste game van het internet genaamd Ikea simulator, druk op ok om het spel te starten.");
alert ("Het doel van het spel is om de Ikea kast in elkaar te zetten lukt dat je niet is het GAME OVER");
var vraag1 = prompt ("Wat is je eerste stap?\n (a) Pak je de handleiding en lees je deze goed door\n Of\n (b) denk je het is maar een Ikea kast dat lukt me wel zonder\n");
if (vraag1 == "a"){
alert ("Goeie keuze, de veilige manier dus.");
alert ("Maar nu is de vraag wat ga je nu doen?");
var vraag2 = prompt ("(a) Ga je de onderdelen tellen en kijken of het klopt\n Of\n (b) ga je gewoon beginnen met bouwen\n");
if (vraag2 == "a"){
alert ("Oke slimme keuze het duurt wel wat langer maar gelukkig klopt alles en kan je verder gaan.");
alert ("Maar nu is de vraag wat is je volgende stap?");
alert ("Hoe ga je beginnen met bouwen?");
var vraag3 = prompt ("(a) Met de kleine stukjes\n Of\n (b) met de grote stukken\n");
if (vraag3 == "a"){
alert ("Jammer de grote stukken moesten eerst gemaakt worden en dan moesten de kleine er in gezet worden.");
alert ("Dus bij deze GAME OVER");
}else{
alert ("Goede keuze de grote stukken moesten eerst gemaakt worden en dan de kline stukjes er in geplaatst worden.");
alert ("Maar ga je de volgende stap ook goed doen?");
alert ("we zullen het zien.");
var vraag4 = prompt ("Wat ga je doen?\n (a) Ga je alles uit elkaar leggen en de kast proberen in elkaar te zetten\n Of\n (b) pak je steeds maar een stuk en probeer je maar wat\n");
if (vraag4 == "a"){
alert ("Goedzo je het is je gelukt de kast in elkaar te zetten.");
alert ("Dus bij deze #1 Victory Royale");
}else{
alert ("We weten allebei wel dat je op een gegeven moment beseft dat je 4 schroefjes mist dus weer opnieuw mag beginnen.");
alert ("Dus bij deze GAME OVER");
}
}
}else{
alert ("We weten allebei wel dat dit niks wordt omdat je te veel mist van de onderdelen.");
alert ("Dus bij deze GAME OVER");
}
}else{
alert ("je hebt dus de gerbuikelijke keuze gemaakt.");
alert ("maar wat doe je hierna?")
var vraag5 = prompt ("(a) Ga je alles uitleggen en kijken of het klopt\n Of\n (b) Pak je gewoon iets en probeer je het in elkaar te zetten\n");
if (vraag5 == "a"){
alert ("Goede keuze alles klopt en we kunnen beginnen met bouwen.");
alert ("Met wat ga je beginnen met bouwen?");
var vraag6 = prompt ("(a) Eerst de kleine stukjes\n Of\n (b) Eerst met de grote stukken.\n");
if (vraag6 == "a"){
alert ("jammer genoeg moet je eerst de grote stukken in elkaar zetten.");
alert ("Dus bij deze GAME OVER");
}else{
alert ("Gelukkig heb je de goede keuze gemaakt en kunnen we verder.");
alert ("Hoe ga je de schroeven er in draaien?");
var vraag7 = prompt ("(a) Met een schroevendraaier\n Of\n (b) Met een boormachine\n");
if (vraag7 == "a"){
alert ("Goeie keuze");
alert ("Wat ga je nu doen?");
var vraag8 = prompt ("(a) Ga je gelijk al je zware spullen in de kast zetten\n Of\n (b) Ga je kijken of alles klopt en kijken of de kast klaar is voor gebruik en hem dan gebruiken\n");
if (vraag8 == "a"){
alert ("Jammer de kast heeft het niet gehouden.");
alert ("Dus bij deze GAME OVER");
}else{
alert ("Goeie keuze de kast heeft het gehouden.");
alert ("Dus bij deze #1 Victory Royale");
}
}else{
alert ("Slimme keuze");
alert ("Wat ga je nu doen?");
var vraag9 = prompt ("(a) Ga je kijken of alles klopt en kijken of de kast klaar is voor gebruik en hem dan gebruiken\n Of\n (b) Ga je de kast gelijk gebruiken en je zware spullen er op zetten\n ");
if (vraag9 =="a"){
alert ("Slimme keuze");
alert ("Oke, nu de beslissende vraag");
var vraag10 = prompt ("Vind je de kast goed genoeg?\n (a) Ja\n Of\n (b) Nee\n");
if (vraag10 == "a"){
alert ("Gelukkig");
alert ("Bij deze #1 Victory Royale");
}else{
alert ("Jammer genoeg was de kast niet goed genoeg");
alert ("Bij deze #1 Victory Royale");
}
}else{
alert ("Heel jammer je was heel dichtbij maar helaas.");
alert ("Dus bij deze GAME OVER");
}
}
}
}else{
alert ("We weten allebei dat dit niet de goede aanpak is.");
alert ("Dus bij deze GAME OVER");
}
}
