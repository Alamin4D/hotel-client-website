import { useEffect, useState } from "react";
import Featured from "../components/Featured";
import axios from "axios";



const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
            setRooms(data)
        }
        getData()
    }, [])
    return (
        <div className="container px-4 mx-auto">
            {/* Romms */}
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    rooms.map(room => <Featured key={room._id} room={room} />)
                }
            </div>
        </div>
    );
};

export default Rooms;