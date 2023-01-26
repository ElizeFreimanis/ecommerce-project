import * as S from "./styled";
import { useState } from "react";

export default function SearchField() {
  const [open, setOpen] = useState(false);

  const toggleSearchField = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <S.Container>
      <S.SearchIcon onClick={toggleSearchField} />
      {open && (
        <S.SearchField
          type="search"
          placeholder="Search for products here..."
        />
      )}
    </S.Container>
  );
}
