const xhr = new XMLHttpRequest();
const url = './health_article.json';

xhr.open("get", url, true);
xhr.responseType = "json";

console.log(xhr.response);

xhr.onload = function() {
    const articles = xhr.response.articles;
    const articlesDiv = document.getElementById("articles");

    articles.forEach(element => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const title = document.createElement("h2");
        title.textContent = element.title

        const description = document.createElement("p");
        description.textContent = element.description;

        const waysHeader = document.createElement("h3");
        waysHeader.textContent = "Ways to achieve";

        const waysList = document.createElement("ul");
        element.ways_to_achieve.forEach(way => {
            const listItem = document.createElement("li");
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        const benefitsHeader = document.createElement("h3");
        benefitsHeader.textContent = "Benefits";

        const benefitsLists = document.createElement("ol");
        element.benefits.forEach(benefit => {
            const listItem = document.createElement("li");
            listItem.textContent = benefit;
            benefitsLists.appendChild(listItem);
        })

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsLists);

        articlesDiv.appendChild(articleDiv);

    });
}

xhr.send();