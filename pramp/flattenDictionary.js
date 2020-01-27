// A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

// Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

// If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

// If a certain key is empty, it should be excluded from the output (see e in the example below).

//We will do this recursively and then check if the keys value is an object,then we have to call recursively. If its not an object, then we put it into our new object to return.

function flattenDictionary(dict) {
  if (!dict) return {};
  const result = {};

  const flatten = (currDic, initKey) => {
    if (!currDic) return;
    Object.keys(currDic).forEach((key) => {
      if (currDic[key] instanceof Object) {
        flatten(currDic[key], makeHKey(key, initKey));
      } else {
        result[makeHKey(key, initKey)] = currDic[key];
      }
    })
  }
  flatten(dict, '');
  return result;
}

const makeHKey = (key, initKey) => {
  if (key === '') return initKey;
  if (initKey === '') {
    return key;
  } else {
    return `${initKey}.${key}`;
  }
}

// Time Complexity: O(n) since we have to traverse through the whole object and n is the number of keys
// Space COmplexity: O(n) since we have to store n recursive call sin a stack.


// console.log(flattenDictionary({'Key1': '1'}))


//key1 : '1',
//key2.a : '2';
//key2.b ; '3';
// initKey = key2.d;

// non-object return empty object
// set up result of empty object
// flatten
  // recursively call each level of the object
  // turn into array and itterate through
  // place that key and value pair in the result object
  // if the object[key] is {};
    //recursively call that key
// return final result object

// Example:

// input:  dict = {
//             "Key1" : "1",
//             "Key2" : {
//                 "a" : "2",
//                 "b" : "3",
//                 "c" : {
//                     "d" : "3",
//                     "e" : {
//                         "" : "1"
//                     }
//                 }
//             }
//         }

// output: {
//             "Key1" : "1",
//             "Key2.a" : "2",
//             "Key2.b" : "3",
//             "Key2.c.d" : "3",
//             "Key2.c.e" : "1"
//         }
// Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.

// Constraints:

// [time limit] 5000ms
// [input] Dictionary dict
// [output] Dictionary