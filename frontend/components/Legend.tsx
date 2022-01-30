import * as React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
    filters?: string[],
    setFilter: (x: string) => any
}

export const Legend = (props: IProps) => {
    const {filters, setFilter} = props;

    return (
        <Container>
            {
                filters
                ?
                <DropDown 
                    aria-label="Select Filter"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    {filters.map(x => <option value={x} key={x}>{x}</option>)}
                </DropDown>
                :
                <TempDropDown>No Filters</TempDropDown>
            }
            <Seperator/>
            <SquareBox>
                <SquareTextLeft>Low</SquareTextLeft>
                {['1', '2', '3', '4', '5'].map(x => <LegendSquare key={x} color={`color${x}`}/>)}
                <SquareTextRight>High</SquareTextRight>
            </SquareBox>
            <Seperator/>
            <SquareBox>
                <SquareTextLeft>No Data</SquareTextLeft>
                <LegendSquare color={`noDataColor`}/>
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
    left: calc(50% - 200px);
    justify-content: space-evenly;
    position: absolute;
    width: 400px;
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

const TempDropDown = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;
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