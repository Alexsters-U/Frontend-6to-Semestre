/**
 * SkeletonCard — Tarjeta vacía con efecto shimmer que se muestra
 * mientras se cargan los datos de la API.
 */
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-card__image" />
      <div className="skeleton skeleton-card__title" />
      <div className="skeleton skeleton-card__price" />
      <div className="skeleton skeleton-card__footer" />
    </div>
  );
}

export default SkeletonCard;
