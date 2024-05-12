import { MdOutlineBedroomChild } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";


const RoomDetails = () => {
    const room = useLoaderData();
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)
    const { _id, Room_Image, Room_Name, Room_Description, Price, Adults, Room_Size } = room;

    const handleFormSubmission = async e => {
        e.preventDefault()
        // if (user?.email === buyer?.email)
        //     return toast.error('Action not permitted!')
        const form = e.target
        const roomId = _id
        // const price = parseFloat(form.price.value)
        // if (price < parseFloat(min_price))
        //     return toast.error('Offer more or at least equal to Minimum Price.')
        // const comment = form.comment.value
        const deadline = startDate
        const email = user?.email
        // const buyer_email = buyer_email
        const status = 'Pending'

        const bookData = {
            roomId,
            Price,
            deadline,
            Room_Name,
            Room_Image,
            status,
            email,
        }
        console.table(bookData)
            try {
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/book`,
                    bookData
                )
                console.log(data)
            } catch (err) {
                console.log(err)
                console.log('Hi, i am error', err.message)
            }
    }
    return (
        <div>
            <div className="grid my-8 gap-8 md:grid-cols-4 px-4 container mx-auto">
                <div className="md:col-span-3 py-6 rounded-2xl">
                    <div>
                        <img src={Room_Image} alt="" />
                    </div>
                    <h1 className="text-3xl font-bold mt-5 mb-5">{Room_Name}</h1>
                    <h2 className="text-2xl font-semibold mt-5 mb-5">Kinsley is waiting for you!</h2>
                    <p className="text-base text-gray-500">{Room_Description}</p>
                </div>
                <div className="py-6">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-3">
                            <MdOutlineBedroomChild className="text-xl"></MdOutlineBedroomChild>
                            <span className="">Adults: {Adults}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3">
                            <MdOutlineBedroomChild className="text-xl"></MdOutlineBedroomChild>
                            <span className="">Size: {Room_Size}</span>
                        </div>
                    </div>
                    <div className="px-4 py-3 mt-4">
                        <p>Prices start at:</p>
                        <div className="flex gap-2 mx-auto">
                            <span className="text-green-500 text-xl font-bold">${Price}</span>
                            <p>per night</p>
                        </div>
                    </div>
                    <form onSubmit={handleFormSubmission}>
                        <div className='flex flex-col gap-2 ml-3 mt-5'>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 w-full rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className='flex justify-end mt-6 ml-3'>
                            <button
                                type='submit'
                                className='bg-blue-700 text-white btn w-full'>
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;