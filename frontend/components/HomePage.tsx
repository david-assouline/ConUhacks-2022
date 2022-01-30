import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HomeSearch } from './HomeSearch';
import WorldSphere from "./map/home-globe";

interface IProps {
    setIS: (x: string) => any
}

const HomePage = (props: IProps) => {
    const { setIS } = props;
    const [world, setWorld] = useState<any>(null);
    const router = useRouter()

    useEffect(() => {
        if (world) {
            document.getElementById('worldMapD3').remove();
        }

        setWorld(new WorldSphere());
    }, []);

    return (
        <div>
            <WorldMapStyles id="WorldMap">
                <div>
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className="clouds"></div>
                </div>
                <HeaderSearch>
                    <Header>MuckMuckGo</Header>
                    <HomeSearch onSearch={setIS}/>
                </HeaderSearch>
            </WorldMapStyles>
        </div>
    )
}

const Header = styled.div`
    color: ${props => props.theme.colours.toolOverlay.color};
    font-size: 50px;
`

const HeaderSearch = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
`

const WorldMapStyles = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    height: 100vh;
    font-family: Roboto;
    max-width: calc(100vw);
    max-height: calc(100vh);
    justify-content: center;
    position: relative;
    overflow: hidden!important;

    & .segment {
        fill: ${props => props.theme.colours.country};
        stroke: ${props => props.theme.colours.borders};
        stroke-width: 0.3px;
    }
`

export default HomePage;