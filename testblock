
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
  ["
