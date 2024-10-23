import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getPById = async () => {
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await res.json();
    console.log(data);
    
    setData(data);
  };

  useEffect(() => {
    getPById();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

export default SingleProduct;
