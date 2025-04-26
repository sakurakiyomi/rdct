if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
  var lastPage = localStorage.getItem("lastPageVisited");
  if (lastPage) {
    window.location.href = lastPage;
  } else {
    window.location.href = "https://tes-pg.blogspot.com/p/hola.html";
  }
} else {
  if (window.location.pathname.startsWith("/p/")) {
    localStorage.setItem("lastPageVisited", window.location.pathname);
  }
}
