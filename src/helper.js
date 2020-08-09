export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

//Add % according to origin
export function brandCalculator(brand) {
    let add;

    switch(brand) {
        case 'european':
            add= 1.30;
            break;
        case 'american':
            add= 1.15;
            break;
        case 'asian':
            add= 1.05;
            break;
        default:
            break;
    }
    return add;
}

// Add % according to plan

export function planCalculator(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

// Show 1st letter uppercase
export function firstUpper(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}