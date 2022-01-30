import styled from "styled-components";
import {ILayer} from "./LayersTool";
import { projections } from "./map/d3-map";

interface IProps {
    layer: ILayer;
    setProjection: React.Dispatch<React.SetStateAction<projections>>;
}

export const Layer = (props: IProps) => {
    const setLayer = () => props.setProjection(props.layer.projection)

    return <LayerContainer>
        <img 
            height="48px" 
            width="48px" 
            src={props.layer.icon} 
            alt={`Layer ${props.layer.text}`} 
            onClick={setLayer}
        />
    </LayerContainer>
}

const LayerContainer = styled.div`
    border-radius: 5px;
    border: 3px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    width: 75px;
`