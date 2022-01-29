import styled from "styled-components";

interface IProps {
    imagePath: string;
}

export const Layer = (props: IProps) => {
    return <LayerContainer>
        <img height="50px" width="50px" src={props.imagePath} alt={`Layer ${props.imagePath}`} />
    </LayerContainer>
}

const LayerContainer = styled.div`
    height: 50;
    width: 50px;
    margin-right: 10px;
    border-radius: 5px;
`