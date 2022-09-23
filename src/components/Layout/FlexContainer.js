import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: ${(props) => props.alignItems && props.alignItems};
`;

export default function FlexContainer({ children, alignItems }) {
    return <Container alignItems={alignItems}>{children}</Container>;
}
