
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rooms from "./Rooms";


const Home = () => {
    const rooms = useLoaderData();
    return (
        <div>
            <Carousel />
            <div className="container px-6 py-10 mx-auto font-lato">
                <h1 className='text-4xl font-bold text-center text-gray-800 capitalize lg:text-3xl '>
                    Our Best Rooms
                </h1>

                <p className='lg:w-2/3 mx-auto my-6 text-center text-gray-500 '>
                    Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio
                </p>
            </div>
            <Rooms />
        </div>
    );
};

export default Home;