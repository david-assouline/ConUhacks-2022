import * as React from "react";
import styled from "styled-components";

import { Layers as LayerIcon } from 'react-feather';
import LayersContainer from "./LayersContainer";

export const LayersTool = () => {
    const [showLayers, setShowLayers] = React.useState(false);
    const layers: string[] = ["/layer-globe.png", "/layer-flat.png"];
    return (
        <LayerWrapper>
            <IconLayerWrapper 
                    onMouseOver={() => setShowLayers(true)} 
                    onMouseLeave={() => setShowLayers(false)}
            >
                <LayerIcon />
            </IconLayerWrapper>
            {showLayers && <LayersContainer layers={layers}/>}
        </LayerWrapper>
    );
}

const LayerWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
`

const IconLayerWrapper = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`