import React from "react";
import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";

const images = [
  { src: "/assets/products/camiseta-preta.jpg" },
  { src: "/assets/products/calca-cargo.jpg" },
  { src: "/assets/products/bone.jpg" },
  { src: "/assets/products/tenis.jpg" }
];

const ProductViewPage = () => {
  return (
    <Layout>
      <div style={{ padding: "2rem" }}>
        <h1>Visualização do Produto</h1>
        <Gallery images={images} />
        {/* Aqui você pode adicionar mais detalhes do produto, botão de compra, etc */}
      </div>
    </Layout>
  );
};

export default ProductViewPage;
