import React, { useEffect } from "react";
import styled from "styled-components";
import World from "./d3-map";
import { Layers } from "./Layers";


const Map = () => {
    useEffect(() => {
        new World();
    }, []);

    return <>
        <WorldMapStyles id="WorldMap">
            <Layers/>
        </WorldMapStyles>
    </>
}

const WorldMapStyles = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    max-width: calc(100vw);
    max-height: calc(100vh);
    justify-content: center;
    position: relative;
    overflow: hidden!important;


    & .country {
        fill: ${props => props.theme.colours.country};
        stroke: ${props => props.theme.colours.borders};
    }
`

export default Map;