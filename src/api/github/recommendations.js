/**
 *
 * @param {String} text
 * @returns {Array.<{name: String, username: String, url: String, content: String}>}
 */
function parseRecommendations(text) {
  const out = [];

  text.split("\n").forEach((line) => {
    if (line.startsWith("- ")) {
      let friend = {
        name: line.match(/\[(.*?)\]/g)[0].slice(1, -1),
        url: line.match(/\((.*?)\)/g)[0].slice(1, -1),
        content: line.split(" - ")[1],
      };

      friend.username = friend.name;

      if (friend.url.startsWith("https://github.com/")) {
        friend.username = friend.url.replace("https://github.com/", "");
      }

      out.push(friend);
    }
  });

  return out;
}

export function getRecommendations() {
  return new Promise((resolve, reject) => {
    fetch("https://raw.githubusercontent.com/Iapetus-11/recommendations/main/README.md")
      .then((res) => {
        res
          .text()
          .then((text) => resolve(parseRecommendations(text)))
          .catch((e) => reject(e));
      })
      .catch((e) => reject(e));
  });
}
