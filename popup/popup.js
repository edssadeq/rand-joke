console.log("Hiiiii popup");
let joke_setup_paragraph = document.querySelector("#setup");
let joke_ddelivery_paragraph = document.querySelector("#delivery");

joke_setup_paragraph.textContent = "What do you call a pile of kittens?";
joke_ddelivery_paragraph.textContent = "A meowntain.";
chrome.runtime.sendMessage({
  message: "get_data",
  source: "popup",
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  joke_setup_paragraph.textContent = request.joke.setup;
  joke_ddelivery_paragraph.textContent = request.joke.delivery;
  console.log(request);
});
