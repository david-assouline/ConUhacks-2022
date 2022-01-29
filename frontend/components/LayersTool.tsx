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
            {showLayers && <LayersContainer layers={layers} />}
        </LayerWrapper>
    );
}

const LayerWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;

    > div {   
        &:hover {
            border: 3px solid grey;
            border-radius: 5px;
        }
    }
`

const IconLayerWrapper = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`