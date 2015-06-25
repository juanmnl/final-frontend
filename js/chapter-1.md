## Valores, tipos y operadores.
---

### ¿Qué són los valores en javascript?

Se definen como 'valores' los pedazos de memoria en los que almacenamos datos.

Existen 6 'tipos' básicos de valores.

* Números
* Texto (string)
* Booleanos
* Objetos
* Funciones
* Valores indefinidos

### Números
Es un valor del tipo número, aquel que se compone de números enteros (1..13) y/o fracciones (3.141516).

Limite de 64 bits.
*(calculo de números)*

Aritmética

Explicar **PEMDAS**

EJ.
```javascript
1 + 10 * 4 + (1*6) /2;
```

Operadores

- + suma
- - resta
- * multiplicación
- / división
- % módulo (resto)
- ++ Suma tipográfica
- -- Resta tipográfica

### Texto (strings)
Es un valor de tipo texto, aquel que encierra entre comillas un grupo de letras o números. No importa si las comillas son dobles o simples, siempre y cuando se comience y termine con las mismas.

'texto' es igual a "texto"

'texto" -> error

EJ.
```javascript
var texto = "Esto es un string de texto";
var texto2 = 'Esto también';
```

Operadores
- + concatenación
- \ escape de caractér (\n = salto de linea)


### Booleanos
Es un valor de tipo booleano, aquel que se define como resultado de dos posibilidades:

- True o False (verdadero o falso)

*Se puede determinar como una respuesta simple a una pregunta o el encendido y apagado de un aparato.*

- Si o No
- On o Off

EJ.
```javascript
console.log( 3 > 2 );
// true
console.log( 2 > 3 );
// false
```

Operadores de comparación (binarios)

- > mayor
- < menor
- >= mayor o igual
- <= menor o igual
- == igual
- != no es igual

Operadores lógicos (binarios)

- && y
- || o
- !true o !false

EJ.
```javascript
console.log(10 > 5 && 10 * 10 > 50);
```

Operadores conditionales (ternarios)

- ? :

EJ.
```javascript
console.log(false ? 1:2);
```

### Objetos


### Funciones


### Valores indefinidos
