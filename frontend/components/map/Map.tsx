import React, { useEffect } from "react";
import styled from "styled-components";
import World from "./d3-map";

const Map = () => {
    useEffect(() => {
        new World();
    }, []);

    return <WorldMapStyles id="WorldMap"></WorldMapStyles>
}

const WorldMapStyles = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    overflow: hidden!important;

    > * {
        fill: #878787;
        stroke: #595959;
        stroke-opacity: 1;
        stroke-width: 0.15px;
    }
`

export default Map;