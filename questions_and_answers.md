<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: A

<i>Answer is A. Because greetin value was {} in the second line. When we did console.log something, it shows it's value and value was already set as greetign = {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: C

<i>This sum answer is C. Because there is a function named sum and that have two parameters a and b. When function sum is called it had two arguments 1 and "2". 1 is a number type and "2" is a string type. We can get sum from numbers but can't get sum from a number and a string. so they only add after another like 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: A

<i>Answer is A. Because in the first line there is a array named food and second line there is a object named info, info have one item that comes from food array's first item 'a slice of a pizza'. Third line info item is changed. But in all this code there is nothing changes in the food array or it's item so it'll be same. So when we console.log(food) it shows it's original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B</b></summary>
<p>

#### Answer: B

<i>There is a function and it's answer is B. Function have a parameter named 'name' and it returns a text and this parameter. When we call this function text will return successfully but parameter showed undefined. That's because we did't give value as arguments when we called the funcion. It had not defined, so it's shows undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: C

<i>This answer is C. Because forEach method executes only one element of an array at a time. So, there is a array named nums and run forEach method on nums array. Array nums has 4 elements 0, 1, 2, 3. So, when forEach method run there is if(num) count +=1; and count value was 0. So when it runs every time count is equal to num that means nums array element and count are same. Last elemet is 3 so it exicutes 3. If last element was 20 it'll executes 20.</i>

</p>
</details>
