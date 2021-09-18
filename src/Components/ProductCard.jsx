import { useState } from "react";
import './ProductCard.css';

const ProductCard = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  function handleDescriptionButton() {
    setShowDesc((state) => !state);
  }

  return (
    <div style={{ border: "2px solid black" }}>
      <img
        src={props.product.image}
        alt={props.product.title}
        style={{
          height: 256,
        }}
      />
      <h3>{props.product.title}</h3>
      <button onClick={handleDescriptionButton}>
        {showDesc ? "Tutup deskripsi" : "Lihat deskripsi"}
      </button>
      {showDesc && (
        <div>
          <b>Deskripsi produk :</b>
          <p>{props.product.description}</p>
        </div>
      )}
      <p>Harga : {props.product.price} USD</p>
    </div>
  );
};

export default ProductCard;
