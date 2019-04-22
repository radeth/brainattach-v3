import "./../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "reset-css";
import "./../css/style.scss";
import "./preloader.js";
import preloader from "./preloader.js";
let postHTML = document.getElementById("postsList");
let WPapiURL =
  "https://serwer1856486.home.pl/autoinstalator/wordpress2/index.php/wp-json/wp/v2/posts";

fetch(WPapiURL)
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      writePost(element);
      setTimeout(() => {
        preloader();
      }, 1000);
    });
  })
  .catch(err => {
    console.log(err);
    preloader();
  });

function writePost(body) {
  let imageURL = body.better_featured_image.source_url;
  postHTML.innerHTML += `<div class="col-12 col-md-6"><h2 class="mt-2">${
    body.title.rendered
  }</h2><a class="myButton mt-2" href="post.html?id=${
    body.id
  }">read</a><img class="mt-2" src="${imageURL}" alt="image-${
    body.id
  }"></br></br></div>`;
}
