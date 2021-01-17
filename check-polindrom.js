// https://www.codewars.com/kata/5b7bd90ef643c4df7400015d/train/javascript

function solve(s) {
  const chetnoe = isChetnoe(s);
  console.log(chetnoe);

  // if ne chetnoe remove middle symbol to make chetnoe

  // compare first and last symbols (combinations)

  return false;
}

// return true - dlina stroki chetnoe chisle
// return false - ne chetnoe
function isChetnoe(anything) {
  const ostOtDeleniyaNaDva = anything.length % 2;
  const chetnoe = ostOtDeleniyaNaDva === 0;
  if (chetnoe) {
    // console.log(true);
    return false;
  } else {
    // console.log(false);
    return true;
  }
  //   return anything.length % 2 === 0;
}

const tests = [
  ["abba", true],
  ["abaazaba", false],
  //   [
  //     "kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm",
  //     true,
  //   ],
];

tests.forEach((test) => {
  const result = solve(test[0]);
  console.log(result, test[1], result === test[1]);
});
