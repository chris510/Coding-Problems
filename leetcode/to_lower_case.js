// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

//We want to lowercase a string that is given to us. We can itterate through the string and check if its a uppercase, if it is, we will lowercase, if not we can just return the lowercase version.
// Can just have a storage of lowercase alphabet and uppercase alphabet, and then switch them based if its upper case or not with matching indices.
// Depending if we want to modify the existing string, we will save a lot of space so we will do that. If not, we can create a new string to add.

const ToLowerCase = (str) => {
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = ""
  for (let i = 0; i < str.length; i++) {
    if (upperAlpha.includes(str[i])) {
      let idx = upperAlpha.indexOf(str[i]);
      lower += lowerAlpha[idx]
    } else {
      lower += str[i]
    }
  }
  return lower;
}

//This method is extremely inefficient with time and space memory. We are saving multiple variables for each itteartion of the function as well as returning a new string. we can use str.toLowerCase() but I think it would be better to make it from scratch. We can use char codes and using the unicodes so need to learn it.

// const ToLowerCase = (str) => {
//   let res = '';
//   str.split('').forEach( (s, index) => {
//      let code = str.charCodeAt(index);
//       if (code >= 65 && code < 97 ) {
//           code += 32;
//       }
//       res += String.fromCharCode(code);
//   });
//   return res;
// }
 
console.log(ToLowerCase("Hello")); // hello
console.log(ToLowerCase("here")); // here
console.log(ToLowerCase('LOVELY')); // lovely
