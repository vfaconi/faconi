
const url = "https://swapi.dev/api/people/" 


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){

    console.log(jsonObject);
    const results = jsonObject['results'];
    for(i=0; i < results.length; i++){
        const section = document.createElement('section');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        

        p1.textContent = 'Name: ' + results[i].name;    
        p2.textContent = 'Height: ' + results[i].height; 
        p3.textContent = 'Birth Year: ' + results[i].birth_year; 

        
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);

        document.querySelector('div.starWars').appendChild(section);
 
    }
})






