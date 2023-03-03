import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    topping: string; 
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63ea407c811db3d7ef0a5619.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error with pizza request");
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Downloading...</>;
  }

  return (
    <div className="container">
      <div className="pizza-full">
        <img width={400} src={pizza.imageUrl} alt='pizza'/>
        <div className="detailes">
          <h2>{pizza.title}</h2>
          <p>{pizza.topping}</p>
          <h4>Price: {pizza.price.toFixed(2)} €</h4>
          <Link to='/'>
          <button className="button button--outline button--add">
            <span>Back to shopping</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
