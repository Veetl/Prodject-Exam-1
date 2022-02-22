const url = "https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts";
const resultsContainer = document.querySelector(".links");



async function getLinks() {

    const response =  await fetch(url, {method:'GET', 
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
            resultsContainer.innerHTML += `<a href="${info[i].link}"><p>A</p></a>`
           }
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}};

getLinks();

