# Solución al código "bad-code"
Este repositorio contiene una solución al código "bad-code", el cual presenta problemas de estructura y manejo de errores. La solución utiliza los hooks useState, useEffect y useRef de React para mejorar la legibilidad y la manejo de la solicitud de datos.

## Descripción del problema
El código original presenta los siguientes problemas:
1. No utiliza los hooks de React para administrar el estado y los efectos.
2. La función fetchData se llama antes de ser declarada, lo cual genera un error.
3. No se manejan adecuadamente los errores durante la solicitud de datos.
4. Hay redundancia en la forma de renderizar el contenido condicionalmente utilizando múltiples operadores ternarios.
# Solución propuesta
La solución propuesta refactoriza el código original utilizando los hooks useState, useEffect y useRef de React. A continuación, se muestran los cambios realizados:

1. Se importan los hooks useState, useEffect y useRef al inicio del archivo.
2. Se utiliza el hook useRef para almacenar la referencia al controlador de aborto.
3. Se reemplazan las variables abortController, isLoading, data y error por estados manejados con los hooks useState.
4. Se define la función fetchData dentro del useEffect y se invoca dentro del mismo.
5. Se manejan los errores utilizando bloques try-catch, mostrando los mensajes de error en caso de fallo.
6. Se utiliza finally para indicar que la carga ha finalizado, independientemente del resultado.
7. Se retorna una función de limpieza en el useEffect para abortar la solicitud en caso de desmontaje del componente.
8. Se simplifica la estructura de renderizado utilizando un solo operador ternario para manejar los diferentes estados.
Con esta solución, se mejora la estructura y el manejo de errores, proporcionando un código más limpio y legible.

## Como usar:
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando npm install.
3. Ejecuta la aplicación utilizando el comando npm start.
4. La aplicación se abrirá en tu navegador y mostrará una lista de publicaciones obtenidas de JSONPlaceholder.
## Contacto

Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto a jorgenahuelbenitez07@gmail.com

