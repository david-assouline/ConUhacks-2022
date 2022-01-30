import * as React from "react";
import styled from "styled-components";
import { MainTheme } from '../styles/themes/MainTheme';

const Tooltip = () => {
    return <Container id="tooltip-container">
        <Title id="tooltip-title">Test</Title>
        {/* <hr/> */}
        <Description/>
    </Container>
}

const Container = styled.div`
    display: none;
    position: absolute;
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    color: ${props => props.theme.colours.toolOverlay.color};
    padding: 2px 10px;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`

const Description = styled.div``

export default Tooltip;