import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MainTheme } from '../../styles/themes/MainTheme';
import topoJSONdata from './topo2.json';


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
    private segments: any;

    private data: any;

    constructor() {
        this.svg = d3
            .select("#WorldMap")
            .append('svg')
            .attr('id','worldMapD3')
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .attr("max-width", "100%")
            .attr("top", "300px")
            .attr("width", "50%")
            .attr("height", "50%");

        // Init projection stuff
        this.projection = d3.geoOrthographic();
        this.projection.scale();
        this.path = d3.geoPath().projection(this.projection);

        this.svg
            .append('path')
            .attr('d', this.path({ type: "Sphere" }))
            .attr("fill", MainTheme.colours.ocean)
            .append('g');

        // Get the topoJSON country data
        const countries: any = feature(topoJSONdata as any, (topoJSONdata as any).objects.countries);
        this.data = this.svg.selectAll(".segment")
            .data(countries.features)
            .enter().append("path")
            .attr("class", "segment")
            .attr("d", this.path);

        this.enableRotation();
        this.segments = this.svg.selectAll('.segment');
    }

    private enableRotation = () => {
        d3.timer((elapsed) => {
            this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
            this.segments.attr('d', this.path);
        });
    }
}