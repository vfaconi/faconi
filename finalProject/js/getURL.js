//const timestamp = "1625539735"
//const apikey = "9c398dfdcff024d6c2a216a1628df14c"
//const md5 = "af1c0dd46dc8ceeef47b4f502f680e6d"

//public key: 9c398dfdcff024d6c2a216a1628df14c
//private key: 8ebc628c75079dc417c8998f99bd496256f1c494

fetch('https://gateway.marvel.com/v1/public/characters?ts=1625539735&apikey=9c398dfdcff024d6c2a216a1628df14c&hash=ff3fd2c6810e198878b5c86ad5c1718e').then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const hero = document.querySelector('#hero')
    jsonParsed.data.results.forEach(element=>{
        const srcImage = element.thumbnail.path + ' ' + element.thumbnail.extension
        const nameHero = element.name
        createHero(srcImage, nameHero, hero);
})
    console.log(jsonParsed);
})

function createHero(srcImage, nameHero, divToAppend){
    const divMain = document.createElement('div');
    const divSecond = document.createElement('div');
    const textName = document.createElement('text');
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divSecond.appendChild(img)
    divSecond.appendChild(textName)
    divMain.appendChild(divSecond)
    divToAppend.appendChild(divMain)

    divMain.classList.add('character');
}
    


//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
