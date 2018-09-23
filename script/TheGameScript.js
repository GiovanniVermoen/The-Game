const BEGIN = "Welkom bij deze game. Vul de vragen goed in en verdien punten je kan maximaal 20 punten verdienen, let op de antwoorden zijn hoofdletter gevoelig en vul de voledige naam in van de speler dus voor en achternaam.";
alert (BEGIN);
if (prompt("Vraag 1 - Welk land won in 2014 het WK?") == "Duitsland") {
 if (prompt("Vraag 2 - Welk team won in 2017 de Champions League?") == "Real Madrid") {
  if (prompt("Vraag 3 - Welke speler maakte dit jaar een transfer naar Juventus?") == "Cristiano Ronaldo") {
   if (prompt("Vraag 4 - Welke speler werd uitgeroepen tot talent van het jaar 2018?") == "Kylian Mbappe") {
    if (prompt("Vraag 5 - Welk land won het WK van 2010?") == "Spanje") {
     if (prompt("Vraag 6 - In wel land werd het WK van 2018 gespeeld?") == "Rusland") {
      if (prompt("Vraag 7 - Hoeveel spelers staan er aan het begin van de wedstrijd op het veld?") == "22") {
       if (prompt("Vraag 8 - Hoe oud was Péle toen hij het WK met Brazilië won?") == "17") {
        if (prompt("Vraag 9 - Welke speelster werd in 2017 bekroond als beste speelster van het jaar") == "Lieke Martens") {
         if (prompt("Vraag 10 - Wat is de afkorting van de digitale schiedsrechter die word ingeschakeld met moeilijke beslissingen?") == "VAR") {
          if (prompt("Vraag 11 - Welk land heeft het WK van 2018 gewonnen?") == "Frankrijk") {
           if (prompt("Vraag 12 - Wie is de duurste verdediger ooit gekocht?") == "Virgil van Dijk") {
            if (prompt("Vraag 13 - Welk land won het EK van 2016?") == "Portugal") {
             if (prompt("Vraag 14 - Om de hoeveel jaar word er een WK gespeeld?") == "4") {
              if (prompt("Vraag 15 - Uit welk land komt Jerome Boateng?") == "Duitsland") {
               if (prompt("Vraag 16 - Wie is de huidige hoofdtrainer van Feyenoord?") == "Giovanni van Bronkhorst") {
                if (prompt("Vraag 17 - Welke speler heeft gespeeld bij Feyenoord, Ajax en Barcelona?") == "Johan Cruijf") {
                 if (prompt("Vraag 18 - Hoeveel Ballon D'ors heeft Lionel Messi gewonnen?") == "5") {
                  if (prompt("Vraag 19 - Welke speler is onder andere mede-eigenaar van het merk Balr. heeft gespeeld bij Feyenoord en speelt nu in Turkije?") == "Eljero Elia") {
                   if (prompt("Vraag 20 - In welk jaar is je FIFA opgericht?") == "1862") {
                       document.write("Heel goed gedaan je hebt het spel uitgespeeld, je bent echt een voetbal kenner.");
                 }else {
                   const VRAAGTWINTIG = "Jammer, je beht 19 punten gehaald je ben heel close maar je moest nog 1 punt voor de topscore volgende keer beter.";
                   alert (VRAAGTWINTIG);
                  }
                 }else {
                   const VRAAGNEGENTIEN = "Jammer, je hebt 18 punten gehaald nog maar 2 te gaan volgende keer beter.";
                   alert (VRAAGNEGENTIEN);
                 }
                }else {
                  const VRAAGACHTIEN = "Jammer, je hebt 17 punten gehaald nog maar 3 punten volgende keer beter.";
                  alert (VRAAGACHTIEN);
                }
               }else {
                 const VRAAGZEVENTIEN = "Jammer, je hebt 16 punten gehaald dat is 4 verwijderd van de top score volgende keer beter.";
                 alert (VRAAGZEVENTIEN);
               }
              }else {
                const VRAAGZESTIEN = "Jammer, je hebt 15 punten gehaald dat is al best veel volgende keer beter.";
                alert (VRAAGZESTIEN);
              }
             }else {
               const VRAAGVIJFTIEN = "Jammer, je hebt 14 punten gehaal volgende keer beter.";
               alert (VRAAGVIJFTIEN);
             }
            }else {
              const VRAAGVEERTIEN = "Jammer, je hebt 13 punten gehaald als je zo door blijft gaan haal je het sowiezo volgende keer beter.";
              alert (VRAAGVEERTIEN);
            }
           }else {
             const VRAAGDERTIEN = "Jammer, je hebt 12 punten gehaald het gaat goed blijf zo door gaan volgende keer beter.";
             alert (VRAAGDERTIEN);
           }
          }else {
            const VRAAGTWAALF = "Jammer, je hebt 11 punten gehaal het gaat al best goed volgende keer beter.";
            alert (VRAAGTWAALF);
          }
         }else {
           const VRAAGELF = "Jammer, je hebt 10 punten gehaald je zit al op de helf goed bezig volgende keer beter.";
           alert (VRAAGELF);
         }
        }else {
          const VRAAGTIEN = "Jammer, je hebt 9 punten gehaald je bent bijna op de helft volgende keer beter.";
          alert (VRAAGTIEN);
       }
      }else {
        const VRAAGNEGEN = "Jammer, je hebt 8 punten gehaald je bent al goed op weg volgende keer beter.";
        alert (VRAAGNEGEN);
       }
      }else {
        const VRAAGACHT = "Jammer, je hebt 7 punten gehaald je bent al goed op weg volgende keer beter.";
        alert (VRAAGACHT);
      }
     }else {
       const VRAAGZEVEN = "Jammer, je hebt 6 punten gehaald je bent al goed op weg volgende keer beter.";
       alert (VRAAGZEVEN);
     }
    }else {
      const VRAAGZES = "Jammer, je hebt 5 punten gehaald volgende keer beter.";
      alert (VRAAGZES);
    }
   }else {
     const VRAAGVIJF = "Jammer, je hebt 4 punten gehaald volgende keer beter.";
     alert (VRAAGVIJF);
   }
  }else {
    const VRAAGVIER = "Jammer je hebt 3 punten gehaald volgende keer beter.";
    alert (VRAAGVIER);
  }
 }else {
   const VRAAGDRIE = "jammer, je hebt 2 punten gehaald volgend heer beter.";
   alert (VRAAGDRIE);
 }
}else {
  const VRAAGTWEE = "Jammer, je hebt 1 punt gehaald volgende keer beter.";
  alert (VRAAGTWEE);
}
}else {
  const VRAAGEEN = "Jammer, je hebt 0 punten gehaald volgende keer beter.";
  alert (VRAAGEEN);
}
