/* 
  Calculate Area of Triangle (Sides: 5, 6, 7)

  Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

  This JavaScript program calculates the area of a triangle with sides of lengths 5, 6, and 7 using Heron's formula. It first computes the semi-perimeter (s) of the triangle, then uses it to find the area, which is logged to the console.
*/

function area(...sides) {
  let s = (sides[0] + sides[1] + sides[2]) / 2;

  let area = Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - sides[2]));

  return area;
}

console.log(area(5, 6, 7));
