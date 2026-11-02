export default function ProductDetails({
    product,
    loading,
    error,
    onClose
}) {
    return (
        <section className="product-details">
            <button type="button" onClick={onClose}>
                Fechar detalhes
            </button>

            {loading && <p>Carregando detalhes...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && product && (
                <>
                    <h2>{product.title}</h2>
                    <p>Categoria: {product.category}</p>
                    <p>{product.description}</p>

                    <p>
                        Preço: {product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </p>
                </>
            )}
        </section>
    );
}