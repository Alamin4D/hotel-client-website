import { useEffect, useState } from "react";
import Featured from "../components/Featured";
import axios from "axios";



const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/rooms`)
            setRooms(data)
        }
        getData()
    }, [])
    return (
        <div>
            <div className="container px-4 mx-auto">
                {/* <div>
                        <select
                            value=''
                            name='Price'
                            id='Price'
                            className='border p-4 rounded-lg'>
                            <option value=''>Filter By Price</option>
                            <option value='0'>50</option>
                            <option value='100'>100</option>
                        </select>
                    </div> */}
                <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {
                        rooms.map(room => <Featured key={room._id} room={room} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;