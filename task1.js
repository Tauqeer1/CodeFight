function centuryFromYear(year) {
    return (year >= 1 && year <= 2005) ? year % 100 == 0 ? year / 100 : parseInt((year / 100) + 1) : 'year not in range !';
}
console.log(centuryFromYear(1900));

// 100 years = 1 century;
//  1 year = 1/100 century;
//1 ≤ year ≤ 2005 constraints