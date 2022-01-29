import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

    useEffect(() => {
        new World();
        // w.render(data);
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