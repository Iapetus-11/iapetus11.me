export type ReferralDefinition = {
    name: string;
    username: string;
    link: string;
    content: string;
};

export function parseReferrals(text: string): ReferralDefinition[] {
    return text
        .split('\n')
        .filter((line) => line.startsWith('- '))
        .map((line) => {
            const friend: ReferralDefinition = {
                name: line?.match(/\[(.*?)\]/g)?.[0]?.slice(1, -1) || 'unknown',
                link: line?.match(/\((.*?)\)/g)?.[0].slice(1, -1) || 'unknown',
                content: line.split(' - ')[1],
                username: 'unknown',
            };

            friend.username = friend.name;

            if (friend.link.startsWith('https://github.com/')) {
                friend.username = friend.link.replace('https://github.com/', '');
            }

            return friend;
        });
}

// Put these at the top because they're the best written
const REFERRAL_PRIORITY = ['jkriste', 'Kevin Thomas', 'clvrk', 'Infernum1'];

export function sortReferrals(referrals: ReferralDefinition[]): ReferralDefinition[] {
    return referrals.sort((a, b) => {
        let pA = REFERRAL_PRIORITY.indexOf(a.name);
        let pB = REFERRAL_PRIORITY.indexOf(b.name);

        pA = pA === -1 ? Infinity : pA;
        pB = pB === -1 ? Infinity : pB;

        if (pA < pB) return -1;

        if (pA > pB) return 1;

        return 0;
    });
}
