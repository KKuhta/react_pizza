import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63d15b173f08e4a8ff9635c8.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('ERROR');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price} р.</h4>
    </div>
  );
};

export default FullPizza;
