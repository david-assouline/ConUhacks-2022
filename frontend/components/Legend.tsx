import * as React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
    filters: string
}

export const Legend = (props: any) => {
    return (
        <Container>
            <DropDown aria-label="Default select example">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </DropDown>
            <Seperator/>
            <SquareBox>
                <SquareTextLeft>Low</SquareTextLeft>
                {['1', '2', '3', '4', '5'].map(x => <LegendSquare key={x} color={`color${x}`}/>)}
                <SquareTextRight>High</SquareTextRight>
            </SquareBox>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border-radius: 8px;
    bottom: 33px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    color: ${props => props.theme.colours.toolOverlay.color};
    display: flex;
    height: 36px;
    left: calc(50% - 100px);
    justify-content: space-evenly;
    position: absolute;
    width: 300px;
`
const SquareBox = styled.div`
    align-items: center;
    column-gap: 2px;
    display: flex;
`

const LegendSquare = styled.div<{color: string}>`
    background-color: ${props => props.theme.colours.legend[props.color]};
    height: 7px;
    width: 18px;
`

const Seperator = styled.div`
    height: 100%;
    width: 1px;
    background-color: #ececec;
`

const DropDown = styled(Form.Select)`
    border: none !important;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;

    &:focus {
        border: none;
        outline: none;
    }

    &:focus-within {
        border: none;
        outline: none;
    }
`

const SquareTextLeft = styled.div`
    margin-right: 3px;
`

const SquareTextRight = styled.div`
    margin-left: 3px;
`