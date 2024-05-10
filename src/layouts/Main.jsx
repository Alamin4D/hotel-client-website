import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <h1 className="font-lato text-3xl">Main</h1>
           <Outlet /> 
        </div>
    );
};

export default Main;