
import { Map, Marker } from "pigeon-maps"

const MapSection = () => {
    return (
        <div className="container mx-auto px-4 py-10 mt-20">
            <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    );
};

export default MapSection;