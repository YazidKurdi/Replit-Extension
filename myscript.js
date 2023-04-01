chrome.runtime.sendMessage({ message: "fetch_data" }, function(response) {
  const fileContent = atob(response.data.content);
  const jsonFile = JSON.parse(fileContent).reverse()
  // do something with the file content
  for (const item of jsonFile) {
    // Create an article element
    const article = document.createElement('article');
    article.classList.add("episode")

    // Set the innerHTML of the article to the HTML template string
    article.innerHTML = `
      <div class="bounty__content">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div style="
      height: 20px";>
      <p>Price: ${item.price}</p>
      <p>Due Days: ${item.due_days}</p>
      </div>
      <div>
      <p>Author: ${item.author}</p>
      <p>Posted Time: ${item.posted_time}</p>
      </div>
      <a href="${item.link}">More Information</a>
      </div>
    `;

    // Append the article to the page
    document.body.appendChild(article);
  }
});