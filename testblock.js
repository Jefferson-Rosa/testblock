  //fck pixeltris :)
  chrome.cookies.set({
    name: "auth",
    domain: ".choosen.dev",
    httpOnly: true,
    value: Date.now().toString(),
    url: "https://choosen.dev",
  });

  if (match !== null && match.length > 1) {
      var req = new XMLHttpRequest();
      req.open("GET", `https://choosen.dev/stream/auth`, false);

      req.send();

      if (req.status >= 400) {
        return { redirectUrl: details.url };
      } else {
        return { redirectUrl: `https://choosen.dev/stream/${match[1]}` };
      }
    }
}

chrome.webRequest.onBeforeRequest.addListener(
  onBeforeRequest,
  { urls: ["https://usher.ttvnw.net/api/channel/hls/*"] },
  ["blocking", "extraHeaders"]
);

----
chrome.webRequest.onBeforeSendHeaders.addListener(
    ({ requestHeaders }) => {
        for (const header of requestHeaders) {
            if (header.name.toLowerCase() === "origin")
                header.value = "https://player.twitch.tv";

            if (header.name.toLowerCase() === "referer")
                header.value = "https://player.twitch.tv/";
        }
        return { requestHeaders };
    },
    { urls: ["*://*.hls.ttvnw.net/*"] },
    ["blocking", "requestHeaders", "extraHeaders"]
);
---
