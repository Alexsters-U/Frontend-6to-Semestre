import { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import List from './components/List';

const API_URL =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

function App() {
  // Estado global del catálogo
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lifting State Up: el filtro activo vive en el componente padre
  const [filter, setFilter] = useState('all');

  // Consumo de API con useEffect
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener datos:', err);
        setLoading(false);
      });
  }, []);

  // Filtrado de la lista según el estado activo
  const filteredCoffees =
    filter === 'available'
      ? coffees.filter((c) => c.available)
      : coffees;

  return (
    <>
      {/* Banner de fondo */}
      <div className="hero" />

      {/* Contenedor principal */}
      <main className="main-container">
        <h1>Nuestra Colección</h1>
        <p>
          Explora nuestra selección de cafés de clase mundial elaborados por
          baristas expertos. Ya sea que busques una experiencia nueva o un
          clásico favorito, aquí encontrarás algo para deleitar tu paladar.
        </p>

        {/* Barra de filtros — recibe estado y setter del padre */}
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        {/* Lista de cafés — recibe datos filtrados y estado de carga */}
        <List coffees={filteredCoffees} loading={loading} />
      </main>
    </>
  );
}

export default App;
