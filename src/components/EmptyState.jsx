/**
 * EmptyState — Componente que se muestra cuando no hay elementos
 * que coincidan con el filtro activo.
 */
function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">☕</div>
      <h3 className="empty-state__title">No hay cafés disponibles</h3>
      <p className="empty-state__text">
        En este momento no hay ítems que coincidan con tu búsqueda.
        Intenta con otro filtro.
      </p>
    </div>
  );
}

export default EmptyState;
