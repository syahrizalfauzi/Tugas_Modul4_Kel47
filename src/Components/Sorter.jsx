import { useContext, useEffect, useState } from "react";
import { FetchingContext, ProductStateContext } from "../App";
import ProductCard from "./ProductCard";

const Sorter = () => {
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const isFetching = useContext(FetchingContext);
  const productState = useContext(ProductStateContext);
  const [sortedProducts, setSortedProducts] = useState(
    productState.selectedProducts
  );

  useEffect(() => {
    const sorter = (a, b) => {
      if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
      return 0;
    };

    const newSortedProducts = productState.selectedProducts.sort(sorter);
    setSortedProducts([...newSortedProducts]);
  }, [sortBy, order, productState.selectedProducts]);

  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div>
      Urutkan berdasarkan :
      <select onChange={handleChangeSort}>
        <option value="title">Nama</option>
        <option value="price">Harga</option>
      </select>
      <select onChange={handleChangeOrder}>
        <option value="asc">Menaik (ASC)</option>
        <option value="desc">Menurun (DESC)</option>
      </select>
      {isFetching && <p>Loading...</p>}
      {sortedProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Sorter;
