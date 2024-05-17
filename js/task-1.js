"use strict";

/*
По курсу напевно треба було б зробити новий масив та через for of запушити нові значення з toLowerCase, але дуже захотілося так зробити через map)
*/

function slugify(title) {
  const slug = title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
  return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
