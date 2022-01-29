import styled from "styled-components";

export const Legend = (props: any) => {
    const image = props.image;
    return (
        <LayerWrapper>
            {/* <LayerContainer background={image} /> */}
        </LayerWrapper>
    );
}

const LayerWrapper = styled.div`
    height: 100px;
    width: 100px;
    position: absolute;
    background-color: grey;
    bottom: 15px;
    left: 15px;
`

const LayerContainer = styled.div<{ background: any }>`
    background-image: ${props => props.background};
    width: 100px;
    height: 100px;
    & :hover {
        border: 1em solid grey;
    }
`