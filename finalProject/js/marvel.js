class Marvel{
    constructor(){
        console.log('iniciou a marvel')
    }

    getHeroes (){
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1625539735&apikey=9c398dfdcff024d6c2a216a1628df14c&hash=ff3fd2c6810e198878b5c86ad5c1718e&limit=100').then((response) => {
        return response.json();
            }).then((jsonParsed) => {
                const hero = document.querySelector('#hero')
                jsonParsed.data.results.forEach(element=>{
                    const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
                    const nameHero = element.name
                    const descriptionHero = element.description 
                    this.createHero(srcImage, nameHero, descriptionHero, hero);
            })
        })
    }

    createHero(srcImage, nameHero, descriptionHero, divToAppend){
        const divMain = document.createElement('div');
        const divSecond = document.createElement('div');
        const textName = document.createElement('text');
        const textDescr = document.createElement('text')
        const img = document.createElement('img')
    
        textName.textContent = nameHero
        textDescr.textContect = descriptionHero
        img.src = srcImage
    
        divSecond.appendChild(img)
        divSecond.appendChild(textName)
        divSecond.appendChild(textDescr)
        divMain.appendChild(divSecond)
        divToAppend.appendChild(divMain)
    
        divMain.classList.add('character');
    }
}

export default new Marvel()