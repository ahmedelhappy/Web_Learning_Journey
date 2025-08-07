// console.log("%cWarning! %cThis is important", "color: orange; font-weight: bold;", "color: red;");

// //You get [object Object] when you try to convert a plain object to a string.
// let obj = {};
// console.log("" + obj);           // "[object Object]"
// console.log(String(obj));        // "[object Object]"
// console.log(obj.toString());     // "[object Object]"
// Number(a) //convert to num
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log((100.1).toString());
// console.log(100.554555.toFixed(3)); //string
// console.log(parseInt("100 Osama")); // 100
// console.log(parseInt("100.500 Osama"));
// console.log(Number.isInteger(100));
// console.log(Number.isNaN("Osama" / 20));

// console.log(Math.random());
// console.log(Math.trunc(99.5));

// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15
// console.log(theName.trim());
// console.log(a.split(" ", 2));
// console.log(a.slice(-5));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("zero", 2));

// console.log(Boolean(null));

// //difference between logical OR (||) and the nullish coalescing operator (??)
// console.log(`The Price Is ${price || 200}`); //if 0, "", false, undefined, null, etc.
// console.log(`The Price Is ${price ?? 200}`); //if null or undefined only.

/*
| Method       | Action                | Works On       |
| ------------ | --------------------- | -------------- |
| `.unshift()` | Add to **start**      | Modifies array |
| `.push()`    | Add to **end**        | Modifies array |
| `.shift()`   | Remove from **start** | Returns value & Modifies array|
| `.pop()`     | Remove from **end**   | Returns value & Modifies array|
*/
// let allFriends = myFriends.concat(arr1, arr2, "Gameel", [1, 2]); //does no modify myFriends
// console.log(allFriends.join("|"));

// /*
//   Function
//   - Rest Parameters
//   - Only One Allowed
//   - Must Be Last Element
// */

// ✅ Use regular functions when:
// You want this to refer to the object (e.g., inside methods or events)
// ✅ Use arrow functions when:
// You want this to stay as it was in the outer scope (e.g., inside callbacks or setTimeout)
// ✅ Use .bind() to control this when passing methods around.






















//====================Questions=========================
// const coords = [
//   { x: 1, y: 2 },
//   { x: 5, y: 10 }
// ];

// const sum = coords.map(({ x, y }) => x + y);
// console.log(sum); // [3, 15]
//---------------------
//Want to watch OOP Crash Course real Quick.

//---------------------