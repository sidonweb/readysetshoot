import iphone from '../assets/iPhone Mockup.png'
// import Galaxy from './ui/Galaxy'
import Navbar from './ui/Navbar'

const Hero = () => {
    return (
        <div className="relative">
            <Navbar />
            <section className='h-screen flex flex-col md:flex-row justify-between px-10 md:px-14 lg:px-32' >
                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src="Hero.mp4" type="video/mp4" />
                </video>
                {/* <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: 'black' }}>
                    <Galaxy />
                </div> */}
            

            <div className='z-10 flex flex-col items-center md:items-start justify-center h-full text-center text-white px-4 gap-4'>
                <h1 className='text-4xl md:text-6xl mb-4 text-center md:text-start md:leading-18 font-[440] '>
                    The Only App <br />
                    You Need To Plan <br />
                    <span className="bg-gradient-to-r from-[#B800FF] via-[#FF6B00] to-[#FF2DCB] bg-clip-text text-transparent">
                        The Perfect Shot.
                    </span>
                </h1>
                <p className='max-w-3xl text-lg mb-6 text-center md:text-start text-[#F1F1F1]'>
                    All the information you need beautifully organized in a clean, focused UI. Exactly where it should've been all along. You'll feel it the moment you use it.
                </p>
                <div className='flex flex-col md:flex-row gap-4 text-base '>
                    <button className='bg-white text-black py-3 px-6 rounded-lg'>Download for IOS</button>
                    <button className='bg-white text-black py-3 px-6 rounded-lg'>Download for Android</button>
                </div>
            </div>
            <img className='hidden md:block md:max-h-96 lg:max-h-10/12 w-auto z-10 self-end' src={iphone} alt="iPhone displaying readysetshoot app" />

        </section>
        </div >
    )
}

export default Hero