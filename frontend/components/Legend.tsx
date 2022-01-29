import styled from "styled-components";

export const Legend = (props: any) => {
    return (
        <Container>
            <DropDown>Filter 1333effffe</DropDown>
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

const DropDown = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100px;
`

const SquareTextLeft = styled.div`
    margin-right: 3px;
`

const SquareTextRight = styled.div`
    margin-left: 3px;
`