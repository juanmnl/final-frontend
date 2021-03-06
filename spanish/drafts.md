## Valores, tipos y operadores.

---

### ¿Qué són los valores en javascript?

Se definen como 'valores' los fragmentos de memoria en los que almacenamos
datos.

Existen 6 'tipos' básicos de valores.

* Números
* Texto (string)
* Booleanos
* Objetos
* Funciones
* Valores indefinidos

### Números

Es un valor del tipo número, aquel que se compone de números enteros (1..13) y/o
fracciones (3.141516).

Limite de 64 bits. _(calculo de números)_

Aritmética

Explicar **PEMDAS**

EJ.

```js
1 + 10 * 4 + 1 * 6 / 2;
// 44
```

Operadores

Los operadores son uno de los elementos fundamentales en cualquier lenguaje de
programación, ya que son los que nos permiten trabajar con variables y datos.

* `+ suma`
* `- resta`
* `* multiplicación`
* `/ división`
* `% módulo (resto)`
* `++ Suma tipográfica`
* `-- Resta tipográfica`

### Texto (strings)

Es un valor de tipo texto, aquel que encierra entre comillas un grupo de letras
o números. No importa si las comillas son dobles o simples, siempre y cuando se
comience y termine con las mismas.

`'texto' es igual a "texto"`

`'texto" -> error`

EJ.

```javascript
var texto = 'Esto es un string de texto';
var texto2 = 'Esto también es un string válido';
```

Operadores

* `+ concatenación`
* `\ escape de caractér (\n = salto de linea)`

### Booleanos

Es un valor de tipo booleano, aquel que se define como resultado de dos
posibilidades:

* `True o False (verdadero o falso)`

_Se puede determinar como una respuesta simple a una pregunta o el encendido y
apagado de un aparato._

* `Si o No`
* `On o Off`

EJ.

```javascript
console.log(3 > 2);
// true
console.log(2 > 3);
// false
```

Operadores de comparación (binarios)

* `> mayor`
* `< menor`
* `>= mayor o igual`
* `<= menor o igual`
* `== igual`
* `!= no es igual`

Operadores lógicos (binarios)

* `&& y`
* `|| o`
* `! invierte o niega el valor adjunto. (!false == true)`

EJ.

```javascript
console.log(10 > 5 && 10 * 10 > 50);
// true
```

Operadores conditionales (ternarios)

Si es falso (false), nos regresa el primer valor, si es verdadero (true), el
segundo.

* `? :`

EJ.

```javascript
console.log(false ? 1 : 2);
// 1
```

### Expresiones y "Statements"

_(buscar palabra para reemplazar statements)_

### Objetos

### Funciones

### Valores indefinidos
