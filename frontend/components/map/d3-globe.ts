import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { MainTheme } from '../../styles/themes/MainTheme';
import tsvData from './tsvData';
import topoJSONdata from './topo2.json';
import emojis from './emojis';


export default class WorldSphere {

    private width = 960;
    private height = 500;
    private config: any = {
        speed: 0.005,
        verticalTilt: -10,
        horizontalTilt: 0
    }

    private countryName;

    private apiData: ApiResponse;
    private filter: string;

    // SVG elements in their nested order
    private svg: any;

    // Projection stuff to display the map
    private projection: d3.GeoProjection = d3.geoOrthographic();
    private path: d3.GeoPath<any, d3.GeoPermissibleObjects>;
    private segments: any;

    private data: any;

    // Tooltip
    private tooltip;
    private tooltipTitle;

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
            .attr("d", this.path)
            .on("mouseover", (event: any, countryInfo: any) => {
                const country = this.countryName[this.padNumbersTo3(countryInfo.id)];
                this.tooltip.style("display", "block");
                try {
                    if (this.apiData) {
                        const countryData = this.apiData.result.data[country.postal];
                        this.tooltipTitle.html(`${country.name} ${emojis[country.postal]} ~ ${countryData ? countryData[this.filter] : 0}`);
                    } else {
                       this.tooltipTitle.html(`${country.name} ${emojis[country.postal]}`);
                    }
                } catch (e) {

                }
            })
            .on("mouseleave", (d: any) => this.tooltip.style("display", "none"))
            .on("mousemove", (d: any, i: any, n: any) => {
                // @ts-ignore
                this.tooltip.style("left", event.clientX + 20 + "px")
                    // @ts-ignore
                    .style("top", event.clientY + "px");
            });

        // Get the tooltip divs
        this.tooltip = d3.select("#tooltip-container");
        this.tooltipTitle = d3.select("#tooltip-title");

        this.enableRotation();
        this.segments = this.svg.selectAll('.segment');
    }

    private padNumbersTo3 = x => x < 100 ? '0' + x : x;

    private enableRotation = () => {
        d3.timer((elapsed) => {
            this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
            this.segments.attr('d', this.path);
        });
    }

    render(data: any, filter: string) {
        const {color1, color2, color3, color4, color5, noDataColor} = MainTheme.colours.legend;
    
        var colors = d3.scaleQuantize()
        .domain([data.result[filter].min, data.result[filter].max])
        //@ts-ignore
        .range([color1, color2, color3, color4, color5]);

        this.data
        .style('fill', (d) => {
            const country = this.countryName[this.padNumbersTo3(d.id)];
            if (!country) {
                console.log("DNW");
                console.log(d.id);
                return noDataColor;
            }
                
            const countryData = data.result.data[country.postal];
            return countryData ? colors(countryData[filter]) : noDataColor;
        });

        this.apiData = data;
        this.filter = filter;
    }
}