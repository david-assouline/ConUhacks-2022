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

export const LayersTool = (props: IProps) => {
    const [showLayers, setShowLayers] = React.useState(false);
    const layers: ILayer[] = [
        {
            icon: "/layer-flat.png",
            projection: projections.flat,
            text: 'Flat map'
        },
        {
            icon: "/layer-globe.png",
            projection: projections.sphere,
            text: 'Globe'
        }
    ];

    return (
        <LayerWrapper
            onMouseOver={() => setShowLayers(true)}
            onMouseLeave={() => setShowLayers(false)}>
            <IconLayerWrapper>
                <LayerIcon />
            </IconLayerWrapper>
            <LayersContainer layers={layers} setProjection={props.setProjection} />
            {/* showLayers && <LayersContainer layers={layers} /> */}
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
    height: 75px;
    width: 75px;
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