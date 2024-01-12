// ----------------- JAVASCRIPT ------------------------
/* Here is the main Script Code for Impliment the APP */

// Creating Date Variable for Final Day 
const endDate = "14 January 2024 10:00 PM"; 

// select all The Input ELement usign Query Selector
document.getElementById('end-date').innerHTML = endDate;
const input = document.querySelectorAll("input");


// Creating a clock function which show the Days Hour Minuts and Second 
const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff < 0)return ;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor((diff/3600)%24);
    input[2].value = Math.floor((diff/60)%60);
    input[3].value = Math.floor(diff)%60;

}

clock();
// Use this for the CoutDown To be Shown
setInterval(
    () => {
        clock()
    },
    1000
)