let users = [{ nom: "Boukharouba", prenom: "Amine", age: 22, hasPermis: true, ville: "Alger", profession: "Développeur", approved: false, date_naissance: new Date('2001-07-15'), hobbies: ["football", "lecture", "cinéma"] },
{ nom: "Zerouali", prenom: "Leila", age: 17, hasPermis: false, ville: "Casablanca", profession: "Étudiante", approved: false, date_naissance: new Date('2006-04-21'), hobbies: ["dessin", "photographie"] },
{ nom: "Djebbour", prenom: "Khaled", age: 34, hasPermis: true, ville: "Oran", profession: "Ingénieur", approved: false, date_naissance: new Date('1989-11-11'), hobbies: ["jogging", "pêche", "lecture"] },
{ nom: "Haddad", prenom: "Omar", age: 45, hasPermis: true, ville: "Tunis", profession: "Médecin", approved: false, date_naissance: new Date('1978-05-05'), hobbies: ["lecture", "musique classique"] },]
let message = 'Salim'
const myarray = message.split('')
const mes = myarray.filter ((lettre) =>  !['a', 'e', 'i', 'o', 'u', 'y'].includes(lettre)  )
const myarra = mes.join('')
console.log(myarra)