import styled from "styled-components";

interface IProps {
    imagePath: string;
}

export const Layer = (props: IProps) => {
    return <LayerContainer>
        <img src={props.imagePath} alt={`Layer ${props.imagePath}`} />
    </LayerContainer>
}

const LayerContainer = styled.div`
    height: 100px;
    width: 100px;
    padding-right: 3px;
    border-radius: 1px;
    
    & :hover {
        border: 1px solid grey;
    }
`