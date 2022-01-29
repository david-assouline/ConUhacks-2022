import React, { useEffect } from "react";
import styled from "styled-components";
import World from "./d3-map";

const Map = () => {
    useEffect(() => {
        new World();
        console.log("in world");
        
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
        fill: #17ff02;
        stroke: #000000;
        stroke-opacity: 1;
        stroke-width: 0.15px;
    }
`

export default Map;