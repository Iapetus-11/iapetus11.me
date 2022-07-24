/**
 * @param {String?} repo the GitHub repository to get the README from, ex: Iapetus-11/Villager-Bot
 * @param {String?} branch the GitHub repository branch to use, defaults to main
 * @returns {Promise<String>} the contents of the README.md file
 */
export default function getRepoReadMe(repo, branch) {
  branch = branch || "main";

  if (!repo) {
    return new Promise((resolve, reject) => {
      resolve("");
    });
  }

  return new Promise((resolve, reject) => {
    fetch(`https://raw.githubusercontent.com/${repo}/${branch}/README.md`)
      .then((res) => {
        res.text().then(resolve).catch(reject);
      })
      .catch(reject);
  });
}
