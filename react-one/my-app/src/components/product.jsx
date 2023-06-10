export default function Product() {
  const products = ['macbook', 'Monitor ', 'Rassberry Pi ', '32 GB RAM'];

  const productList = products.map((product) => <h3 key={product}>{product}</h3>);

  return <div>{productList}</div>;
}
