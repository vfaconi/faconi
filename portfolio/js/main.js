//portfolio array
const links = [
    {
        label: "Week 1: notes",
        url: "https://vfaconi.github.io/faconi/week1/index.html"
    },
    {
        label: "Week 2: notes",
        url: "https://vfaconi.github.io/faconi/week2/notes.html"
    },
    {
        label: "Week 3: notes / question",
        url: "https://vfaconi.github.io/faconi/week3/index.html"
    },
    {
        label: "Week 4: notes / code",
        url: "https://vfaconi.github.io/faconi/week4/index.html"
    },
    {
        label: "Week 5: notes",
        url: "https://vfaconi.github.io/faconi/week5/notes.html"
    },
      {
        label: "Week 6: To Do Challenge",
        url: "https://vfaconi.github.io/faconi/week6/index.html"
    },
    {
        label: "Week 7: Notes",
        url: "https://vfaconi.github.io/faconi/week7/notes.html"
    },
    {
        label: "Week 8: Notes",
        url: "https://vfaconi.github.io/faconi/week8/notes.html"
    },
    {
        label: "Week 9: Notes",
        url: "https://vfaconi.github.io/faconi/week9/notes.html"
    },
    {
        label: "Week 10: Notes",
        url: "https://vfaconi.github.io/faconi/week10/notes.html"
    }
    {
        label: "Final Project",
        url: "https://vfaconi.github.io/faconi/finalProject/index.html"
    }
];
   
    
const ol = document.getElementById('list'); 
links.forEach(function(link){
   

        //create element
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
        //document.querySelector('div.list').appendChild(ul);
   
});





 




