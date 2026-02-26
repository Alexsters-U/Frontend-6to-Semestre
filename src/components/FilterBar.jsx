/**
 * FilterBar — Gestiona los controles de filtrado visibles para el usuario.
 * Recibe vía props: activeFilter (string) y onFilterChange (callback).
 */
function FilterBar({ activeFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'available', label: 'Disponibles' },
  ];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f.key}
          className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
          onClick={() => onFilterChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
