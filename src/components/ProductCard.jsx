export default function ProductCard({ product, onViewDetails }) {
    return (
        <article className="product-card">
            <h2>{product.title}</h2>
            <p>{product.category}</p>

            <strong>
                {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </strong>

            <button
                type="button"
                onClick={() => onViewDetails(product.id)}
            >
                Ver detalhes
            </button>
        </article>
    );
}