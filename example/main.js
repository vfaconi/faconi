function getHeroes (){
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1625539735&apikey=9c398dfdcff024d6c2a216a1628df14c&hash=ff3fd2c6810e198878b5c86ad5c1718e&limit=100').then((response) => {
    return response.json();
        }).then((jsonParsed) => {
            const hero = document.querySelector('#hero')
            jsonParsed.data.results.forEach(element=>{
                const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
                const nameHero = element.name
                const linkHero = element.urls[0] 
             createHero(srcImage, nameHero, linkHero, hero);
        })
        

    })

    /*fetch('https://gateway.marvel.com/v1/public/creators?ts=1625539735&apikey=9c398dfdcff024d6c2a216a1628df14c&hash=ff3fd2c6810e198878b5c86ad5c1718e&limit=100').then((response) => {
        return response.json();
            }).then((jsonParsed) => {
                const hero = document.querySelector('#hero')
                jsonParsed.data.results.forEach(element=>{
                    const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
                    const linkHero = element.urls[0] + "target='/blank'"
                    const nameHero = element.title
                    const descriptionHero = element.description 
                 createHero(srcImage, nameHero, descriptionHero, linkHero, hero);
            })
        })*/



function createHero(srcImage, nameHero, linkHero, divToAppend){
    const divMain = document.createElement('div');
    const divSecond = document.createElement('div');
    const textName = document.createElement('text');
    const img = document.createElement('img')
    const a = document.createElement('a')

    textName.textContent = nameHero
    img.src = srcImage
    a.setAttribute('href', linkHero)
 
  
    a.appendChild(img)
    divSecond.appendChild(a)
    divSecond.appendChild(textName)
    //divSecond.appendChild(textDescr)
    divMain.appendChild(divSecond)
    divToAppend.appendChild(divMain)

  
    
   

    divMain.classList.add('character');
}
}

getHeroes()


