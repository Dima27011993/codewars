// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  //   const firstYear = p0 + p0 * (percent / 100) + aug;
  //   console.log(firstYear, firstYear >= p);
  //   const secondYear = firstYear + firstYear * (percent / 100) + aug;
  //   console.log(secondYear, secondYear >= p);
  //   const thirdYear = secondYear + secondYear * (percent / 100) + aug;
  //   console.log(thirdYear, thirdYear >= p);

  let years = 0;
  let previousYear = p0;

  while (true) {
    const people = previousYear + previousYear * (percent / 100) + aug;

    years = years + 1;

    if (people >= p) {
      break;
    }

    previousYear = people;
  }

  return years;
}

// testing

const tests = [
  [1000, 2, 50, 1200, 3],
  [1500, 5, 100, 5000, 15],
  [1500000, 2.5, 10000, 2000000, 10],
  [1500000, 0.25, 1000, 2000000, 94],
  [1500000, null, 1000, 2000000, 500],
];

tests.forEach((test) => {
  const result = nbYear(test[0], test[1], test[2], test[3]);
  console.log(result, test[4], result === test[4]);
});
