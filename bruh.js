function calculateYearsElapsed(since) {
    return new Date(new Date().getTime() - since.getTime()).getFullYear() - 1970;
}

const aliveForYears = calculateYearsElapsed(new Date('August, 2003'));
const programmingForYears = calculateYearsElapsed(new Date('August, 2016'));

console.log(aliveForYears, programmingForYears);
