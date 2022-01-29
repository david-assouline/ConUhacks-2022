import * as React from "react";
import { Layer } from "./Layer";

import { Layers as LayerIcon } from 'react-feather';

import imageGlobe from "../../images/layer-globe.png";
import imageFlat from "../../images/layer-flat.png";

export const Layers = () => {
    return <>
        <LayerIcon />
        <Layer image={imageGlobe}/>
        <Layer image={imageFlat}/>
    </>
}