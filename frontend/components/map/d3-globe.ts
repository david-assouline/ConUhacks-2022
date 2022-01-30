import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MainTheme } from '../../styles/themes/MainTheme';


export default class WorldSphere {

    private width = 960;
    private height = 500;
    private config: any = {
        speed: 0.005,
        verticalTilt: -10,
        horizontalTilt: 0
    }

    // SVG elements in their nested order
    private svg: any;

    // Projection stuff to display the map
    private projection: d3.GeoProjection = d3.geoOrthographic();
    private path: d3.GeoPath<any, d3.GeoPermissibleObjects>;

    private data: any;

    constructor() {

        this.svg = d3
            .select("#WorldMap")
            .append('svg')
            .attr('id','worldMapD3')
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .attr("max-width", "100%")
            .attr("width", "85%")
            .attr("height", "85%");

        // Init projection stuff
        this.projection = d3.geoOrthographic();
        this.projection.scale();
        this.path = d3.geoPath().projection(this.projection);

        this.svg
            .append('path')
            .attr('d', this.path({ type: "Sphere" }))
            .attr("fill", MainTheme.colours.ocean)
            .append('g');

        d3.json('https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
            .then((worldData: any) => {
                const featureWorldData: any = feature(worldData, worldData.objects.countries);

                this.data = this.svg.selectAll(".segment")
                    .data(featureWorldData.features)
                    .enter().append("path")
                    .attr("class", "segment")
                    .attr("d", this.path);

                this.enableRotation();
            })
    }

    private enableRotation = () => {
        d3.timer((elapsed) => {
            this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
            this.svg.selectAll(".segment").attr("d", this.path);
        });
    }

    render(data: any, filter: string) {
        if (!this.data) setTimeout(() => {
            const { color1, color2, color3, color4, color5 } = MainTheme.colours.legend;

            var colors = d3.scaleQuantize()
                .domain([0, 100])
                //@ts-ignore
                .range([color1, color2, color3, color4, color5]);
            console.log(this.data);

            this.data
                .style('fill', (d) => {
                    return colors(Math.random() * (100));
                })
        }, 700);
    }
}