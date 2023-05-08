import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
      <h5 className="text-6xl font-bold text-red-500">This is h ome</h5>
      <h4>{tshirts.length}</h4>
    </div>
  );
};

export default Home;
