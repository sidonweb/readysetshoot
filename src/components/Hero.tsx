// import iphone from '../assets/iPhone Mockup.png'
// import Galaxy from './ui/Galaxy'
import Navbar from './ui/Navbar'
import Particles from './ui/Particles'
import AnimatedCount from './ui/AnimateCount';

const Hero = () => {
    return (
        <div className="relative h-screen">
            <Navbar />
            <section className='px-10 md:px-14 lg:px-32 flex justify-center items-center' >
                {/* Background video */}
                {/* <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src="Hero.mp4" type="video/mp4" />
                </video> */}
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: 'black' }}>
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={300}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-0 gap-4 z-10">
                    <div className="bg-black border-2 border-[#4C4C4C] mb-4 px-4 py-2 rounded-full syne text-center">
                        <AnimatedCount
                            from={0}
                            to={1000}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text" /> + Shots Planned and Counting...
                    </div>
                    <h1 className="text-4xl md:text-6xl mb-4 text-center md:leading-[1.15] font-[440]">
                        The Only App You Need <br /> To Plan The Perfect Shot.
                        {/* <span className="bg-gradient-to-r from-[#B800FF] via-[#FF6B00] to-[#FF2DCB] bg-clip-text text-transparent">
                           {" "} The Perfect Shot.
                        </span> */}
                    </h1>
                    <p className="max-w-3xl text-lg mb-6 text-center text-[#F1F1F1]">
                        All the information you need beautifully organized in a clean, focused UI. Everything you need is finally in the right place.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 text-base w-full md:w-auto justify-center items-center">
                        <button className="bg-black text-white border-gray-600 border-2 py-3 px-6 rounded-lg w-full md:w-auto flex flex-row justify-between items-center gap-2"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>Download for IOS</button>
                        <button className="bg-black text-white border-gray-600 border-2 py-3 px-6 rounded-lg w-full md:w-auto flex flex-row justify-between items-center gap-2"> <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>Download for Android</button>
                    </div>
                </div>

            </section>
        </div >
    )
}

export default Hero