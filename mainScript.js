var IndexPageNo = 1;
var jsonData;

//Fetch Main article code
fetch_articles();
fetch_trending_articles();
fetch_topten_articles();
function fetch_articles() {
  var page;
  page = IndexPageNo;

  fetch("./article/JSON/Article.json")
    .then((response) => response.json())
    .then((json) => {
      if (!jsonData) jsonData = json;
      if (json[page].articles.length != null) {
        let element = document.getElementById("main");
        element.innerHTML = "";
        for (
          let noOfArticles = 0;
          noOfArticles < json[page].articles.length;
          noOfArticles++
        ) {
          element.innerHTML +=
            '<article class="post">' +
            "<header>" +
            '<div class="title">' +
            '<h2><a href="' +
            json[page].articles[noOfArticles].link +
            '">' +
            json[page].articles[noOfArticles].title +
            "</a></h2>" +
            "</div>" +
            '<div class="meta">' +
            '<time class="published" datetime="2015-11-01">' +
            json[page].articles[noOfArticles].date +
            "</time>" +
            '<a href="#" class="author"><span class="name">' +
            json[page].articles[noOfArticles].author +
            '</span><img src="article/images/avatar.jpg" alt="" /></a>' +
            "</div>" +
            "</header>" +
            '<a href="' +
            json[page].articles[noOfArticles].link +
            '" class="image featured"><img src="' +
            json[page].articles[noOfArticles].postImage +
            '" alt="" /></a>' +
            "<footer>" +
            '<ul class="actions">' +
            '<li><a href="' +
            json[page].articles[noOfArticles].link +
            '" class="button large">Continue Reading</a></li>' +
            "</ul>" +
            '<ul class="stats">' +
            '<li><a href="#">' +
            json[page].articles[noOfArticles].category +
            "</a></li>" +
            "</ul>" +
            "</footer>" +
            "</article>";
          if (noOfArticles + 1 == json[page].articles.length) {
            if (IndexPageNo == 1) {
              element.innerHTML +=
                '<ul class="actions pagination">' +
                '<li><button onclick="prev_articles()" class="disabled button large previous">Previous Page</button></li>' +
                '<li><button onclick="next_articles(),topFunction()" class="button large next"><a href="#">Next Page</a></button></li>' +
                "</ul>";
            } else if (Object.keys(jsonData).length > IndexPageNo) {
              element.innerHTML +=
                '<ul class="actions pagination">' +
                '<li><button onclick="prev_articles(),topFunction()" class="button large previous">Previous Page</button></li>' +
                '<li><button onclick="next_articles(),topFunction()" class="button large next"><a href="#">Next Page</a></button></li>' +
                "</ul>";
            } else {
              element.innerHTML +=
                '<ul class="actions pagination">' +
                '<li><button onclick="prev_articles(),topFunction()" class="button large previous"><a href="#">Previous Page</a></button></li>' +
                '<li><button onclick="next_articles()" class="disabled button large next"><a href="#">Next Page</a></button></li>' +
                "</ul>";
            }
          }
        }
      }
    });
}
function prev_articles() {
  IndexPageNo--;
  fetch_articles();
}
function next_articles() {
  IndexPageNo++;
  fetch_articles();
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Trending Article code
function fetch_trending_articles() {
  fetch("./article/JSON/Trending.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json[1].articles);
      if (json[1].articles.length != null) {
        let trendingElement = document.querySelector(".mini-posts");
        for (
          let noOfTArticles = 0;
          noOfTArticles < json[1].articles.length;
          noOfTArticles++
        ) {
          trendingElement.innerHTML +=
            '<article class="mini-post">' +
            "<header>" +
            '<h3><a href="' +
            json[1].articles[noOfTArticles].link +
            '">' +
            json[1].articles[noOfTArticles].title +
            "</a></h3>" +
            '<time class="published" datetime="2015-10-20">' +
            json[1].articles[noOfTArticles].date +
            "</time>" +
            '<a href="#" class="author"><img src="article/images/avatar.jpg" alt="" /></a>' +
            "</header>" +
            '<a href="' +
            json[1].articles[noOfTArticles].link +
            '" class="image"><img src="' +
            json[1].articles[noOfTArticles].postImage +
            '" alt="" /></a>' +
            "</article>";
        }
      }
    });
}

//Top 10 lists
function fetch_topten_articles() {
  fetch("./article/JSON/Top10List.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json[1].articles);
      if (json[1].articles.length != null) {
        let topElement = document.querySelector(".posts");
        for (
          let noOfTArticles = 0;
          noOfTArticles < json[1].articles.length;
          noOfTArticles++
        ) {
          topElement.innerHTML +=
            "<li>" +
            "<article>" +
            "<header>" +
            '<h3><a href="' +
            json[1].articles[noOfTArticles].link +
            '">' +
            json[1].articles[noOfTArticles].title +
            "</a></h3>" +
            '<time class="published" datetime="2015-10-20">' +
            json[1].articles[noOfTArticles].date +
            "</time>" +
            "</header>" +
            '<a href="' +
            json[1].articles[noOfTArticles].link +
            '" class="image"><img src="' +
            json[1].articles[noOfTArticles].postImage +
            '" alt="" /></a>' +
            "</article>" +
            "</li>";
        }
      }
    });
}
