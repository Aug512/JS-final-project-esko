# JavaScript Style Guide

В данном документе отражён свод правил по написанию и форматированию JavaScript-кода в итоговом проекте модуля.

---

## Содержание

#### 1. Именование объектов языка
#### 2. Объявление переменных
#### 3. Точка с запятой
#### 4. Блоки
#### 5. Объекты
#### 6. Строки
#### 7. Функции
#### 8. Операторы сравнения
#### 9. Пробелы

---

## Именование объектов языка

### 1. Названия объектов языка должны отражать их значение/функции

Названия переменных должны отражать тип значения и контекст, в котором они будут использоваться.
Названия функций должны отражать их назначение или получаемый результат.

**Bad practice**

``` js
  const a = 10;
  const anotherString = '...';
  const human = true;
  const date = () => {
    const currentTime = new Date();
    return currentTime;
  }
```

**Good practice**

``` js
  const length = 10;
  const thirdString = '...';
  const isHuman = true;
  const getDate = () => {
    const currentTime = new Date();
    return currentTime;
  }
```

### 2. Использовать camelCase для названий переменных, объектов и функций.

**Bad practice**

``` js
  const newlength = 10;
  function getNEWlength() {}
```

**Good practice**

``` js
  const newLength = 10;
  function getNewLength() {}
```

### 3. Используйте PascalCase для именования конструкторов или классов.

**Bad practice**

``` js
  function user(props) {
    this.name = props.name;
  }

  const john = new user({
    name: 'John',
  });
```

**Good practice**

``` js
  class User {
    constructor(props) {
      this.name = props.name;
    }
  }

  const mike = new User({
    name: 'Mike',
  });
```


## Объявление переменных

Для объявления переменных следует всегда использовать `let` или `const`.
Если переменная не переназначается - следует использовать `const`.

**Bad practice**

``` js
  var value = 10;
  const response = 'Ok';
  newClass = new customClass();
  
  response = "Not ok";
```

**Good practice**

``` js
  const value = 10;
  let response = 'Ok';
  const newClass = new customClass();
  
  response = "Not ok";
```


## Точка с запятой

Каждая инструкция должна заканчиваться точкой с запятой.

**Bad practice**

```js
  let luke = {}
  let leia = {}
  [luke, leia].forEach(jedi => jedi.father = 'vader')
```

**Good practice**

```js
  let luke = {};
  let leia = {};
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
  });
```


## Блоки

### 1. Для всех многострочных блоков следует использовать фигурные скобки

**Bad practice**

```js
  if (test)
  return false;

  function foo() { return false; }
```

**Good practice**

```js
  if (test) return false;

  function foo() {
    return false;
  }
```

### 2.При использовании конструкции if .. else else следует располагать на одной строке со скобкой закрывающей блок if.

**Bad practice**

```js
  if (ans === true) {
    alert('wow');
    congrats();
  }
  else {
    tryAgain();
  }
```

**Good practice**

```js
  if (ans === true) {
    alert('wow');
    congrats();
  } else {
    tryAgain();
  }
```

## Объекты

### 1. Объекты (в том числе и массивы) следует объявлять через фигурные скобки

**Bad practice**

```js
  const user = new Object();
  const cars = new Array();
```

**Good practice**

```js
  const user = {};
  const cars = [];
```

### 2. Горизонтальное выравнивание не рекомендуется

**Bad practice**

```js
  const user = {
    firstName: "John",
    age:       24,
  }
```

**Good practice**

```js
  const user = {
    firstName: "John",
    age: 24,
  }
```

### 3. Каждое новое свойство следует писать с новой строки

**Bad practice**

```js
  const user = { firstName: "John", age: 24 }
```

**Good practice**

```js
  const user = {
    firstName: "John",
    age: 24,
  }
```


## Строки

### 1. Использование кавычек

Рекомендуется использовать одиночные кавычки (''), либо обратные (``) при использовании шаблонных строк

**Bad practice**

```js
  const username = "John";
```

**Good practice**

```js
  const username = 'Mark';
  const greeting = `Oh hi ${username}!`
```

### 2. Рекомендуется использовать шаблонные строки вместо конкатенации

**Bad practice**

```js
  console.log('Wake up ' + name + ' ...');
```

**Good practice**

```js
  console.log(`Wake up ${name} ...`);
```


## Функции

### 1. Объявление функций

Предпочтительно использование function expression (Функциональное Выражение) и присваивание ее переменной вместо function declaration (Объявление Функции).
Ещё лучше - использование стрелочных функций (Особенно для вложенных функций).

**Bad practice**

```js
  function foo() {
    ...
  };

  const bar = function () {
    ...
  };
```

**Good practice**

```js
  const foo = function bar() {
    ...
  };

  const baz = () => {
    ...
  };
```

### 2. При использовании стрелочных функций с 1 аргументом или неявным return скобки можно опустить

**Bad practice**

```js
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });
```

**Good practice**

```js
  [1, 2, 3].map(number => `A string containing the ${nextNumber}.`);
```


## Операторы сравнения

### Следует использовать строгое сравнение (=== или !==) вместо нестрогого (== или !=)
Это позволит избавиться от неявного преобразования типа данных.

**Bad practice**

```js
  if (answer == 4) {
    console.log(true);
  }

  if (attempts != 0) {
    console.log('Ты пытался')
  }
```

**Good practice**

```js
  if (answer === 4) {
    console.log(true);
  }

  if (attempts !== 0) {
    console.log('Ты пытался')
  }
```


## Пробелы

### 1. Следует использовать отступ 2 пробела
Также можно настроить tab на 2 пробела

**Bad practice**

```js
  if (answer == 4) {
     console.log(true);
  }

  if (attempts != 0) {
   console.log('Ты пытался')
  }
```

**Good practice**

```js
  if (answer === 4) {
    console.log(true);
  }

  if (attempts !== 0) {
    console.log('Ты пытался')
  }
```

### 2. Следует ставить по 1 пробелу вокруг операторов

**Bad practice**

```js
  let sum=a+b+c+d;
```

**Good practice**

```js
  let sum = a + b + c + d;
```