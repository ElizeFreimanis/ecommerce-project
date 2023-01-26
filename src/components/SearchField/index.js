import * as S from "./styled";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SearchField() {
  const products = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const searchedProducts = products.filter((product) =>
    product.name.includes(search.toUpperCase())
  );

  const toggleSearchField = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const onSearch = (e) => {
    setSearch(e);
  };

  console.log(searchedProducts);

  return (
    <S.Container>
      <S.SearchIcon onClick={toggleSearchField} />
      <div>
        {open && (
          <S.SearchField
            type="search"
            placeholder="Search for products here..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
        {searchedProducts && <div>hej</div>}
      </div>
    </S.Container>
  );
}
