import styled, { css } from "styled-components";
import fonts from "../../../constants/fonts";
import { FlexContainer } from "../../Layout/FlexContainer";
import colors from "../../../constants/colors";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

const iconStyles = css`
  font-size: 4vw;
`;

export const Container = styled(FlexContainer)`
  text-align: left;
  font-family: ${fonts.montserrat};
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  height: 100px;
  object-fit: cover;
`;

export const InfoContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.h5`
  font-weight: 600;
  color: ${colors.darkBrown};
`;

export const Description = styled.p`
  font-size: 11px;
  padding-top: 1%;
`;

export const Price = styled.p`
  font-size: 12px;
  padding-top: 3%;
`;

export const EditContainer = styled(FlexContainer)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  align-items: center;
  font-family: ${fonts.firaSans};
  width: 80px;
`;

export const AmountContainer = styled(FlexContainer)`
  align-items: center;
  width: 90%;
`;

export const Minus = styled(FiMinus)`
  ${iconStyles}
`;

export const Plus = styled(FiPlus)`
  ${iconStyles}
`;

export const Amount = styled.p`
  margin: 0 5px;
`;

export const Remove = styled(FiTrash2)`
  ${iconStyles}
  flex-shrink: 0;
`;
