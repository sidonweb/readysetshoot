import herovideo from '../assets/Hero.mp4'
import iphone from '../assets/iPhone Mockup.png'
import Navbar from './ui/Navbar'

const Hero = () => {
    return (
        <div className="relative">
            <Navbar />
            <section className='h-screen flex flex-row justify-between px-10 md:px-14 lg:px-28' >
                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src={herovideo} type="video/mp4" />
                </video>

                <div className='z-10 flex flex-col items-start justify-center h-full text-center text-white px-4'>
                    <h1 className='text-4xl md:text-6xl mb-4 text-start'>
                        The Only App <br />
                        You Need To Capture <br />
                        <span className="bg-gradient-to-r from-[#B800FF] via-[#FF6B00] to-[#FF2DCB] bg-clip-text text-transparent">
                            The Perfect Shot.
                        </span>
                    </h1>
                    <p className='max-w-2xl text-lg md:text-xl mb-6 text-start'>
                        All the information you need beautifully organized in a clean, focused UI. Exactly where it should've been all along. You'll feel it the moment you use it.
                    </p>
                    <div>
                        <button className='bg-white text-black py-2 px-4 rounded-lg mr-4'>Download for IOS</button>
                        <button className='bg-white text-black py-2 px-4 rounded-lg'>Download for Android</button>
                    </div>
                </div>
                <img className='max-h-40 w-auto z-10' src={iphone} alt="iPhone displaying readysetshoot app" />

            </section>
        </div>
    )
}

export default Hero