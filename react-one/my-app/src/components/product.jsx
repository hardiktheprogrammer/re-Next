export default function Product() {
  const products = ['macbook', 'Monitor ', 'Rassberry Pi ', '32 GB RAM'];

  const productlist = products.map((product) => <h3>{product}</h3>);

  return;
  <div>{productlist}</div>;
}
