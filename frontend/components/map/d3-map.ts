import * as d3 from 'd3';
import { feature } from 'topojson-client';
// import places from "../Data/places.json";

export default class World {

    private width = 960;
    private height = 500;

    // Order of the data
    private svg: any;
    private g: any;
    private svgCountries: any;

    private projection: d3.GeoProjection;
    private pathGenerator: any;

    private zoom: any;

    constructor() {
        // this.projection = d3.geoOrthographic();
        this.projection = d3.geoNaturalEarth1();
        this.pathGenerator = d3.geoPath().projection(this.projection);

        this.zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", this.zoomed);

        this.svg = d3.select("#WorldMap")
            .append("svg")
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .attr("max-width", "100%")
            .attr("width", "100%")
            .attr("height", "100%")
            .on("click", this.reset);

        this.g = this.svg.append("g");

        Promise.all([
            d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
            d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
        ]).then(([tsvData, topoJSONdata]) => {
            // Gets the country names with iso number
            const countryName = tsvData.reduce((accumulator, d) => {
                accumulator[d.iso_n3] = d.name;
                return accumulator;
            }, {});

            // Get the topoJSON country data
            const countries: any = feature(topoJSONdata as any, (topoJSONdata as any).objects.countries);

            // 
            this.svgCountries = this.g
                .append("g")
                .selectAll('path')
                .data(countries.features)
                .enter()
                .append('path')
                .attr('class', 'country')
                .attr('d', this.pathGenerator)
                .attr('fill', (d) => {
                    return countryName[d.id] === 'Canada' ? 'pink' : 'blue';
                })
                .on("click", this.clicked);

            this.svgCountries
                .append('title')
                .text(d => countryName[d.id]);

            this.svg.call(this.zoom);

        });
    }

    private reset = () => {
        this.svgCountries.transition().style("fill", null);
        this.svg.transition().duration(750).call(
            this.zoom.transform,
            d3.zoomIdentity,
            d3.zoomTransform(this.svg.node()).invert([this.width / 2, this.height / 2])
        );
    }

    private zoomed = (event: any) => {
        const { transform } = event;
        this.g.attr("transform", transform);
        // this.g.attr("stroke-width", 1 / transform.k);
    }

    private clicked = (event, d) => {
        console.log(d, event);
        const [[x0, y0], [x1, y1]] = this.pathGenerator.bounds(d);
        event.stopPropagation();
        this.svg.transition().style("fill", null);
        d3.select(event.srcElement).transition().style("fill", "red");
        this.svg.transition().duration(750).call(
            this.zoom.transform,
            d3.zoomIdentity
                .translate(this.width / 2, this.height / 2)
                .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / this.width, (y1 - y0) / this.height)))
                .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
            d3.pointer(event, this.svg.node())
        );
    }

    render(data: any) {
        this.svg.append('path')
            .attr('d', this.pathGenerator({ type: "Sphere" }))
            .attr("fill", "rgb(32 33 35)");

        this.svg.selectAll('path')
            .data(data.features)
            .enter().append('path')
            .attr('d', this.pathGenerator);
    }
}

