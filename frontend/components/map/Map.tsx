import React, { useEffect } from "react";
import styled from "styled-components";
import World from "./d3-map";

const Map = () => {
    useEffect(() => {
        new World();
    }, []);

    return (
        <div>
            <WorldMapStyles id="WorldMap"></WorldMapStyles>
        </div>
    )
}

const WorldMapStyles = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    overflow: hidden!important;


    & .country {
        fill: ${props => props.theme.colours.country};
        stroke: ${props => props.theme.colours.borders};
    }
`

export default Map;