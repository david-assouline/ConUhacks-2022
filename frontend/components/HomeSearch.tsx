
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Search } from "react-feather";
import styled from "styled-components";

interface IProps {
    onSearch: (query: string) => any,
}

export const HomeSearch = (props: any) => {
    const { onSearch } = props;
    const [query, setQuery] = useState<string>(null);

    return (
        <Container>
                <Input 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    type="text" 
                    placeholder="Search"
                />
                <SearchIcon
                    onClick={() => onSearch(query)}
                />
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
    padding: 0px 10px;
    width: 450px;
`

const Input = styled(Form.Control)`
    border: none;

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${props => props.theme.colours.toolOverlay.color};
    }

    &:focus {
        box-shadow: none !important;
    }
`

const SearchIcon = styled(Search)`
    color: ${props => props.theme.colours.toolOverlay.color};
    
    &:hover {
        color: ${props => props.theme.colours.toolOverlay.hover};
        cursor: pointer;
    }
`