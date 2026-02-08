# Q. JavaScript `null` Comparison Explained
JavaScript handles `null` differently when using **comparison operators (>, <, >=, <=)** and **equality operators (==)**.  

## Example Code
```js
console.log(null > 0);		// false
console.log(null == 0);		// false
console.log(null >= 0);		// true
```

## Why Does This Happen?
When using comparison operators, JavaScript converts null to a number, and null becomes 0.
That’s why:
- null >= 0 → true (because 0 >= 0)
- null > 0 → false (because 0 > 0 is false)

However, equality checks (==) do not follow the same conversion rules.
So:
- null == 0 → false

This inconsistency is why comparisons involving null can be confusing and error-prone in JavaScript.