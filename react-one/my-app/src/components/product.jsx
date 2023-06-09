export default function Product() {
  const products = ['macbook', 'Monitor ', 'Rassberry Pi ', '32 GB RAM'];
  return (
    <div>
      {products.map((product) => (
        <h3>{product}</h3>
      ))}
    </div>
  );
}
