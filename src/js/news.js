
let postHTML = document.getElementById('postsList')
let WPapiURL =
  "https://serwer1856486.home.pl/autoinstalator/wordpress2/index.php/wp-json/wp/v2/posts";
fetch(WPapiURL)
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      writePost(element)
    });
  })
  .catch(err => console.log(err));

function writePost(body) {
  let imageURL = body.better_featured_image.source_url
  postHTML.innerHTML += `<a href="post.html?id=${body.id}">${body.title.rendered}</a></br><img src="${imageURL}" alt="image-${body.id}"></br>`}