
var page = 1
const resultsContainer = document.querySelector(".blogs")

async function getInfo() {

    var url = `https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts?page=${page}`;
    page = page + 1;
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
            resultsContainer.innerHTML += `<a href="Blogs.html?id=${info[i].id}">${info[i].title.rendered}</a><br>`
           }
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}};

getInfo();

 


