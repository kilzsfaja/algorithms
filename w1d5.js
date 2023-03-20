// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);

// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// function

// Reversing an array
// Write a function reverse(arr) to reverse an array in place, if we were given...

// ['a', 'b', 'c', 'd', 'e']; // input

// ['e', 'd', 'c', 'b', 'a']; // output

// Let's do this 'in-place' do not create a new array.

function reverse(arr) {
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

var arr = ["a", "b", "c", "d", "e"];
console.log(reverse(arr));
