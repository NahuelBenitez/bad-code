import { useEffect, useRef, useState } from "react";

function App() {
  // Usamos useRef para almacenar la referencia al controlador de aborto
  const abortControllerRef = useRef(null);
  // Usamos useState para manejar el estado de isLoading, data y error
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Creamos un nuevo controlador de aborto y lo damos la referencia
    abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      try {
        // Realizamos la solicitud utilizando fetch y el controlador de aborto
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: abortControllerRef.current.signal }
        );

        if (!response.ok) {
          // Si la respuesta no es Ok, enviamos un msj de error
          throw new Error("Error al realizar la solicitud");
        }

        // Convertimos la respuesta a formato JSON
        const jsonData = await response.json();
        // Actualizamos el estado de data 
        setData(jsonData);
        // Limpiamos el estado de error
        setError(null);
      } catch (error) {
        // En caso de error, mostramos el mensaje de error y lo almacenamos en el estado
        console.error("Error al realizar la solicitud:", error.message);
        setError("Error al cargar los datos. Por favor, intenta nuevamente.");
      } finally {
        // Indicamos que la carga ha finalizado actualizando el estado de isLoading
        setIsLoading(false);
      }
    };

    // Llamamos a la funcion para realizar la solicitud 
    fetchData();

    // Retornamos una funcion de limpieza que se ejecutará al desmontar el componente
    return () => {
      // Cancelamos la solicitud abortando el controlador 
      abortControllerRef.current.abort();
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando datos...</p>
      ) : (
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <h1>Publicaciones:</h1>
              <ul>
                {data.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
