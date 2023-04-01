# Replit Bounty Chrome Extension

The extension consists of two files: background.js and myscript.js.

background.js contains an event listener that waits for a message from the content script. When it receives a message with the string "fetch_data", it fetches the contents of a JSON file stored in a GitHub repository using the fetch API. The fetched data is then sent as a response to the content script using the sendResponse function.

myscript.js sends a message to background.js with the string "fetch_data" using the chrome.runtime.sendMessage function. When a response is received, it decodes the content of the JSON file using atob and parses it into an array of objects using JSON.parse. It then iterates through the array and creates an HTML article element for each bounty using the information from the objects in the array. Finally, the article elements are appended to the document body.

![image](https://user-images.githubusercontent.com/50083367/229299658-c1f70195-2db6-4a35-8034-8eabe70c6621.png)
