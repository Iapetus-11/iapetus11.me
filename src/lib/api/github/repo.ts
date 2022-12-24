/**
 * @param {string} repo the GitHub repository to get the README from, ex: Iapetus-11/Villager-Bot
 * @param {string?} branch the GitHub repository branch to use, defaults to main
 * @returns {Promise<string>} the contents of the README.md file
 */
export function getRepoReadMe(repo: string, branch?: string): Promise<string> {
    branch = branch || 'main';

    return new Promise((resolve, reject) => {
        fetch(`https://raw.githubusercontent.com/${repo}/${branch}/README.md`)
            .then((res) => {
                res.text().then(resolve).catch(reject);
            })
            .catch(reject);
    });
}

interface Recommendation {
    name: string;
    username: string;
    url: string;
    content: string;
}

/**
 * @param {string} text
 * @returns {Array<Recommendation>}
 */
function parseRecommendations(text: string): Array<Recommendation> {
    const out: Array<Recommendation> = [];

    text.split('\n').forEach((line) => {
        if (line.startsWith('- ')) {
            let friend: Recommendation = {
                name: line?.match(/\[(.*?)\]/g)?.[0]?.slice(1, -1) || 'unknown',
                url: line?.match(/\((.*?)\)/g)?.[0].slice(1, -1) || 'unknown',
                content: line.split(' - ')[1],
                username: 'unknown',
            };

            friend.username = friend.name;

            if (friend.url.startsWith('https://github.com/')) {
                friend.username = friend.url.replace('https://github.com/', '');
            }

            out.push(friend);
        }
    });

    return out;
}

export async function getRecommendations(): Promise<Array<Recommendation>> {
    return parseRecommendations(await getRepoReadMe('Iapetus-11/recommendations'));
}
