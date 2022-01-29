import * as React from "react";
import { Layer } from "./Layer";
import imageGlobe from "../../images/layer-globe.png";
import imageFlat from "../../images/layer-flat.png";

export const Layers = () => {
    return <>
        <Layer />
        <Layer image={imageGlobe}/>
        <Layer image={imageFlat}/>
    </>
}