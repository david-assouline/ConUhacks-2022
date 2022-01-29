import * as React from "react";
import styled from "styled-components";

import { Layers as LayerIcon } from 'react-feather';
import LayersContainer from "./LayersContainer";

export const LayersTool = () => {
    const [showLayers, setShowLayers] = React.useState(false);
    const layers: string[] = ["/layer-globe.png", "/layer-flat.png"];
    return (
        <LayerWrapper 
            onMouseOver={() => setShowLayers(true)}
            onMouseLeave={() => setShowLayers(false)}>
            <IconLayerWrapper>
                <LayerIcon />
            </IconLayerWrapper>
            { <LayersContainer layers={layers} />}
        </LayerWrapper>
    );
}

const LayerWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
    column-gap: 10px;

    > div {
        &:hover {
            border-color: grey;
            cursor: pointer;
        }
    }
`

const IconLayerWrapper = styled.div`
    height: 75px;
    width: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border: 3px solid transparent;
    border-radius: 5px;
`