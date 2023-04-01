chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "fetch_data") {
      fetch(`https://api.github.com/repos/YazidKurdi/Replit-bounty-scraper/contents/bounties.json`, {})
        .then(response => response.json())
        .then(data => {
          sendResponse({data: data});
        });
      return true;
    }
  });