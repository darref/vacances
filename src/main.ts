function factorielle(nombre: number): number {
  let res = 1;
  for(let i=1 ; i <= nombre ; i++)
  {
    res *= i;
  }
  return res;
}

function palindrome(chaine:string)
{
  if(chaine.length > 2)
  {
    let ok = true;
    for(let i=0 ; i < chaine.length ; i++)
    {
      if(chaine[i] != (chaine[chaine.length - 1 - i]) )
      {
        ok = false;
      }
    }
    return ok;
  }
}

function nombreAleatoire(max:number) {
  return Math.floor(Math.random() * max);
}

function plusOuMoins(nombreATrouver:number, maxEssais:number) {
  let nbCoups = 0;

  while (nbCoups < maxEssais) {
    let nombreEssai = nombreAleatoire(10);

    if (nombreEssai === nombreATrouver) {
      console.log("Trouvé en " + (nbCoups + 1) + " coups ! ! !");
      return;
    } else if (nombreEssai > nombreATrouver) {
      console.log("Moins");
    } else {
      console.log("Plus");
    }

    nbCoups++;
  }

  console.log("Nombre non trouvé en " + maxEssais + " coups . . . ");
}



//console.log(factorielle(100));
//console.log(palindrome("kayak"));
//console.log(palindrome("maison"));
plusOuMoins(8 , 20000);