const URL = "https://v2.jokeapi.dev/joke/Any";

//listen to front messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(`
    req : ${JSON.stringify(request)},
    sender : ${JSON.stringify(sender)}}
  `);
  if (request.message === "get_data" && request.source === "popup") {
    console.log("getting data !!");
    get_rand_joke(URL).then((joke) => {
      console.log("logged :", joke);
      //sendResponse({ source: "background", joke: joke });
      chrome.runtime.sendMessage(
        { source: "background", joke: joke },
        (resp) => {
          console.log("sent joke ! ", resp);
        }
      );
    });
  }
});

async function get_rand_joke(url) {
  var response = await fetch(url);
  return response.json();
}
