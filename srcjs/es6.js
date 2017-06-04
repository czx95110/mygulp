var arr = [1, 9, 2, 3, 1, 9, 4, 8, 5, 3, 7, 8, 9, 5];
console.log(arr);
arr.sort((a, b)=> {
  return b - a;
});
console.log(arr);
