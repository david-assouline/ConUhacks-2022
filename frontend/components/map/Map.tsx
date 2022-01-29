import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Layers } from "../Layers";
import { Legend } from "../Legend";
import { SearchBar } from "../SearchBar";
import World from "./d3-map";


const Map = () => {
    const [data, setData] = useState<ApiResponse>({
        filters: ['Filter 1', 'Filter 2'],
        data: {
            "Canada": {
                "f1": 2
            }
        }
    });

    const [world, setWorld] = useState<any>(null);

    useEffect(() => {
        if (world === null)
            setWorld(new World());
    }, []);

    useEffect(() => {
        if (world && data)
            world.render(data)
    }, [data.data, world])

    return <>
        <WorldMapStyles id="WorldMap">
            <SearchBar/>
            <Layers/>
            <Legend/>
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
        stroke-width: 0.3px;
    }
`

export default Map;