import * as React from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { Layers as LayerIcon } from 'react-feather';
import LayersContainer from "./LayersContainer";
import { projections } from "./map/d3-map";

interface IProps {
   setProjection: React.Dispatch<React.SetStateAction<projections>>;
}

export interface ILayer {
    icon: string;
    projection: projections;
    text: string;
}

//@ts-ignore
const svg = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-kfPuZi jmysBI"><polygon stroke="#169be1" points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline stroke="#cb0010" points="2 17 12 22 22 17"></polyline><polyline stroke="#0eab61" points="2 12 12 17 22 12"></polyline></svg>;

export const LayersTool = (props: IProps) => {
    const [showLayers, setShowLayers] = React.useState(false);
    const layers: ILayer[] = [
        {
            icon: "/map.png",
            projection: projections.flat,
            text: 'Flat map'
        },
        {
            icon: "/pin.png",
            projection: projections.sphere,
            text: 'Globe'
        }
    ];

    return (
        <LayerWrapper
            onMouseOver={() => setShowLayers(true)}
            onMouseLeave={() => setShowLayers(false)}>
            <IconLayerWrapper>
                {svg}
            </IconLayerWrapper>
            {showLayers && <LayersContainer layers={layers} setProjection={props.setProjection}/>}
        </LayerWrapper>
    );
}

const LayerWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
    column-gap: 5px;
`

const IconLayerWrapper = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    color: ${props => props.theme.colours.toolOverlay.color};
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border: 3px solid transparent;

    &:hover {
        border-color: grey;
        cursor: pointer;
    }
`