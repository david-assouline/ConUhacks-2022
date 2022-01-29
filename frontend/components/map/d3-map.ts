import * as d3 from 'd3';
import { feature } from 'topojson-client';
// import places from "../Data/places.json";

export default class World {

    private svg: any;
    private projection: d3.GeoProjection;
    private pathGenerator: any;

    constructor() {
        // this.projection = d3.geoOrthographic();
        this.projection = d3.geoNaturalEarth1();
        this.pathGenerator = d3.geoPath().projection(this.projection);

        let zoom: any = d3.zoom().on('zoom', (event: any) => {
            this.svg.attr('transform', event.transform);
        });

        this.svg = d3.select("#WorldMap")
            .append("svg")
            .attr("viewBox", "0 0 960 500")
            .attr("max-width", "100%")
            .attr("width", "100%")
            .attr("height", "100%")
            .append("g")
            .call(zoom);

        // d3.json("topo.json")
        //     .then(((data: any) => {
        //         this.render(feature(data, data.objects.countries));
        //     }));

        Promise.all([
            d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
            d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
          ]).then(([tsvData, topoJSONdata]) => {
            
            const countryName = tsvData.reduce((accumulator, d) => {
              accumulator[d.iso_n3] = d.name;
              return accumulator;
            }, {});
            
            /*
            const countryName = {};
            tsvData.forEach(d => {
              countryName[d.iso_n3] = d.name;
            });
            */
            
            const countries: any = feature(topoJSONdata as any, (topoJSONdata as any).objects.countries);
            this.svg.selectAll('path').data(countries.features)
              .enter().append('path')
                .attr('class', 'country')
                .attr('d', this.pathGenerator)
                    .attr('fill', (d) => {
                          console.log(countryName);
                          return countryName[d.id] === 'Canada' ? 'pink' : 'blue';
                    })
              .append('title')
                .text(d => countryName[d.id]);
            
          });
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

