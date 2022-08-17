import { Color } from "three";
import arcsData from "../assets/arcs-data.json";
import countries from "../assets/globe-min.json";
import { Globe as ThreeGlobe } from "../systems/Globe";
import { genRandomNumbers, hexToRgb } from "../systems/utils";

const ARC_REL_LEN = 0.9; // relative to whole arc
const FLIGHT_TIME = 2000;
const NUM_RINGS = 1;
const RINGS_MAX_R = 3; // deg
const RING_PROPAGATION_SPEED = 3; // deg/sec

const interval = 2;
let deltaGlobe = 0;
let numbersOfRings = [0];

class Globe {
  instance: ThreeGlobe;
  pointsData: {
    size: number;
    order: number;
    color: (t: number) => string;
    label: string;
    lat: number;
    lng: number;
  }[];
  constructor() {
    this.instance = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    });
    this.pointsData = [];

    this._buildData();
    this._buildMaterial();

    this.instance.tick = (delta: number) => this.tick(delta);
  }

  init() {
    this.initCountries(1000);
    this.initAnimationData(1000);
  }

  initCountries(delay: number) {
    setTimeout(() => {
      this.instance
        .hexPolygonsData(
          countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")
        )
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.1)
        .hexPolygonColor((e) => {
          return "rgba(255,255,255, 0.7)";
        });
    }, delay);
  }

  initAnimationData(delay: number) {
    setTimeout(() => {
      this.instance
        .arcsData(arcsData.flights)
        .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
        .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
        .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
        .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
        .arcColor((e: any) => (e as { color: string }).color)
        .arcAltitude((e) => {
          return (e as { arcAlt: number }).arcAlt * 1;
        })
        .arcStroke((e) => {
          return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
        })
        .arcDashLength(ARC_REL_LEN)
        .arcDashInitialGap((e) => (e as { order: number }).order * 1)
        .arcDashGap(15)
        .arcDashAnimateTime((e) => FLIGHT_TIME)
        .pointsData(this.pointsData)
        .pointColor((e) => (e as { color: string }).color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(0.25)
        .ringsData([])
        .ringColor((e: any) => (t: any) => e.color(t))
        .ringMaxRadius(RINGS_MAX_R)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod((FLIGHT_TIME * ARC_REL_LEN) / NUM_RINGS);
    }, delay);
  }

  tick(delta: number) {
    deltaGlobe += delta;

    if (deltaGlobe > interval) {
      numbersOfRings = genRandomNumbers(
        0,
        this.pointsData.length,
        Math.floor((this.pointsData.length * 4) / 5)
      );
      this.instance.ringsData(
        this.pointsData.filter((d, i) => numbersOfRings.includes(i))
      );

      deltaGlobe = deltaGlobe % interval;
    }
  }

  _buildData() {
    const arcs = arcsData.flights;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: 1.0,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        label: arc.from,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: 1.0,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        label: arc.to,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    this.pointsData = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );
  }

  _buildMaterial() {
    const globeMaterial = this.instance.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(0x1d072e);
    globeMaterial.emissive = new Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.9;
  }
}

export { Globe };
