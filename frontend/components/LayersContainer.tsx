import { Layer } from "./Layer";
import styled from "styled-components";
import {ILayer} from "./LayersTool";
import { projections } from "./map/d3-map";

interface IProps {
    layers: ILayer[];
    setProjection: React.Dispatch<React.SetStateAction<projections>>;
}

const LayersContainer = (props: IProps) => {
    return <Container>
        {props.layers.map((layer: ILayer) => <Layer key={layer.icon} layer={layer} setProjection={props.setProjection} />)}
    </Container>
}

const Container = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    color: ${props => props.theme.colours.toolOverlay.color};
    display: flex;
    height: 75px;
    column-gap: 5px;

    > div {
        &:hover {
            border-color: grey;
            cursor: pointer;
        }
    }
`

export default LayersContainer;