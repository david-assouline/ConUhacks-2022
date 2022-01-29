import * as d3 from 'd3';
import {feature} from 'topojson-client';
// import places from "../Data/places.json";

export default class World {

    private svg: any;
    private projection: d3.GeoProjection;
    private pathGenerator: any;

    constructor() {
        // this.projection = d3.geoOrthographic();
        this.projection = d3.geoNaturalEarth1();
        this.pathGenerator = d3.geoPath().projection(this.projection);

        let zoom: any = d3.zoom()
        .scaleExtent([0.9, 25])
        .on("zoom", () => {
            // @ts-ignore
            this.svg.attr("transform", d3.event.transform);
            // @ts-ignore
            let k = d3.event.transform.k;
            let dim = Math.floor(10 / Math.sqrt(k)) - 1;  
            this.svg.selectAll(".pin").attr("height", dim + "px").attr("width", dim + "px").attr("transform", "translate(0, -" + dim + ")");
        });

        this.svg = d3.select("#WorldMap")
                    .append("svg")
                    .attr("viewBox", "0 0 960 500")
                    .attr("max-width", "100%")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .append("g")
                    .call(zoom)
                    .append("g");

        d3.json("https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-50m.json")
            .then(((data: any) => {
                this.render(feature(data, data.objects.countries));
            }));
    }
    render(data: any) {
        // this.svg.append('path')
        //     .attr('d', this.pathGenerator({type: "Sphere"}))
        //     .attr("fill", "rgb(32 33 35)");

        // this.svg.selectAll('path')
        //     .data(data.features)
        //     .enter().append('path')
        //     .attr('d', this.pathGenerator);
    }
}