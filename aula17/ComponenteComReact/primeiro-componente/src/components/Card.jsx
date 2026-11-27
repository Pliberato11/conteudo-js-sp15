

function Card({ titulo, desc, preco }) {

  return(
    <div className="card">
      <h2>{titulo}</h2>
      <p>{desc}</p>
      <strong>{preco}</strong>
    </div>
  );

}

export default Card;

