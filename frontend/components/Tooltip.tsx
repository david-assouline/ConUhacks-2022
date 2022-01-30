import * as React from "react";
import styled from "styled-components";

const Tooltip = () => {
    return <Container id="tooltip-container">
        <Title id="tooltip-title">Test</Title>
        <Description/>
    </Container>
}

const Container = styled.div`
    display: none;
    position: absolute;
    width: 100px;
    height: 160px;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`

const Description = styled.div``

export default Tooltip;