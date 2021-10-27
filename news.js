// const newsCont = document.getElementById("newsContainer");
document.getElementById("spinner").innerHTML = `<div class="spinner-border text-success"></div>`

fetch(
  "https://newsapi.org/v2/everything?q=climate&apiKey=af6ea2fbc2e0458bb5c21426bf030ce2"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let content = ``;
    const json = data.articles;
    json.forEach(news => {
        content += `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">
                            <img src="${news.urlToImage}" class="img-fluid">
                        </div>
                        <div class="col-sm">
                            <h4 class="card-title">${news.title}</h4>
                            <a class="btn btn-success" href="${news.url}" target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    document.getElementById("newsContainer").innerHTML = content
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("newsContainer").innerHTML = `<h2 class="text-center">Oops! There was an error loading content</h2>`
  });
