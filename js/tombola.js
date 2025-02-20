const tombola = []

const riempimentoTombola = ()=>{
for (let i = 1; i<=90; i++ ){
    tombola.push(i)
}

}
riempimentoTombola()
console.log(tombola)

const createTombolaCells = function () {
    const table = document.getElementById("tabella-tombola")
 for(let row = 0; row < 9; row++){
    // creare un'elemnto che faccia riferimento alla riga appena creata
    const newTR = document.createElement('tr')
    // cambiare la i in modo che parta dall'index correto
    for(let i = 0; i < 10; i++){
    //  dentro al riferimento della riga creare una cella con il numero corrispondete.#
        const index = row*10 + i
        const newCell = document.createElement("td")
        const numberSpan = document.createElement('span')
        numberSpan.id = tombola[index]
        numberSpan.innerText = tombola[index]
        newCell.appendChild(numberSpan)
        newTR.appendChild(newCell)
    }
    // inserire la TR dentro la tabella
    table.appendChild(newTR)
 }
}
createTombolaCells()

const randomBotton = () => {
    const button = document.getElementById("button-random-number")
    const number = Math.floor(Math.random() * tombola.length);
    console.log(number, tombola.length, tombola[number])
    const span = document.getElementById(tombola[number].toString())
    span.classList.add("remuve")
    const mySpan = document.getElementById("mynumbers_" + tombola[number].toString())
    if(mySpan){
        mySpan.classList.add("remuve")
    }
    tombola.splice(number, 1)
}
const comprami = () =>{
    const myNumbers = []  
    for (let i = 1; i<=20; i++ ){
        let randomNumber = Math.floor(Math.random() * tombola.length)
        while (myNumbers.includes(randomNumber)){
            randomNumber = Math.floor(Math.random() * tombola.length)
        }
        myNumbers.push(randomNumber)
    }
    const table = document.getElementById("cartella")
    for(let row = 0; row < 4; row++){
       // creare un'elemnto che faccia riferimento alla riga appena creata
       const newTR = document.createElement('tr')
       // cambiare la i in modo che parta dall'index correto
       for(let i = 0; i < 5; i++){
       //  dentro al riferimento della riga creare una cella con il numero corrispondete.#
           const index = row*5 + i
           const newCell = document.createElement("td")
           const numberSpan = document.createElement('span')
           numberSpan.id = "mynumbers_" + myNumbers[index]
           numberSpan.innerText = myNumbers[index]
           newCell.appendChild(numberSpan)
           newTR.appendChild(newCell)
       }
       // inserire la TR dentro la tabella
       table.appendChild(newTR)
    }
}