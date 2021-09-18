import { useContext } from "react";
import {
  ProductStateContext,
  ProductDispatchContext,
  FetchingContext,
} from "../App";
import Sorter from "./Sorter";
import "./Selector.css";

const Selector = () => {
  const isFetching = useContext(FetchingContext);
  const productState = useContext(ProductStateContext);
  const productDispatch = useContext(ProductDispatchContext);

  const handleCategoryButton = (event) => {
    productDispatch({ type: "changeCategory", payload: event.target.name });
  };

  return (
    <div>
      <div>
        <p>Pilih kategori produk : </p>
        {isFetching ? (
          <b>Loading...</b>
        ) : (
          <ul>
            {productState.categories.map((category, index) => (
              <button
                key={index}
                name={category}
                onClick={handleCategoryButton}
              >
                {category}
              </button>
            ))}
          </ul>
        )}
        {!isFetching && <p>{productState.selectedCategory} terpilih</p>}
      </div>
      <Sorter />
    </div>
  );
};

export default Selector;
