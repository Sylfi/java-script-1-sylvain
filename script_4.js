const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

 let seventies = entrepreneurs.filter(function(lad){
  return lad.year >1970 && lad.year<1980;
});



//Liste des gens nés dans les 70s
console.log("La liste des gens nés dans les 70s :")
console.log(seventies)

//Liste des noms et prénoms
console.log("voici la liste des gens : ")
entrepreneurs.forEach(people => {
    console.log(people.first + " "+ people.last)
});
console.log("et tout ça dans un joli array :) : ")
array =[]
for (let people in entrepreneurs) {
  array.push(entrepreneurs[people].first + " " + entrepreneurs[people].last)
  }
  console.log(array)

  //Age des entrepreneurs aujourd'hui
  entrepreneurs.forEach(people => {
      console.log("Cette année " + people.first + " " + people.last +
                " a ou aurait eu" + (2019 - people.year) + " ans")})

// Liste par ordre alphabétique
// Mais comment le faire sans mettre le nom en premier ? 
array = [ ]
for (let people in entrepreneurs) {
    array.push(entrepreneurs[people].last + " " + entrepreneurs[people].first)
}
console.log("Et voici la liste de nos gentils petits enfoirés par ordre alphabétique : ")
console.log(array.sort(x))







