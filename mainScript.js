var IndexPageNo = 1;
var jsonData;
var BASE_PATH = (typeof window.BASE_PATH !== 'undefined' && window.BASE_PATH) ? window.BASE_PATH : '';
function applyBasePath(url) {
  if (!BASE_PATH) return url;
  if (url.indexOf('/') === 0) return BASE_PATH + url;
  if (url.indexOf('https://www.top2tenasia.xyz') === 0) return BASE_PATH + url.replace('https://www.top2tenasia.xyz', '');
  if (url.indexOf('http://www.top2tenasia.xyz') === 0) return BASE_PATH + url.replace('http://www.top2tenasia.xyz', '');
  return url;
}

/** Strip base path, trailing slash, .php — for comparing current page to article links */
function normalizePathKey(path) {
  if (!path) return '/';
  var p = path;
  if (BASE_PATH && p.indexOf(BASE_PATH) === 0) {
    p = p.substring(BASE_PATH.length) || '/';
  }
  p = p.replace(/\/$/, '').replace(/\.php$/i, '').toLowerCase();
  if (p === '') p = '/';
  return p;
}

/** True if this article link is the page the user is currently viewing */
function isSamePageAsCurrent(articleLink) {
  var cur = normalizePathKey(window.location.pathname);
  var raw = articleLink || '';
  if (raw.indexOf('http') === 0) {
    try {
      raw = new URL(raw).pathname;
    } catch (e) {
      return false;
    }
  }
  var key = normalizePathKey(raw);
  return cur === key;
}

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
      if (json[page] && json[page].articles && json[page].articles.length > 0) {
        let element = document.getElementById("main");
        if (!element) return;
        element.innerHTML = "";
        for (
          let noOfArticles = 0;
          noOfArticles < json[page].articles.length;
          noOfArticles++
        ) {
          if (isSamePageAsCurrent(json[page].articles[noOfArticles].link)) {
            continue;
          }
          var link = applyBasePath(json[page].articles[noOfArticles].link);
          var postImg = applyBasePath(json[page].articles[noOfArticles].postImage);
          element.innerHTML +=
            '<article class="post">' +
            "<header>" +
            '<div class="title">' +
            '<h2><a href="' +
            link +
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
            link +
            '" class="image featured"><img src="' +
            postImg +
            '" alt="" /></a>' +
            "<footer>" +
            '<ul class="actions">' +
            '<li><a href="' +
            link +
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
      if (json[1] && json[1].articles && json[1].articles.length > 0) {
        let trendingElement = document.querySelector(".mini-posts");
        if (!trendingElement) return;
        for (
          let noOfTArticles = 0;
          noOfTArticles < json[1].articles.length;
          noOfTArticles++
        ) {
          if (isSamePageAsCurrent(json[1].articles[noOfTArticles].link)) {
            continue;
          }
          var tLink = applyBasePath(json[1].articles[noOfTArticles].link);
          var tImg = applyBasePath(json[1].articles[noOfTArticles].postImage);
          trendingElement.innerHTML +=
            '<article class="mini-post">' +
            "<header>" +
            '<h3><a href="' +
            tLink +
            '">' +
            json[1].articles[noOfTArticles].title +
            "</a></h3>" +
            '<time class="published" datetime="2015-10-20">' +
            json[1].articles[noOfTArticles].date +
            "</time>" +
            '<a href="#" class="author"><img src="article/images/avatar.jpg" alt="" /></a>' +
            "</header>" +
            '<a href="' +
            tLink +
            '" class="image"><img src="' +
            tImg +
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
      if (json[1] && json[1].articles && json[1].articles.length > 0) {
        let topElement = document.querySelector(".posts");
        if (!topElement) return;
        for (
          let noOfTArticles = 0;
          noOfTArticles < json[1].articles.length;
          noOfTArticles++
        ) {
          if (isSamePageAsCurrent(json[1].articles[noOfTArticles].link)) {
            continue;
          }
          var pLink = applyBasePath(json[1].articles[noOfTArticles].link);
          var pImg = applyBasePath(json[1].articles[noOfTArticles].postImage);
          topElement.innerHTML +=
            "<li>" +
            "<article>" +
            "<header>" +
            '<h3><a href="' +
            pLink +
            '">' +
            json[1].articles[noOfTArticles].title +
            "</a></h3>" +
            '<time class="published" datetime="2015-10-20">' +
            json[1].articles[noOfTArticles].date +
            "</time>" +
            "</header>" +
            '<a href="' +
            pLink +
            '" class="image"><img src="' +
            pImg +
            '" alt="" /></a>' +
            "</article>" +
            "</li>";
        }
      }
    });
}
