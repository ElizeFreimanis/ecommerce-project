import styled from "styled-components";

export const Divider = styled.hr`
    width: ${(props) => (props.width ? props.width : "50px")};
    height: 0.5px;
    border-width: 0;
    margin: auto;
    background-color: black;
`;
