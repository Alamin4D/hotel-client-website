

const Slide = ({ image }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[90vh]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/20'>
                <div className='font-lato text-center'>
                    <h1 className='lg:text-6xl text-4xl font-bold text-white'>
                        Welcome to Kinsley
                    </h1>
                    <br />
                    <p className='md:w-2/3 mx-auto text-center text-white text-lg'>Deleniti nostrum laboriosam praesentium quasi quam voluptate.
                    Frycimus suscipit, nam mollitia quidem.</p>
                </div>
            </div>
        </div>
    )
}

export default Slide