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
    tombola.splice(number, 1)
}
