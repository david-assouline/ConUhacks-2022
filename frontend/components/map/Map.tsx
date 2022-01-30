import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayersTool } from "../LayersTool";
import { Legend } from "../Legend";
import { SearchBar } from "../SearchBar";
import World, { projections } from "./d3-map";


const Map = () => {
    const [projection, setProjection] = useState<projections>(projections.flat);

    const [data, setData] = useState<ApiResponse>({
        filter: ['Filter 1', 'Filter 2'],
        data: {
            "Canada": {
                "f1": 2
            }
        },
        versions: '1.0',
        resultSuccess: true,
        query: '',
        suggestions: []
    });

    const [world, setWorld] = useState<any>(null);

    useEffect(() => {
        if (world) {
            document.getElementById('worldMapD3').remove();
        }

        setWorld(new World(projection));
    }, [projection]);

    useEffect(() => {
        if (world && data)
            world.render(data)
    }, [data.data, world])

    return <>
        <WorldMapStyles id="WorldMap">
            <SearchBar/>
            <LayersTool setProjection={setProjection}/>
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