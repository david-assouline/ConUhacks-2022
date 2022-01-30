import styled from "styled-components";
import {ILayer} from "./LayersTool";
import { projections } from "./map/d3-map";

interface IProps {
    layers: ILayer[];
    setProjection: React.Dispatch<React.SetStateAction<projections>>;
}

const LayersContainer = (props: IProps) => {
    const {layers, setProjection} = props;

    return <Container>
        {
            layers.map((layer: ILayer) => {
                return (
                    <LayerContainer
                        onClick={() => setProjection(layer.projection)}
                        key={layer.text}
                    >
                        <StyledImage 
                            height="48px" 
                            width="48px" 
                            src={layer.icon} 
                            alt={`Layer ${layer.text}`} 
                        />
                        <Text>{layer.text}</Text>
                    </LayerContainer>
                )
            })
        }
    </Container>
}

const Container = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colours.toolOverlay.backgroundColor};
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 30%);
    color: ${props => props.theme.colours.toolOverlay.color};
    display: flex;
    height: 80px;
    column-gap: 5px;

    > div {
        &:hover {
            cursor: pointer;
        }
    }
`

const LayerContainer = styled.div`
    align-items: center;
    border-radius: 5px;
    border: 3px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
    width: 75px;

    &:hover > img {
        border-color: ${props => props.theme.colours.toolOverlay.hover};
    }

    &:hover > div {
        color: ${props => props.theme.colours.toolOverlay.hover};
    }
`

const Text = styled.div`
    font-size: 12px;
`

const StyledImage = styled.img`
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 3px;
`

export default LayersContainer;