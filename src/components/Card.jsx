/**
 * Card — Componente reutilizable que muestra la información de un café.
 * Recibe vía props: image, name, price, rating, votes, available, popular.
 */
function Card({ image, name, price, rating, votes, available, popular }) {
  const hasRating = rating !== null && rating !== undefined;

  return (
    <article className="card">
      {/* Imagen + etiqueta "Popular" */}
      <div className="card__image-wrapper">
        <img className="card__image" src={image} alt={name} loading="lazy" />
        {popular && <span className="card__popular-tag">Popular</span>}
      </div>

      {/* Nombre y precio */}
      <div className="card__header">
        <h3 className="card__name">{name}</h3>
        <span className="card__price">{price}</span>
      </div>

      {/* Rating / votos / disponibilidad */}
      <div className="card__footer">
        <div className="card__rating">
          {hasRating ? (
            <>
              <img
                className="card__star"
                src="https://img.icons8.com/fluency/48/star--v1.png"
                alt="star"
              />
              <span className="card__rating-value">{rating}</span>
              <span className="card__votes">({votes} {votes === 1 ? 'voto' : 'votos'})</span>
            </>
          ) : (
            <>
              <img
                className="card__star"
                src="https://img.icons8.com/fluency/48/star--v1.png"
                alt="star"
                style={{ filter: 'grayscale(1)', opacity: 0.4 }}
              />
              <span className="card__no-rating">Sin calificación</span>
            </>
          )}
        </div>

        {!available && <span className="card__sold-out">Agotado</span>}
      </div>
    </article>
  );
}

export default Card;
