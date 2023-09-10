let data = [{
        "name": "John Smith",
        "location": "New York, NY"
    },
    {
        "name": "Jane Doe",
        "location": "Los Angeles, CA"
    },
    {
        "name": "Bob Johnson",
        "location": "Chicago, IL"
    },
    {
        "name": "Emily Davis",
        "location": "Houston, TX"
    },
    {
        "name": "Michael Brown",
        "location": "Phoenix, AZ"
    },
    {
        "name": "Sarah Miller",
        "location": "Philadelphia, PA"
    },
    {
        "name": "David Garcia",
        "location": "San Antonio, TX"
    },
    {
        "name": "Jessica Rodriguez",
        "location": "San Diego, CA"
    },
    {
        "name": "Mark Wilson",
        "location": "Dallas, TX"
    },
    {
        "name": "Elizabeth Martinez",
        "location": "San Jose, CA"
    },
    {
        "name": "Joshua Hernandez",
        "location": "Austin, TX"
    },
    {
        "name": "Karen Moore",
        "location": "Jacksonville, FL"
    },
    {
        "name": "Brian Jackson",
        "location": "Fort Worth, TX"
    },
    {
        "name": "Heather Anderson",
        "location": "Columbus, OH"
    },
    {
        "name": "Teresa Thomas",
        "location": "Charlotte, NC"
    },
    {
        "name": "Dennis Mitchell",
        "location": "Indianapolis, IN"
    },
    {
        "name": "Cynthia Lee",
        "location": "Seattle, WA"
    },
    {
        "name": "Adam Hall",
        "location": "Denver, CO"
    },
    {
        "name": "Nancy Allen",
        "location": "El Paso, TX"
    },
    {
        "name": "Lisa King",
        "location": "Washington, DC"
    },
    {
        "name": "William Wright",
        "location": "Boston, MA"
    },
    {
        "name": "Mary Scott",
        "location": "Nashville, TN"
    },
    {
        "name": "Kathryn Green",
        "location": "Portland, OR"
    },
    {
        "name": "Gerald Baker",
        "location": "Vancouver, BC"
    },
    {
        "name": "Eric Cooper",
        "location": "Sacramento, CA"
    },
    {
        "name": "Stephanie Gomez",
        "location": "Oklahoma City, OK"
    },
    {
        "name": "Edward Kelly",
        "location": "Tulsa, OK"
    },
    {
        "name": "Ashley Sanders",
        "location": "Winnipeg, MB"
    }
]
let mcard = document.getElementById("m-container");
const button = document.querySelector(".button")
let i = 0;
let subArray=null;

function handledata() {
    console.log("tarun")
    
    subArray = data.slice(i, i + 3)
    i = i + 3;
    
     mcard.innerHTML = '';

     if ( !subArray.length){
         let noPerson = document.createElement("h1");
         noPerson.textContent = "No more people!"
         mcard.appendChild(noPerson)
         return;
        }
    subArray?.map(userData => {
        let scard = document.createElement("div");
        scard.classList.add("person-card");

        let lcard = document.createElement("div");
        lcard.classList.add("left-card");


        let noEl = document.createElement("h1");
        let name = userData.name;
        let location = userData.location;


        noEl.textContent = data.indexOf(userData)+1;
        lcard.appendChild(noEl);

        let rcard = document.createElement("div");
        rcard.classList.add("right-card");
        let nameEl = document.createElement("h3");
        nameEl.classList.add("name");
        nameEl.textContent = name;
        rcard.appendChild(nameEl);

        let locationEl = document.createElement("h3");
        locationEl.classList.add("location");
        locationEl.textContent = location;
        rcard.appendChild(locationEl);
        scard.appendChild(lcard);
        scard.appendChild(rcard);

        mcard.appendChild(scard);
        

    })

}

button.addEventListener("click",handledata)
