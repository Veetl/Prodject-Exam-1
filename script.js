const url = "https://skadbergworks.com:9001/wp-json/wp/v2/posts";
const resultsContainer = document.querySelector(".blogs")
let username = 'wpadmin';
let password = '3Ce3 uis7 I6YF fA4E VDh4 uY6B';

let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
//headers.set("Access-Control-Allow-Origin", "*");

async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    headers: headers, 
    });

    const object = await response.json();

    const info = object;
    info.sort((a,b) => a.name > b.name);

    try {
    
        for(let i = 0; i < info.length; i++) {
            if (i === 10) {
                break;
            }
            console.log(info[i])
            resultsContainer.innerHTML += `${info[i].content.rendered}`
           }
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}};

getInfo();

 


