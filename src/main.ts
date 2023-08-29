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

//console.log(factorielle(100));
console.log(palindrome("kayak"));
console.log(palindrome("maison"));