[На главную](README.md)

# Frontend CodeStyle

<!-- MarkdownTOC autolink=true autoanchor=true bracket=round depth=0 -->

- [Общие для всех языков моменты](#%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%81%D0%B5%D1%85-%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D1%8B)
    - [all.1. Форматирование](#all1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [all.2. Именование](#all2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [all.3. Комментарии](#all3-%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8)
    - [all.4. Прочее](#all4-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5)
- [JavaScript](#javascript)
    - [js.1. Форматирование](#js1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [js.2. Именование](#js2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [TODO js.3. Комментарии](#todo-js3-%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8)
    - [js.4. jQuery](#js4-jquery)
    - [js.5. Прочее](#js5-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5)
    - [TODO js.6. ES2015+](#todo-js6-es2015)
- [HTML](#html)
- [Less](#less)
    - [less.1. Форматирование](#less1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [less.2. Именование](#less2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    - [less.3. Прочее](#less3-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5)
- [BEM](#bem)
    - [bem.1. Общие моменты](#bem1-%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D1%8B)
    - [TODO bem.2. Документация блоков](#todo-bem2-%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2)
- [TODO L10N](#todo-l10n)
- [Модули: package.json, bower.json, yarn.lock](#%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D0%B8-packagejson-bowerjson-yarnlock)
- [Источники](#%D0%98%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8)

<!-- /MarkdownTOC -->


<a name="%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%81%D0%B5%D1%85-%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D1%8B"></a>
# Общие для всех языков моменты

<a name="all1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## all.1. Форматирование

all.1.1. Отступ 2 пробела для языков, в которых блоки формируются не символами, а отступами (CoffeeScript, Jade, Stylus, Haml, Slim и т.д.), отступ 4 пробела во всех остальных языках. Использование символа табуляции недопустимо. Исключения:

- YAML, который попадает под CS бэкендеров и отступы в котором также должны быть в 4 пробела.
- Makefile, который поддерживает только отступы табуляцией

```
editorconfig: indent_size = 4, indent_style = space
jshint: indent: 4
```

all.1.2. Переводы строк - только LF (Unix).

```
editorconfig: end_of_line = lf
```

all.1.3. В конце строк, а также на пустых строках пробелов нет. Исключения: markdown и yaml, в котором также может содержаться markdown разметка. Причина исключения - в markdown два концевых пробела рендерятся в `<br />`

```
editorconfig: trim_trailing_whitespace = true
```

all.1.4. В конце файла обязательна пустая строка. Причина - корректные диффы в git.

```
editorconfig: insert_final_newline = true
```

all.1.5. Максимальная длина строки 120, рекомендуемая 80. Превышение допустимо, например, при размещении в комментарии длинной ссылки.

all.1.6. При разбиении длинных строк на несколько операторы переносятся на новую строку:

```js
if ( firstVeryLongCondition
    && secondVeryLongCondition
) {
    debugger;
}
```

all.1.7. При разбиении длинных строк на несколько chained вызовы переносятся на новую строку вместе с точкой:

```js
object
    .method1()
    .method2();
```

all.1.8. Пробелы вокруг бинарных и тернарных операторов обязательны. Включая, но не ограничиваясь списком `=`, `==`, `!=`, `===`, `!==`, `=>`, `<`, `>`, `&&`, `||`

```js
var a = b * c + d * e;
var f = g > h ? i : j;
```

all.1.9. Перед унарными постфиксными операторами (`i++`, `i--`), а также после унарных префиксных (`!!i`, `!i`, `++i`, `--i`, `-i`) пробел не ставится.

all.1.10. Пробелы в индексах: вокруг простых или отсутствующих не ставятся (`i[1]`, `i['key']`, `var i = []`), вокруг сложных ставятся (`i[ n + 1 ]`, `i[ somefunc( x ) ]`).

all.1.11. Пробелы в фигурных скобках ставятся всегда, если хэш/блок пишется в строку и не пуст: `var i = { key: 1 }`, но `var i = {}`.

all.1.12. Пробелы в вызовах ставятся всегда, кроме случаев, если передаётся единственный аргумент в кавычках: `somefunc( 1 )`, `somefunc( a, myOptions )`, но `$('.myselector')`.

all.1.13. После запятых и точек с запятой (если они не расположены в конце строки) ставятся пробелы. Перед запятой и точкой с запятой пробелы не ставятся.

all.1.14. Если в строке не требуется интерполяция переменных, она должна быть в одинарных кавычках.

all.1.15. В многострочных массивах и хэшах запятую следует ставить после каждого элемента, включая последний. Даже в JavaScript, в котором лишние запятые уберутся при транспиляции и минификации.

all.1.16. Форматирование "comma first", когда в списках переменных, а также между элементами массивов и хэшей запятая ставится в начале строки, - недопустимо. 

all.1.17. Если хэш или объект состоит из однострочных пар ключ-значение, его следует выравнивать по вертикали: разделитель подгоняется пробелами вправо в вертикальную линию и имеет с обеих сторон хотя бы по одному пробелу:

```js
var a = {
    firstKey    : 1,
    t           : 2,
    veryLongKey : 3,
}
```

all.1.18. Блок кода начинается на той же строке, что и оператор (стиль [K&R]("https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)#.D0.A1.D1.82.D0.B8.D0.BB.D1.8C_.C2.ABK.26R.C2.BB)"):

```js
if ( condition ) {
}
```

all.1.19. Блок кода закрывывается с тем же отступом, что и оператор, открывший блок. Никакого другого кода в строке завершения блока быть не должно. Если после блока - код, а не закрытие другого блока, то между ними требуется пустая строка.

```js
if ( condition ) {
    if ( anotherCondition ) {
    }

    'some code';

    if ( lastCondition ) {
    }
}
```

all.1.20. Требование по закрытию блока на отдельной строке также означает, что операторы `else`, `elsif` и подобные всегда пишутся с новой строки:

```js
if ( condition ) {
}
else {
}
```


all.1.21. При использовании автоформаттеров переформатированные исходники стоит коммитить отдельно.

<a name="all2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## all.2. Именование

all.2.1. Имя переменной должно быть словом или фразой на английском языке. Из имени сразу должно быть понятно назначение.

all.2.2. Недопустимо использовать однобуквенные переменные, кроме как для счётчика в цикле `for`

all.2.3. Переменные всегда именуются с маленькой буквы.

all.2.4. Классы (объекты, содержащие конструктор) и неймспейсы всегда именуются с большой буквы.

all.2.5. Константы (не es2015 `const`, а вынесенные наверх магические значения) всегда именуются в верхнем регистре и с подчёркиванием в качестве разделителя `CAPS_LOCK`

all.2.6. Имена массивов - во множественном числе: `items`. Имена скаляров - в единственном числе: `item`.

all.2.7. Приватные переменные именуются, начиная со знача подчёркивания: `_imPrivate`.

all.2.8. Если переменная - boolean, она должна начинаться с префиксов `is` / `are` / `has` / `have`: `isSetupComplete`.

all.2.9. Функция должна выполнять одну задачу. Если их несколько - значит нужно несколько функций.

all.2.10. Имена функций и методов должны содержать глагол и по возможности начинаться с него: `function refillBalance(){}`.

all.2.11. Используйте устоявшиеся пары антонимов в именах функций. В книге Стива Макконелла «Совершенный код» приводятся устоявшиеся пары антонимов, рекомендуемые для использования в именах функций/методов, а именно:

```
add / remove
begin / end
create / destroy
first / last
increment / decrement
insert / delete
lock / unlock
min / max
next / prev
old / new
open / close
show / hide
source / target
start / stop
up / down
```

Использование «несогласованных» пар глаголов вроде `add / delete` или `insert / destroy` вводит в заблуждение и усложняет анализ кода.


<a name="all3-%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8"></a>
## all.3. Комментарии

all.3.1. Между символами начала комментария и текстом - один пробел:

```js
// Комментарий
```

all.3.2. Пустая строка перед строкой комментария.

all.3.3. Комментарий внутри блока по отступам соответствует отступу кода в этом блоке:

```js

// Комментарий верхнего уровня
if ( something ) {
    
    // Комментарий в блоке
    debugger;
}
```

all.3.4. Не стоит комментировать каждую строку, код должен быть понятен сам по себе. Комментировать нужно в первую очередь функции, инклуды и подобные блоки кода - краткое описание, тип и значение аргументов. В языках, где есть стандарты документирования - используются они.


<a name="all4-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5"></a>
## all.4. Прочее

all.4.1. Не следует увлекаться логикой в шаблонах. Чем более готовые к выводу данные в них приходят - тем лучше.

all.4.2. Нельзя использовать в шаблонах и скриптах склеивание css-классов, а также путей к файлам из кусков (`blockname + '_some_mod'`)  - иначе потом не найти

all.4.3. Избегайте множественных вложенных вызовов. Промежуточные результаты можно сложить в переменную:

```js
// Плохо
var url = encodeURIComponent( MyUtil.trim( MyClass.getSomeString( MyData.replace('a', 'b') ) ) );

// Хорошо
var url;
var urlCleaned;
var urlPrepared;
var urlTrimmed;

urlCleaned  = MyData.replace( 'a', 'b' );
urlPrepared = MyClass.getSomeString( urlCleaned );
urlTrimmed  = MyUtil.trim( urlPrepared );
url         = encodeURIComponent( urlTrimmed );
```

all.4.4. Не более 3-4 аргументов у функции. Если нужно больше - лучше передать хэш.

all.4.5. Интерполяция лучше конкатенации:

```javascript
// Хорошо
`this is an ${adjective} string`;

// Плохо
'this is an ' + adjective + ' string';
```




<a name="javascript"></a>
# JavaScript

<a name="js1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## js.1. Форматирование

js.1.1. Обязательны пробелы после ключевых слов: `catch`, `do`, `else`, `for`, `if`, `switch`, `try`, `while`.

js.1.2. Нет пробела между `function` и `(`:

```js
var myResults = function( isForSure ) {
};
```

js.1.3. Точка с запятой ставится в конце каждого выражения. Не ставится после блока.

```js
function getMyCallback( params ) {
    var callback = function() {
        return 1; // конец выражения
    }; // конец выражения

    if ( typeof params.key !== 'undefined' ) {
        return callback; // конец выражения
    } // конец блока

    throw 'no callback';
} // конец блока
```


js.1.4. После точки с запятой в строке ничего нет, даже комментариев (кроме необходимости показать пример, как в js.1.3.). Пробел: до `;` не допускается, после - обязателен [semi-spacing](http://eslint.org/docs/rules/semi-spacing).

js.1.5. Перед открытием блока (`{`) всегда стоит пробел:

```js
if ( condition ) {
    return function() {
        console.log('hi');
    };
}
```

js.1.6. Оператор `typeof` вызывается без круглых скобок:

```js
var isSet = typeof myVar !== 'undefined';
```

js.1.7. Рекомендуется выравнивать присваивания по `=`:
```js
// Плохо
var string = 'my string';
var float = 0.22;
var data;

// Хорошо
var string = 'my string';
var float  = 0.22;
var data;
```

js.1.8. После объявления переменных всегда идет пустая строка:

```js
var string = 'my string';
var float  = 0.22;
var data;

// here your code
```

js.1.9. Перед ключевым словом `return` ставится пустая строка. Исключения: однострочные блоки `{}`. [Правило](http://eslint.org/docs/rules/newline-before-return)

```js
// Плохо
function foo() {
    const result = doSomething();
    return result;
}

// Хорошо
function foo() {
    return;
}

function foo() {

    return;
}

function foo( bar ) {
    if ( !bar ) {
        return; // одна строка в блоке
    }
}

function foo() {

    // comment
    return;
}

function foo( bar ) {
    if ( !bar ) {
        return; // одна строка в блоке
    }

    return bar;
}
```

js.1.10. Перевод строки в объектах-литералах, деструкторах. Правила [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline) и [object-property-newline](http://eslint.org/docs/rules/object-property-newline).

```js
// Плохо
var f = {foo: 1, bar: 2}; 
var g = {
    foo: 1, bar: 2
};

// Хорошо
var a = {};
var b = {foo: 1};
var с = {
    foo: 1
};
var d = {
    foo: 1,
    bar: 2
};
var e = {
    foo: function() {
        doSomething();
    }
};
```

<a name="js2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## js.2. Именование

js.2.1. Использование `var` при объявлении переменных обязательно.

js.2.2. Каждую переменную рекомендуется объявлять своим var/let/const. Запятые порождают ненужные git-diff'ы, баги в виде объявления глобальных переменных, а также переменные из начала блока или конца сложнее удалять. [Правило](https://eslint.org/docs/rules/one-var)
```javascript
// Плохо
const a = 2,
    b = 3,
    c = 'hello';

// Всё ещё плохо
const
    a = 2,
    b = 3,
    c = 'hello';

// Так можно незаметно для себя объявить глобальную переменную
const
    a = 2,
    b = 3,
    c = 'hello';
    d = 'i am global';

// Хорошо
const a = 2;
const b = 3;
const c = 'hello';
```

js.2.3. Переменные именуются с маленькой буквы, `lowerCamelCase`. Знак подчёркивания допустим только при пробросе переменных из tt в js.
__TODO требуется perl helper 'camelize' для проброса переменных из tt в js__

js.2.4. Классы (объекты с конструктором) и неймспейсы именуются с большой буквы, `UpperCamelCase`. Например, `let storage = new Storage();`, `Site.Analytics.Ecommerce.isEnabled = false;`

js.2.5. Переменные с jQuery-объектами внутри именуются с доллара, `$myjQueryObject`

js.2.6. Если нужно сохранить ссылку на `this`, это делается в переменную `self`: `var self = this;`

js.2.7. Не обращаться к элементам хэша как к массивам, если ключ известен:

```js
// Плохо
variable['key'];

// Хорошо
variable.key;

// Хорошо
const someKey = functionThatReturnsKey();

variable[someKey];
```


<a name="todo-js3-%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B8"></a>
## TODO js.3. Комментарии

В настоящий момент используется YUIDoc. Рассматривается переход на JSDoc. 


<a name="js4-jquery"></a>
## js.4. jQuery

js.4.1. Следует кэшировать jQuery объекты в $переменные, чтобы не делать повторных выборок из DOM.

js.4.2. Следует минимизировать вставки в DOM - лучше накопить всё в строке или в jQuery-объекте и потом вставить один раз.

js.4.3. Используется краткая форма document.ready: `$( function() {} );`

js.4.4 `$.ajax` предпочтительнее методов-хэлперов `$.post`, `$.get`, `$.getJson` и прочих.

js.4.5. В `$.ajax` вместо коллбеков лучше использовать promise-интерфейс:

```js
$.ajax().then().fail();
```

js.4.6. Отступы в chained jQuery вызовах увеличиваются с каждой выборкой и уменьшаются с каждым возвратом к предыдущей:

```js
$form
    .removeClass( klass )
    .find( selector )
        .each( callback )
        .end()
    .find( selectorTwo )
        .each( callbackTwo );
```

js.4.7. Вместо js-анимации предпочтительно использовать css transitions/animations.

js.4.8. При сабмите формы следует дизайблить кнопку сабмита. Во всяком случае до разработки и внедрения блока b-form.

js.4.9. Вместо `attr` предпочтительно использовать `prop`.


<a name="js5-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5"></a>
## js.5. Прочее

js.5.1. ['use strict'](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode) использовать нужно. Но при этом нельзя объявлять глобально, т.к. помимо нашего кода в бандлы попадают сторонние библиотеки:

```js
// Плохо
'use strict';

// Хорошо
$( function() {
    'use strict';
} );

function getMyData() {
    'use strict';
}
```


js.5.2. Сравнивать всегда следует без приведения типов, `===`

js.5.3. Вместо цикла for по массиву лучше использовать методы `forEach` / `map` / `reduce`

js.5.4. Не следует использовать `Array.map` не по назначению: если задача цикла не состоит в создании нового массива - достаточно `forEach`

js.5.5. Не используйте `bind` там, где контекст можно передать встроенными средствами:

```js
// Плохо
[ 'foo', 'bar' ].forEach( func.bind( this ) );

// Хорошо
[ 'foo', 'bar' ].forEach( func, this );
```

js.5.6.  Избегайте `for...in`,  где это возможно:

```js
// Плохо
for ( var prop in obj ) {
  if ( obj.hasOwnProperty( prop ) ) {
      console.log( prop );
  }
}

// Хорошо (es2015)
Object.keys( obj ).forEach( prop => console.log( prop ) );
```

js.5.7. Не стоит увлекаться трюками:

```js
// Плохо
const n = ~~3.14;

// Хорошо
const n = Math.floor( 3.14 );
```

Допустимые трюки:
```js
// to Boolean
var isEnabled = !!( someCounter + someSubCounter );

// to Number
var myNumber  = +myString;

// вместо сравнения `>= 0`
if ( ~myArray.indexOf('needle') ) {}
```

Недопустимые трюки включают в себя `>> 0`, `~~` итд. 

По поводу `!!var`: важно учитывать контекст. Например в условных операторах контекст логический, и соответственно выражение будет преобразовано к булин в любом случае:
```js
// Плохо
if ( !!someCondition ) {}

// Хорошо
if ( someCondition ) {}
```

js.5.8. Нельзя расширять прототипы родных объектов JS

js.5.9. Для слияния объектов вместо `$.extend` или `_.extend` нужно использовать `Object.assign`


<a name="todo-js6-es2015"></a>
## TODO js.6. ES2015+

js.6.1. `var` можно считать deprecated. Всегда следует использовать `const` для переменных, значение которым присваивается только один раз (а это предпочтительно), `let` в противном случае. Важно понимать, что `const` не означает константу в общем смысле, он просто не даёт повторно присвоить значение переменной.

js.6.2. Забудьте про `apply`, используйте спред-оператор:

```js
// Плохо
greet.apply( null, person );

// Хорошо
greet( ...person );
```


<a name="jadepug"></a>
# Jade/Pug

__Jade/Pug is deprecated. Все новые модули следует писать в виде Vue-компонентов. MR с новыми файлами на jade/pug не принимаются, допустимы только исправления в старых__

<a name="html"></a>
# HTML

html.1. HTML5

html.2. XHTML style: самозакрывающиеся теги закрываются слешем `<img />`, атрибуты всегда имеют значение и всегда в двойных кавычках

html.3. Семантика

html.4. Инлайн скрипты и стили запрещены

html.5. Data-атрибуты - для хранения данных. Нельзя использовать их в селекторах - ни в стилях, ни в скриптах

html.6. Не загружайте незащищённое содержимое на страницах, отдаваемых по HTTPS


<a name="less"></a>
# Less

<a name="less1-%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## less.1. Форматирование

less.1.1. Разбиение бэм-класса допустимо только по знакам подчёркивания:

```less
.b-block {
  &__elem {     // ок, видно, что это элемент
      &-item {} // плохо, должно быть на одном уровне с __elem: &__elem-item
  }

  &-sibling {}  // плохо, должно быть вынесено на верхний уровень, .b-block-sibling

  &_mod {       // ок, видно, что это модификатор
    &_val {}    // и его значение
  }
}
```


less.1.2. После открывающей фигурной скобки всегда перевод строки. Исключение только для коротких однотипных правил, которые при этом выравниваются по вертикали:

```less
&_home     { background-position:   0     0; }
&_person   { background-position: -16px   0; }
&_files    { background-position:   0   -16px; }
```

less.1.3. Если на блок приходится несколько селекторов - надо писать по одному селектору на строку

```less
.b-block,
.b-some {
}
```

less.1.4. Не писать единицу измерения нулевым значениям: `padding: 0`;

less.1.5. Не опускать ведущий ноль у дробных значений: `letter-spacing: 0.07em`;

less.1.6. Математические вычисления всегда завёрнуты в скобки: `width: ( 100px - @padding )`;

less.1.7. Цвета пишутся в `#rrggbb`, в нижнем регистре. Короткая форма `#rgb` допустима. Именованные цвета (`red`) - недопустимы. В некоторых случаях может быть допустимо и использование `rgba()`. Вместо добавления нового цвета предпочтительно использовать цвета, определённые в [i-variables](/bem/blocks/i-variables/i-variables.less). Если цвет в макете незначительно отличается - по согласованию с дизайнером его можно заменить на цвет из i-variables.


<a name="less2-%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"></a>
## less.2. Именование

less.2.1. Используется методология [БЭМ](#bem)

less.2.2. Нельзя писать стили для классов с префиксами `i-` `t-` `qa-`, которые предназначены для других целей.

less.2.3. При необходимости сослаться на имя блока на вложенных уровнях less следует использовать переменную @bl, объявленную вверху блока:

```less
.b-block {
    @bl: ~".b-block";
    
    &_style {
        &_action {
            display: block;

            &@{bl}_style_none {
                display: none;
            }
        }
    }
}
```


<a name="less3-%D0%9F%D1%80%D0%BE%D1%87%D0%B5%D0%B5"></a>
## less.3. Прочее

less.3.1. Следует стремиться использовать только классы, и не больше одного класса в селекторе, чтобы на выходе получался плоский css:

```css
.b-block {}
.b-block_mod_val {}
.b-block__elem {}
```

less.3.2. Использование !important крайне нежелательно.

less.3.3. Переменные (например, цвета, гарнитуры, отступы) -  в [i-variables](/bem/blocks/i-variables/i-variables.less), миксины - в [i-less](/bem/blocks/i-less/i-less.less).

less.3.4. CSS-хаки недопустимы. Use modernizr.

less.3.5. Каскады крайне нежелательны. При необходимости изменить блок под конкретную страницу лучший вариант - подмешать свой класс `class="b-standart-block b-my-block"`. в крайнем случае сделать каскад в своём блоке `.b-myblock { .b-standart-block { } }`

less.3.6. Media queries должны быть определены в `i-variables`:

```less
@media-small: ~"only screen and (max-width: 750px)";
```

less.3.7. Unprefixed правила всегда идут после одноимённых prefixed.

less.3.8. Не стоит делать внешних импортов, например `@import (css) url(//fonts.googleapis.com/css?family=Open+Sans:300&subset=latin,cyrillic);`

__TODO циклы__

__TODO документация?__


<a name="bem"></a>
# BEM

<a name="bem1-%D0%9E%D0%B1%D1%89%D0%B8%D0%B5-%D0%BC%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D1%8B"></a>
## bem.1. Общие моменты

bem.1.1. Используется оригинальная нотация Яндекса:
- основной префикс `b-`
- элемент отделяется двойным подчёркиванием
- модификатор и его значение отделяются одинарным подчёркиванием

bem.1.2. Булевы модификаторы `b-block_mod` не используются, допустимы только полные модификаторы со значением, `b-block_mod_val`.

bem.1.3. Нельзя править типовые блоки под свои разовые нужды, надо создать отдельные блоки либо подмешивать классы-хэлперы или классы блоков конкретной страницы.

bem.1.4. Если из скрипта нужно обратиться к конкретному блоку, например `b-dropdown`, то не следует вешать ему модификаторы вида `b-dropdown_mydrop_mydown`. Правильно будет подмешать класс родительского блока конкретной страницы, `b-dropdown b-mypage__mydropdown`.

bem.1.5. Используемые префиксы:

- `b-` основной
- `i-` префикс для js-only блоков
- `old-` для переноса легаси кода из root и assets в блоки
- `l-` блоки-хэлперы
- `t-` классы, на которые опираются функциональные тесты frontend
- `qa-` классы, на которые опираются функциональные тесты qa

<a name="todo-bem2-%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2"></a>
## TODO bem.2. Документация блоков


<a name="todo-l10n"></a>
# TODO L10N

__TODO ё__


<a name="%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D0%B8-packagejson-bowerjson-yarnlock"></a>
# Модули: package.json, bower.json, yarn.lock

packages.1. В мастере и продакшене допустимо использовать только официальные версии модулей либо наши форки ([github.com/regru/](https://github.com/regru/)).

packages.2. И наши форки, и наши модули используют [semver](http://semver.org/lang/ru/)

packages.3. Для корректного обновления yarn.lock добавление/изменение модулей в package.json следует производить командами yarn

```bash
yarn add packagename@version -E
yarn upgrade packagename@version
yarn remove packagename
```

packages.4 Версии модулей dependencies фиксируются максимально жёстко (`1.0.0`), чтобы исключить различия на машине разработчика/стенде/в продакшене. Версии модулей devDependencies можно фиксировать только мажорными релизами (`^1.0.0`).

packages.5 __bower.json is deprecated: все новые модули, попадающие в сборку, добавляются только в секцию dependencies package.json; все модули из bower.json при необходимости обновления переносятся в package.json.__



<a name="%D0%98%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8"></a>
# Источники

- https://www.reg.ru/coding_standards
- http://arcturo.github.io/library/coffeescript/04_idioms.html
- http://awardwinningfjords.com/2011/05/13/coffeescript-specific-style-guide.html
- http://coffeescript.org/
- http://cssguidelin.es/
- http://csswizardry.com/2014/08/css-guidelines-2-0-0/
- http://emmet.io/blog/sublime-tern/
- http://eslint.org/
- http://flowtype.org/
- http://forwebdev.ru/css/about-postcss/
- http://frontender.info/why-coding-style-matters/
- http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
- http://habrahabr.ru/company/uprock/blog/204848/
- http://habrahabr.ru/post/189872/
- http://habrahabr.ru/post/236047/
- http://isobar-idev.github.io/code-standards/
- http://jscode.org/readable
- http://jscs.info/overview
- http://jshint.com/docs/options/
- http://jstherightway.org/
- http://lab.abhinayrathore.com/jquery-standards/
- http://mdo.github.io/code-guide/
- http://primercss.io/guidelines/
- http://rdio.github.io/jsfmt/
- http://rizzo.lonelyplanet.com/documentation/general/development-principles
- http://sass-guidelin.es/#syntax--formatting
- http://semver.org/lang/ru/
- http://sixrevisions.com/css/css-style-guides/
- http://sokolovstas.github.io/SublimeWebInspector/
- http://stackoverflow.com/questions/1286829/is-there-a-preferred-way-of-formatting-jquery-chains-to-make-them-more-readable
- http://stylelint.io/
- http://sublimelinter.readthedocs.org/en/latest/linter_settings.html
- http://template-toolkit.org/
- http://workmanship.io/
- http://www.coffeelint.org/
- http://www.instantshift.com/2015/08/10/sublime-text-plugins/
- http://www.w3schools.com/js/js_reserved.asp
- https://contribute.jquery.org/style-guide/js/
- https://css-tricks.com/css-style-guides/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://gist.github.com/bobbygrace/9e961e8982f42eb91b80
- https://gist.github.com/gvn/7536832
- https://gist.github.com/isaacs/357981
- https://github.com/73rhodes/Sublime-Flow
- https://github.com/airbnb/javascript
- https://github.com/bendc/frontend-guidelines
- https://github.com/danielstjules/jsinspect
- https://github.com/davidtheclark/stylelint-selector-bem-pattern
- https://github.com/dmnsgn/sublime-cssfmt
- https://github.com/gilt/postcss-less
- https://github.com/int3h/SublimeFixMacPath
- https://github.com/katspaugh/tern-coffee
- https://github.com/kungfusheep/SublimeLinter-contrib-stylelint
- https://github.com/millermedeiros/esformatter/
- https://github.com/morishitter/cssfmt
- https://github.com/necolas/idiomatic-css
- https://github.com/necolas/idiomatic-css/tree/master/translations/ru-RU
- https://github.com/polarmobile/coffeescript-style-guide
- https://github.com/Seravo/js-winning-style
- https://github.com/SublimeLinter/SublimeLinter-flow
- https://github.com/uprock/javascript
- https://google.github.io/styleguide/javascriptguide.xml
- https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D0%B3%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F
- https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%81%D1%82%D1%83%D0%BF_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
- https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82_%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D0%B4%D0%B0
