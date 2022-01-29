import styled from "styled-components";

export const Layer = (props: any) => {
    const image = props.image;
    return <LayerContainer background={image}>Layer</LayerContainer>
}

const LayerContainer = styled.div<{background: any}>`
    background-image: ${props => props.background};

    & :hover {
        border: 1em solid grey;
    }
`