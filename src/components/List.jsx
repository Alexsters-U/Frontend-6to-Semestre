import Card from './Card';
import EmptyState from './EmptyState';
import SkeletonCard from './SkeletonCard';

/**
 * List — Mapea el arreglo de datos y renderiza los <Card /> correspondientes.
 * Muestra skeletons mientras se están cargando los datos, y un EmptyState
 * si la lista filtrada está vacía.
 */
function List({ coffees, loading }) {
  // Estado de carga → mostrar skeletons
  if (loading) {
    return (
      <div className="coffee-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // Sin resultados → Empty State
  if (coffees.length === 0) {
    return (
      <div className="coffee-grid">
        <EmptyState />
      </div>
    );
  }

  // Lista de tarjetas
  return (
    <div className="coffee-grid">
      {coffees.map((coffee) => (
        <Card
          key={coffee.id}
          image={coffee.image}
          name={coffee.name}
          price={coffee.price}
          rating={coffee.rating}
          votes={coffee.votes}
          available={coffee.available}
          popular={coffee.popular}
        />
      ))}
    </div>
  );
}

export default List;
