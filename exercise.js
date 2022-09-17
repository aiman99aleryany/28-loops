// Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 55


let total = 0;

for (let counter = 0; counter <= 10; total += counter++) {
  console.log(counter);
}

console.log(total);
