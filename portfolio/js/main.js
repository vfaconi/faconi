//portfolio array
const links = [
    {
        label: "Week 1 notes",
        url: "https://vfaconi.github.io/faconi/week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "https://vfaconi.github.io/faconi/week2/notes.html"
    }
   
]
    
links.forEach(function(link){
    //console.log(link)

        //create element
        let ol = document.createElement('ol');
        let li = document.createElement('li');
        let a = document.createElement('a');
       
        
        //set the content for each element
        li.textContent = link.label;
        a.setAttribute("href", link.url);
        a.setAttribute("target", "_blank");
        
       
        //put <li> with <a>     
        a.appendChild(li);
        //put <a> with <lo>
        ol.appendChild(a);
       
        //display html
        document.querySelector('div.list').appendChild(ol);
   
})


