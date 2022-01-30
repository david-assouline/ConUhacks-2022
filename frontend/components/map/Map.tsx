import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayersTool } from "../LayersTool";
import { Legend } from "../Legend";
import { SearchBar } from "../SearchBar";
// import WorldSphere from "./d3-globe";
import World, { projections } from "./d3-map";


const Map = () => {
    const [projection, setProjection] = useState<projections>(projections.flat);    
    const [filter, setFilter] = useState<string>(null);
    const [world, setWorld] = useState<any>(null);
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

    useEffect(() => {
        console.log("CREATING A WORLD");

        if (world) {
            document.getElementById('worldMapD3').remove();
        }

        // setWorld(new WorldSphere());
        // setWorld(new World(projection));
        setWorld(new World(projections.sphere))
    }, [projection]);

    useEffect(() => {
        console.log("REDRAWING THE WORLD");

        if (world && data)
            world.render(data, filter ? filter : data.filter[0])
    }, [data.data, world, filter])

    return <>
        <WorldMapStyles id="WorldMap">
            <SearchBar/>
            <LayersTool setProjection={setProjection}/>
            <Legend
                filters={data ? data.filter : undefined}
                setFilter={setFilter}
            />
        </WorldMapStyles>
    </>
}

const WorldMapStyles = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    font-family: Roboto;
    max-width: calc(100vw);
    max-height: calc(100vh);
    justify-content: center;
    position: relative;
    overflow: hidden!important;

    & .country {
        fill: ${props => props.theme.colours.country};
        stroke: ${props => props.theme.colours.borders};
        stroke-width: 0.3px;

        &:hover {
            cursor: pointer;
            fill: ${props => props.theme.colours.hoverCountry} !important;
        }
    }
`

export default Map;