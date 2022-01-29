import styled from "styled-components";

interface IProps {
    imagePath: string;
}

export const Layer = (props: IProps) => {
    return <LayerContainer>
        <img height="48px" width="48px" src={props.imagePath} alt={`Layer ${props.imagePath}`} />
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