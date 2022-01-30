import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MainTheme } from '../../styles/themes/MainTheme';
import tsvData from './tsvData';
import topoJSONdata from './topo.json';


export default class WorldSphere {

    private width = 960;
    private height = 500;
    private config: any = {
        speed: 0.005,
        verticalTilt: -10,
        horizontalTilt: 0
    }

    private countryName;

    // SVG elements in their nested order
    private svg: any;

    // Projection stuff to display the map
    private projection: d3.GeoProjection = d3.geoOrthographic();
    private path: d3.GeoPath<any, d3.GeoPermissibleObjects>;

    private data: any;

    constructor() {

        // Gets the country names with iso number
        this.countryName = tsvData.reduce((accumulator, d) => {
            accumulator[d.iso_n3] = {
                name: d.name,
                postal: d.iso_a2
            };
            return accumulator;
        }, {});

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

        // Get the topoJSON country data
        const countries: any = feature(topoJSONdata as any, (topoJSONdata as any).objects.countries);
        this.data = this.svg.selectAll(".segment")
            .data(countries.features)
            .enter().append("path")
            .attr("class", "segment")
            .attr("d", this.path);

        this.enableRotation();
    }

    private enableRotation = () => {
        d3.timer((elapsed) => {
            this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
            this.svg.selectAll(".segment").attr("d", this.path);
        });
    }

    render(data: any, filter: string) {
        const {color1, color2, color3, color4, color5} = MainTheme.colours.legend;
    
        var colors = d3.scaleQuantize()
        .domain([data.result[filter].min, data.result[filter].max])
        //@ts-ignore
        .range([color1, color2, color3, color4, color5]);

        this.data
        .style('fill', (d) => {
            console.log("SADF");
            const countryData = data.result.data[this.countryName[d.id].postal];
            return colors(countryData ? countryData[filter] : 0);
        })
    }
}