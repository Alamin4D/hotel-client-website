import { MdOutlineBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";

const Featured = ({ room }) => {
    const { _id, Room_Image, Room_Name, Room_Description, Price, Adults } = room;
    return (
        <Link to={`/room/${_id}`}>
            <div className="card bg-base-100 shadow-lg">
                <figure className="px-3 pt-10 hover:scale-[1.05] transition-all">
                    <img src={Room_Image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body space-y-4">
                    <div className="flex items-center gap-2">
                        <MdOutlineBedroomChild className="text-xl"></MdOutlineBedroomChild>
                        <span className="text-gray-500">Adults: {Adults}</span>
                    </div>
                    <h2 className="card-title font-semibold text-center text-gray-800 capitalize lg:text-2xl">{Room_Name}</h2>
                    <p title={Room_Description} className='text-base text-gray-500'>
                        {Room_Description.substring(0, 110)}...
                    </p>
                    <div className="card-actions items-center justify-between">
                        <div className="flex gap-2">
                            <p className="text-green-500 font-extrabold text-lg">${Price}</p>
                            <span className="text-gray-500">per night</span>
                        </div>
                        <button className="btn bg-blue-700 text-white">Book</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Featured;