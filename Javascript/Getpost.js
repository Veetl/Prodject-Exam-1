const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const resultsContainer = document.querySelector(".post")
const url = `https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts/${id}`;

async function getPost() {

    const response =  await fetch(url, {method:'GET',
    });

    const object = await response.json();

    const info = object;

    resultsContainer.innerHTML += `${info.content.rendered}`

    var img = document.querySelectorAll(".post img[class*='wp-image-']")
    var modalImg = document.getElementById("img01");
    for(let i = 0; i < img.length; i++)
        img[i].onclick = function() {
        var modal = document.getElementById("modal")
        modal.style.display = "block";
        modalImg.src = this.src;
        

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() { 
        modal.style.display = "none";
        }

}
};
getPost();


