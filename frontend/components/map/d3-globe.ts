import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MainTheme } from '../../styles/themes/MainTheme';
import topoJSONdata from './topo.json';
import tsvData from './tsvData';

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

    constructor() {

        this.svg = d3
            .select("#WorldMap")
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);

        // Init projection stuff
        this.projection = d3.geoOrthographic();
        this.projection.scale();
        this.path = d3.geoPath().projection(this.projection);


        d3.json('https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
            .then((worldData: any) => {
                const data: any = feature(worldData, worldData.objects.countries);

                this.svg.selectAll(".segment")
                    .data(data.features)
                    .enter().append("path")
                    .attr("class", "segment")
                    .attr("d", this.path)
                    .style("stroke", "#888")
                    .style("stroke-width", "1px")
                    .style("fill", (d, i) => '#e5e5e5')
                    .style("opacity", ".6");
            })



        this.drawGraticule();
        this.enableRotation();
    }

    private drawGraticule = () => {
        // const graticule = d3.geoGraticule()
        //     .step([10, 10]);

        // this.svg.append("path")
        //     .datum(graticule)
        //     .attr("class", "graticule")
        //     .attr("d", this.path)
        //     .style("fill", "#fff")
        //     .style("stroke", "#ccc");
    }

    private enableRotation = () => {
        d3.timer((elapsed) => {
            this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
            this.svg.selectAll("path").attr("d", this.path);
        });
    }

    render = () => { }
}