
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Rooms from "./Rooms";
import MapSection from "../components/MapSection";
import { Helmet } from "react-helmet";


const Home = () => {
    const rooms = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
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
            <MapSection />
        </div>
    );
};

export default Home;