export default function Product() {
  //   const products = ['macbook', 'Monitor ', 'Rassberry Pi ', '32 GB RAM'];

  //   const productList = products.map((product) => <h3 key={product}>{product}</h3>);

  //   return <div>{productList}</div>;
  // }

  const products = [
    { id: 1, name: '1- phone', price: 300 },

    { id: 2, name: 'Samshung phone', price: 600 },
    { id: 3, name: 'Ione Phone', price: 500 },
  ];
  const fruits = ['apple', 'android', 'Linux'];
  const fruitList = fruits.map((fruits, index) => <h3 key={index}>{fruits}</h3>);

  return <div>{fruitList}</div>;
}
