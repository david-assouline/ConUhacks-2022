import { Layer } from "./Layer";
import styled from "styled-components";

interface IProps {
    layers: string[]
}

const LayersContainer = (props: IProps) => {
    return <>
        {props.layers.map((layer: string) => <Layer key={layer} imagePath={layer} />)}
    </>
}

export default LayersContainer;