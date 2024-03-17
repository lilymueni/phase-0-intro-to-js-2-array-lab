const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
    cats.unshift("Bob")

}

function destructivelyRemoveFirstCat(){
    cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
    cats.shift("Garfield")
}
function destructivelyRemoveLastCat(){
  cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
  cats.pop("Garfield")
}

function appendCat(){
  const newCats=cats.slice();
  newCats.push("Broom")
  return newCats
}

function prependCat(){
 const newCats=cats.slice()
 newCats.unshift("Arnold")
 return newCats
   
}
function removeLastCat(){
  const newCats=cats.slice();
  newCats.pop("Garfield")
  return newCats
}
function removeFirstCat(){
    const newCats=cats.slice();
    newCats.shift("Milo")
    return newCats
}
function appendCat(){
    const newCats=cats.slice();
    newCats.push("Broom")
    return newCats
}

function prependCat(){
   const newCats=cats.slice()
   newCats.unshift("Arnold")
   return newCats
     
}
function removeLastCat(){
    const newCats=cats.slice();
    newCats.pop("Garfield")
    return newCats
}
function removeFirstCat(){
    const newCats=cats.slice();
    newCats.shift("Milo")
    return newCats
}