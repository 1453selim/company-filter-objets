const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i])
}
console.log("1------------------------------")
/*  companies.forEach((company)=> {
  console.log(company)
})  */
companies.push({ name: "Company Ten", category: "Sports", start: 1995, end: 2000 });
console.log(companies);
console.log("filter1-------------------------")

const company = companies.filter(companies =>

  (companies.category === 'Retail'));
console.log(company)
console.log("filter2-------------------------")

const company80 = companies.filter(companies => (companies.start >= 1980 && companies.start < 1990))
console.log(company80)

console.log("filter3-------------------------")
const laterthan10YearsCompany = companies.filter(companies => ((companies.end - companies.start) > 10))
console.log(laterthan10YearsCompany)
console.log("map1-------------------------")
const companyNames = companies.map(companies => {
  return companies.name
})
console.log(companyNames)
console.log("map2-------------------------")
const companyNameWithHistory = companies.map(companies => `${companies.name} [${companies.start} - ${companies.end}]`);
console.log(companyNameWithHistory)
console.log("sort------------------")
/* const companiesSort = companies.sort(function ( c1,c2) {
  if(c1.start > c2.start){
    return 1
  }else {
    return -1
  }
})
console.log(companiesSort) */
const companiesSort = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})
console.log(companiesSort)

console.log("reduce-----------------")
const totalYears = companies.reduce((total, companies) => total + (companies.end - companies.start), 0)

console.log(totalYears) 