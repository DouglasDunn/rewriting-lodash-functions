## The Silly Tortoise Function Hub

This is a library of commonly used JavaScript/JQuery/Lodash/Underscore methods with documentation and commenting using ES2015. This library is avaiable as an npm moodule for your enjoyment.

## Why do you want our library?

- you will learn JavaScript easily
- you should use us with ES2015
- your job will be so much easier

## Specifications

### Required

- [ ] Includes a list of commonly used methods to rewrite in ES2015.
- [ ] Includes a README that describes each method and provides an example of use.
- [ ] Package is published with NPM.
- [ ] Includes tests for all methods described.
- [ ] This library includes 10 amazing easy to use functions.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## The Silly Tortoise Function Hub

This is a library of commonly used JavaScript/JQuery/Lodash/Underscore methods. This library is avaiable as an npm moodule for your enjoyment.

## Why do you want our library?

- you will learn JavaScript easily
- you should use us with ES2015
- your job will be so much easier

## Methods

## Add
# Adds two numbers
```js
add(num1, num2)
```

```js
add(6, 4);
// is 10

```
## Chunk
# Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will contain a remainder.
```js
chunk(array, [size=1])
```
```js
chunk(['a', 'b', 'c', 'd'], 2);
// is [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// is [['a', 'b', 'c'], ['d']]
```
## Compact
# Creates an array with all falsey values removed.

```js
compact([0, 1, false, 2, '', 3]);
// is [1, 2, 3]
```
## Filter
# Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

```js
filter(collection, [predicate=_.identity])
```

```js
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

filter(users, function(o) { return !o.active; });
// is objects for ['fred']

// The `_.matches` iteratee shorthand.
filter(users, { 'age': 36, 'active': true });
// is objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
filter(users, ['active', false]);
// is objects for ['fred']

// The `_.property` iteratee shorthand.
filter(users, 'active');
// is objects for ['barney']
```
## Flow Right
# It creates a function that invokes the given functions from right to left.

```js
flowRight([funcs])
```
```js
function square(n) {
  return n * n;
}

var addSquare = flowRight([square, add]);
addSquare(1, 2);
// is 9
```
## isFunction
# Checks if value is classified as a Function object.

```js
isFunction(value)
```

```js
isFunction(_);
// is true

 isFunction(/abc/);
// is false
```
## Last
# Gets the last element of array.

```js
last(array)
```
```js
last([1, 2, 3]);
// is 3
```
## nth
# Gets the element at index n of array. If n is negative, the nth element from the end is returned.

```js
nth(array, [n=0])
```
```js
var array = ['a', 'b', 'c', 'd'];

nth(array, 1);
// is 'b'

nth(array, -2);
// is 'c';
```

## Reverse
# Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

```js
reverse(array)
```
```js
var array = [1, 2, 3];

reverse(array);
// is [3, 2, 1]

console.log(array);
// is [3, 2, 1]
```
## Slice
# Creates a slice of array from start up to, but not including, end.

```js
slice(array, [start=0], [end=array.length])
```

## Subtract
# Subtract two numbers.

```js
subtract(minuend, subtrahend)
```
```js
subtract(6, 4);
// is 2
```
## Tail
# Gets all but the first element of array.
```js
tail(array)
```
```js
tail([1, 2, 3]);
// is [2, 3]
```

## Times
# Invokes the iteratee n times, returning an array of the results of each invocation. The iteratee is invoked with one argument; (index).
```js
times(n, [iteratee=_.identity])
```
```js
times(3, String);
// is ['0', '1', '2']

 times(4, _.constant(0));
// is [0, 0, 0, 0]
```
---
