import { Layer } from "./Layer";

interface IProps {
    layers: string[]
}

const LayersContainer = (props: IProps) => {
    return <>
        {props.layers.map((layer: string) => <Layer key={layer} imagePath={layer} />)}
    </>
}

export default LayersContainer;