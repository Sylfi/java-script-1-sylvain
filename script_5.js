const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


// Les livres ont-ils été empruntés ? 
function ispositive(element) {return element > 0;
}
  array = []
  for (let book in books) {
    array.push(books[book].rented)}
    console.log(array)
if (array.every(ispositive))
    console.log("Tous les livres ont été empruntés aux moins une fois :)")
    else
    console.log("Tous les livres n'ont pas été empruntés au moins une fois :(")

    repeatNum = 30
    console.log("- ".repeat(repeatNum));

// Trouver le livre le plus emprunté
console.log("-".repeat(repeatNum))
console.log("2. Quel est livre le plus emprunté ?")


  
  let n = 0

for (let index in books) {

  if (books[index].rented > n) {
    n = books[index].rented
    u = books[index].title
  }
}

console.log(u)
console.log("-".repeat(repeatNum))
// trouver le livre avec l'ID 873495

for (let index in books) {
    if (books[index].id == 873495){
        u= books[index].title}
    }

console.log("Le livre N. 873495 a pour titre : ")
 console.log(u)

 console.log("-".repeat(repeatNum))

 //Supprimer le livre avec l'ID: 133712

 for (let index in books) {

    if (books[index].id ==  133712) {
        delete books[index]}
    }
    console.log("comme on peut le voir, Gatsby le magnifique (#133712) a été supprimé de la base de données : ")
    console.log(books)

    console.log("-".repeat(repeatNum))
    
    //


