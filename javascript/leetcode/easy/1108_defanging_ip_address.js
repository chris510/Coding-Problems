// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// var defangIPaddr = function(address) {
//   return address.split('.').join('[.]');
// };

//The above solution takes up constant memory as we are modifying the original array and not making any new data structures. Split and join both have an O(n) time because we have to itterate through and split up at a certain spot and then rejoin after/before every element. This solution is good if we have a lot of time and less memory.

//To create the fastest solution, we could itterate once and then change every period into a bracket with a period..

const defangIPaddr = (address) => {
  let newAddr = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newAddr += "[.]";
    } else {
      newAddr += address[i];
    }
  }
  return newAddr
}

console.log(defangIPaddr("1.1.1.1")); "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
