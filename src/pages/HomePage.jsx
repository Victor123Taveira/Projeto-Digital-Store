import React from "react";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";

const products = [
  {
    name: 'Camiseta Oversized Preta',
    image: '/assets/products/camiseta-preta.jpg',
    price: 129.90,
    priceDiscount: 99.90
  },
  {
    name: 'Calça Cargo Bege',
    image: '/assets/products/calca-cargo.jpg',
    price: 199.90
  },
  {
    name: 'Boné Aba Curva',
    image: '/assets/products/bone.jpg',
    price: 79.90,
    priceDiscount: 59.90
  },
  {
    name: 'Tênis Chunky Branco',
    image: '/assets/products/tenis.jpg',
    price: 299.90
  }
];

const HomePage = () => {
  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <Section
          title="Novidades"
          titleAlign="esquerda"
          link={{ text: 'Ver todos', href: '/produtos' }}
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
