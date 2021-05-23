const hikesList = [
  {
    name: "Bechler Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description:
      "Beautiful short hike along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
  },
  {
    name: "Teton Canyon",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    difficulty: "Easy",
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
  },
  {
    name: "Denanda Falls",
    imgSrc: "falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    difficulty: "Moderate",
    description:
      "Beautiful hike through Bechler meadows river to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
  }
];

const ul = document.getElementById('hikes');

  hikesList.forEach(hikeList =>{

    let name = document.createElement('li');
    let distance = document.createElement('li');
    let difficulty = document.createElement('li');
    let description = document.createElement('li');
    let directions = document.createElement('li');
    let image = document.createElement('img');
  
    name.textContent = 'Name: ' +  hikeList.name;
    distance.textContent = 'Distance: ' + hikeList.distance;
    difficulty.textContent = 'Difficulty: ' + hikeList.difficulty;
    description.textContent = 'Description: ' + hikeList.description;
    directions.textContent = 'Directions: ' +  hikeList.directions;
    image.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/11/15/13/27/river-2951997_960_720.jpg');
    image.setAttribute('alt', hikeList.imgAlt);
  
    ul.appendChild(name);
    ul.appendChild(distance);
    ul.appendChild(difficulty);
    ul.appendChild(directions);
    ul.appendChild(image);   
  })


