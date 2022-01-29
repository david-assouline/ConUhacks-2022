import React, { useEffect, useState } from "react";
import styled from "styled-components";
import World from "./d3-map";
import { Layers } from "../Layers";


const Map = () => {
    const [data, setData] = useState<ApiResponse>({
        filters: ['Filter 1', 'Filter 2'],
        data: {
            "Canada": {
                "f1": 2
            }
        }
    });

    useEffect(() => {
        new World();
        // w.render(data);
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