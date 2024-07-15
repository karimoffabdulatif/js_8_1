/*--------------------1-masala--------------------*/ 

// function multiplyObjectValues(obj, n) {
//     const result = {};
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
//         result[key] = obj[key] * n;
//       }
//     }
//     return result;
//   }
  
//   const n = 3;
//   const obj = {a: 2, b: 3, c: 4};
//   const res = multiplyObjectValues(obj, n);
  
//   console.log(res);




/*--------------------2-masala--------------------*/ 

// function countWordsWithA(str) {
//     const words = str.split(' ');
  
//     let count = 0;
  
//     for (let word of words) {
//       if (word.includes('a') || word.includes('A')) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const inputString = "Oxirgi oyni boshladik";
//   const result = countWordsWithA(inputString);
  
//   console.log(result); 
  




/*--------------------3-masala--------------------*/ 

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       read: false
//     },
//     {
//       title: "Dunyoning ishlari",
//       author: "O’tkir Hoshimov",
//       read: true
//     },
//     {
//       title: "Iymon",
//       author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//       read: true
//     },
//   ];
  
//   function checkBooksReadStatus(books) {
//     books.forEach((book, index) => {
//       const readStatus = book.read ? "o'qilgan" : "o'qilmagan";
//       console.log(`${index + 1}. ${book.author} ning "${book.title}" kitobi ${readStatus}`);
//     });
//   }
  
//   checkBooksReadStatus(books);





/*--------------------4-masala--------------------*/ 

// function createObjectFromStrings(array) {
//     const result = {};
//     array.forEach(str => {
//       result[str] = str.length;
//     });
//     return result;
//   }
  
//   const inputArray = ["text", "world", "laptop"];
//   const outputObject = createObjectFromStrings(inputArray);
  
//   console.log(outputObject);






/*--------------------5-masala--------------------*/ 

// function countWords(array) {
//     const result = {};
//     array.forEach(word => {
//       if (result[word]) {
//         result[word]++;
//       } else {
//         result[word] = 1;
//       }
//     });
//     return result;
//   }
  
//   const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//   const wordCounts = countWords(animals);
  
//   console.log(wordCounts);
  



/*--------------------6-masala--------------------*/ 
// function findAgeDifference(people) {

//     people.sort((a, b) => a.age - b.age);
  
 
//     const youngest = people[0].age;
//     const oldest = people[people.length - 1].age;
  
//     return oldest - youngest;
//   }
  
//   const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
  
//   const ageDifference = findAgeDifference(people);
  
//   console.log(ageDifference); 




/*--------------------7-masala--------------------*/ 

// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(item => Boolean(item));
//     const falsy = arr.filter(item => !Boolean(item));
  
//     return { truthy, falsy };
//   }
  
//   const inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   const result = getTruthyFalsy(inputArray);
  
//   console.log(result);


/*--------------------8-masala--------------------*/ 

// function minMaxWord(sentence) {
//     const words = sentence.split(' ');
  
//     let minWord = words[0];
//     let maxWord = words[0];
  
//     for (let word of words) {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     }
  
//     return { minWord, maxWord };
//   }
  
//   const sentence = "Men dasturlash kursida o’qiyman";
//   const result = minMaxWord(sentence);
  
//   console.log(result);



/*--------------------9-masala--------------------*/ 

// const inputString = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";

// function extractMessage(input) {
//   const najot = input.match(/NAJOT/i)[0];
//   const talim = input.match(/ta'lim/i)[0];
//   const is = input.match(/is/i)[0];
//   const the = input.match(/the/i)[0];
//   const best = input.match(/best/i)[0];
  
//   return `${najot.charAt(0).toUpperCase() + najot.slice(1).toLowerCase()} ${talim} ${is} ${the} ${best}`;
// }

// const result = extractMessage(inputString);

// console.log(result); 



/*--------------------10-masala--------------------*/ 

// var searchMatrix = function(matrix, target) {
 
//     for (let row of matrix) {
  
//       for (let element of row) {
//         if (element === target) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };
  

//   let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   let target1 = 3;
//   console.log(searchMatrix(matrix1, target1)); 
  
//   let matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   let target2 = 13;
//   console.log(searchMatrix(matrix2, target2)); 



/*--------------------11-masala--------------------*/ 

// function rotateMatrix(matrix) {
//     const n = matrix.length;
    

//     const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         rotatedMatrix[j][n - 1 - i] = matrix[i][j];
//       }
//     }
    
//     return rotatedMatrix;
//   }
  

//   const matrix1 = [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16]
//   ];
  
//   const matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log(rotateMatrix(matrix1));
//   console.log(rotateMatrix(matrix2));
  


/*--------------------12-masala--------------------*/ 
// const text = "Bu bir misol matni";


// const words = text.trim().split(" ");
// const lastWord = words[words.length - 1];
// const lastWordLength = lastWord.length;

// console.log("Oxirgi so'zning uzunligi:", lastWordLength);




/*--------------------13-masala--------------------*/ 

// function objectToStringArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
//   }
  
//   const inputObject = {a: 2, b: 5, c: 7};
//   const resultArray = objectToStringArray(inputObject);
  
//   console.log(resultArray); 


/*--------------------14-masala--------------------*/ 

// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
//     const n = mergedArray.length;
    
//     if (n % 2 === 0) {

//       const midIndex1 = n / 2 - 1;
//       const midIndex2 = n / 2;
//       return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
//     } else {
 
//       const midIndex = Math.floor(n / 2);
//       return mergedArray[midIndex];
//     }
//   };
  

//   const nums1 = [1, 2];
//   const nums2 = [3, 4];
//   const median = findMedianSortedArrays(nums1, nums2);
  
//   console.log(median); 

/*--------------------15-masala--------------------*/ 

// function moveDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = [];
  
//     for (let item of arr) {
//       if (seen.has(item)) {
//         duplicates.push(item);
//       } else {
//         seen.add(item);
//       }
//     }
  
//     return duplicates;
//   }
  

//   const arr = [1, 2, 3, 1, 4, 5, 2, 6];
//   const duplicates = moveDuplicates(arr);
  
//   console.log(duplicates); 
  
  

  


  
  




  

  

  
  
  

  

  