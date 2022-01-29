import { Form } from "react-bootstrap";
import styled from "styled-components";

export const SearchBar = (props: any) => {
    return (
        <Container>
              <Input type="text" placeholder="Search"/>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border-radius: 8px;
    top: 15px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 2%);
    display: flex;
    height: 50px;
    left: 15px;
    justify-content: space-evenly;
    position: absolute;
    width: 350px;
`

const Input = styled(Form.Control)`
    border: none;
`