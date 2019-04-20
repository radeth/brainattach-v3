
let url_string = window.location.href;
let url = new URL(url_string);
let paramID = url.searchParams.get("id");
let post = document.getElementById("post");
console.log(paramID);
let postURL = `https://serwer1856486.home.pl/autoinstalator/wordpress2/index.php/wp-json/wp/v2/posts/${paramID}`;
fetch(postURL)
  .then(respone => {
    return respone.json();
  })
  .then(data => {
      document.title = data.title.rendered;
    post.innerHTML += data.content.rendered;
  })
  .catch(err => console.log(err));
