import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

export const Container = styled.div`
  order: 2;
  margin-left: 9%;
  margin-top: 3.5%;
`;

export const SearchIcon = styled(FiSearch)`
  order: 2;
  color: ${colors.white};
  display: flex;
  align-items: center;
  font-size: 25px;
`;

export const SearchField = styled.input`
  width: 100vw;
  position: absolute;
  top: 60px;
  left: 0;
  height: 50px;
  background-color: ${colors.darkBeige};
  border: none;
  opacity: 0.9;
  padding: 10px 10px 10px 20px;
  font-family: ${Fonts.montserrat};
  color: ${colors.darkBrown};
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
