import React, { useEffect, useState } from "react";
import styled from "styled-components";
import search from "../../actions/utils/search";
import { LayersTool } from "../LayersTool";
import { Legend } from "../Legend";
import { SearchBar } from "../SearchBar";
import { Suggestions } from "../Suggestions";
import Tooltip from "../Tooltip";
import WorldSphere from "./d3-globe";
import World, { projections } from "./d3-map";

const Map = () => {
    const [projection, setProjection] = useState<projections>(projections.flat);
    const [filter, setFilter] = useState<string>(null);
    const [world, setWorld] = useState<any>(null);
    const [data, setData] = useState<ApiResponse>(null);

    useEffect(() => {
        console.log("CREATING A WORLD");
        // search('chess grandmasters by country wikipedia');

        if (world) {
            document.getElementById('worldMapD3').remove();
        }

        if (projection === projections.flat) {
            setWorld(new World(projections.flat))
        } else if (projection === projections.sphere) {
            setWorld(new WorldSphere());
        }
    }, [projection]);

    useEffect(() => {
        console.log("REDRAWING THE WORLD");

        if (world && data)
            world.render(data, filter ? filter : data.filters[0])
    }, [data, world, filter])

    const onSearch = (query: string) => {
        search(query)
            .then(x => { setData(x); setFilter(x.filters[0]) });
    }

    const overlays = () => {
        const tools = <>
            <SearchBar
                onSearch={onSearch}
            />
            <LayersTool setProjection={setProjection} />
            <Legend
                filters={data ? data.filters : undefined}
                setFilter={setFilter}
            />
            <Tooltip/>
        </>

        if (projection === projections.sphere) {
            return <div>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                {tools}
            </div>
        } else {
            return tools;
        }
    }

    return (
        <div>
            <WorldMapStyles id="WorldMap">
                {overlays()}
            </WorldMapStyles>
            {/* <Suggestions/> */}
        </div>
    )
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

    & .segment {
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