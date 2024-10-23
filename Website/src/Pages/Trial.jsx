import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Trial() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getPById = async () => {
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    const detail = await res.json();
    console.log(detail);

    setDetail(detail);
  };

  useEffect(() => {
    getPById();
  }, []);

  return (
    <div>
      <h1>{detail.title}</h1>
    </div>
  );
}

export default Trial;
