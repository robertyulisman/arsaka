import React from "react";
import GoogleMapReact from "google-map-react";
import Location from "../../assets/location.png";
import { Fade } from "react-reveal";

const MapCompany = ({ data }) => {
  const AnyReactComponent = () => (
    <div>
      <img className="w-10 h-auto" src={Location} alt="arsaka" />
    </div>
  );
  return (
    <section className="w-full h-[80vh]">
      <div className="h-[100%] w-[100%]  mb-10">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDBP86hLmcLsubmw2iV5B3NvkmI6BRZMxQ",
            libraries: ["places", "geometry", "drawing", "visualization"],
          }}
          center={data.location}
          defaultZoom={14}
          layerTypes={["TrafficLayer", "TransitLayer"]}
        >
          <Fade bottom>
            <AnyReactComponent
              lat={data.location.lat}
              lng={data.location.lng}
              text="My Marker"
            />
          </Fade>
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default MapCompany;
