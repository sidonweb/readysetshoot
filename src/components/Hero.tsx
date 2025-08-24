// import iphone from '../assets/iPhone Mockup.png'
// import Galaxy from './ui/Galaxy'
import Navbar from './ui/Navbar'
import Particles from './ui/Particles'
import AnimatedCount from './ui/AnimateCount';
import StarBorder from './ui/StarBorder';

const Hero = () => {
    return (
        <div className="relative h-screen">
            <style>{`
                .rgb-pulse-button {
                    position: relative;
                    overflow: hidden;
                }
                
                .rgb-pulse-button::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 0.4rem;
                    padding: 2px;
                    background: linear-gradient(45deg, 
                        #64ffda, #7c4dff, #ff6ec7, #ffd54f, #64ffda
                    );
                    background-size: 400% 400%;
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: xor;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    animation: rainbow-pulse 5s linear infinite;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .rgb-pulse-button:hover::before {
                    opacity: 1;
                }
                
                @keyframes rainbow-pulse {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .rgb-pulse-button:hover {
                    
                    transition: transform 0.3s ease;
                }
            `}</style>
            <Navbar />
            <section className='px-10 md:px-14 lg:px-32 flex justify-center items-center' >
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

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-0 gap-4 syne  mb-4">
                    <StarBorder
                        className=""
                        color="#5A00FF"
                        speed="5s"
                    >
                        <AnimatedCount
                            from={0}
                            to={1000}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text" />+ Shots Planned and Counting...
                    </StarBorder>

                    <h1 className="text-4xl md:text-6xl mb-4 text-center md:leading-[1.15] font-semibold">
                        The Only App You Need <br className='hidden md:block' /> To Plan The Perfect Shot
                        {/* <span className="bg-gradient-to-r from-[#B800FF] via-[#FF6B00] to-[#FF2DCB] bg-clip-text text-transparent">
                           {" "} The Perfect Shot.
                        </span> */}
                    </h1>
                    <p className="heptaslab max-w-3xl md:text-lg mb-6 text-center text-[#C1C1C1] ">
                        All the information you need beautifully organized in a clean, focused UI. Everything you need is finally in the right place.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 text-base w-full md:w-auto justify-center items-center">

                        <button className="border-2 border-[#222222] group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-[#060606] py-1 pr-5 pl-14 font-medium text-neutral-50">
                            <div className="absolute left-[3px] inline-flex h-12 w-12 items-center justify-start rounded-full bg-[#5A00FF] transition-[width] group-hover:w-[calc(100%-6px)]">
                                <div className="ml-[11px] flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6661 1.29278C17.1702 1.00551 16.5806 0.926875 16.0268 1.07417C15.473 1.22147 15.0003 1.58265 14.7127 2.07831L14.163 3.02176L13.6154 2.07831C13.3276 1.58195 12.8545 1.22023 12.3 1.07272C11.7456 0.925217 11.1553 1.00401 10.6589 1.29176C10.1625 1.57951 9.80082 2.05266 9.65331 2.60711C9.5058 3.16156 9.58459 3.75189 9.87234 4.24825L11.6629 7.33499L5.96522 17.1592H2.1914C1.61807 17.1592 1.06823 17.387 0.662822 17.7924C0.257417 18.1978 0.0296631 18.7476 0.0296631 19.3209C0.0296631 19.8943 0.257417 20.4441 0.662822 20.8495C1.06823 21.2549 1.61807 21.4827 2.1914 21.4827H17.2046L14.7024 17.1592H10.9655L14.163 11.6441L18.4516 4.2503C18.5942 4.00469 18.687 3.73339 18.7246 3.45191C18.7623 3.17042 18.7442 2.88428 18.6712 2.60981C18.5983 2.33535 18.472 2.07795 18.2995 1.85232C18.127 1.62669 17.9118 1.43725 17.6661 1.29483M3.07333 26.6204C3.58227 26.913 4.18655 26.9916 4.75341 26.8389C5.32027 26.6863 5.80333 26.3148 6.09648 25.8062L7.31477 23.6937H2.20781C1.94931 24.1994 1.89499 24.7852 2.05607 25.3299C2.21714 25.8746 2.58132 26.3366 3.07333 26.6204ZM22.2521 25.8062L15.4059 13.9146L17.9553 9.52954L22.3834 17.1592H25.8065C26.3803 17.1592 26.9307 17.3872 27.3365 17.793C27.7423 18.1988 27.9702 18.7491 27.9702 19.323C27.9702 19.8969 27.7423 20.4472 27.3365 20.853C26.9307 21.2588 26.3803 21.4868 25.8065 21.4868H24.8733L26.0895 23.5973C26.2498 23.8496 26.3574 24.1318 26.4057 24.4269C26.454 24.7219 26.4421 25.0237 26.3707 25.314C26.2993 25.6043 26.1699 25.8772 25.9902 26.1161C25.8105 26.3551 25.5843 26.5552 25.3252 26.7044C25.0662 26.8536 24.7796 26.9488 24.4827 26.9843C24.1859 27.0198 23.8849 26.9949 23.5979 26.9109C23.311 26.827 23.044 26.6859 22.813 26.496C22.5821 26.3061 22.392 26.0715 22.2541 25.8062" fill="white" />
                                    </svg>

                                </div>
                            </div>
                            <span className="z-10 pl-1">
                                Download for iOS
                            </span>
                        </button>
                        <button className="border-2 border-[#222222] group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-[#060606] py-1 pr-5 pl-14 font-medium text-neutral-50">
                            <div className="absolute left-[3px] inline-flex h-12 w-12 items-center justify-start rounded-full bg-[#FF6B2C] transition-[width] group-hover:w-[calc(100%-4px)]">
                                <div className="ml-[13px] flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.42688 1.37619L14.307 14.0073L1.52267 26.7548C1.31351 26.4824 1.15115 26.1771 1.04224 25.8514C0.985918 25.4827 0.985918 25.1075 1.04224 24.7388V3.0459C1.00393 2.46378 1.13804 1.88167 1.42541 1.37619M19.8555 8.49859L15.651 12.6633L2.92416 0.147126C3.3368 0.00417699 3.77891 -0.0356127 4.2107 0.0321776C4.8886 0.217864 5.53556 0.503762 6.12946 0.876608L17.6479 7.25037C18.3965 7.65269 19.126 8.07564 19.8555 8.49859ZM15.6525 15.3705L19.8364 19.4791L16.8035 21.168L7.55011 26.3112C6.78378 26.7342 6.01451 27.138 5.26587 27.5992C4.94553 27.7987 4.58632 27.9275 4.21224 27.977C3.83816 28.0266 3.4578 27.9958 3.09658 27.8866L15.6525 15.3705ZM26.499 14.0073C26.5097 14.5226 26.3795 15.0311 26.1224 15.4778C25.8652 15.9245 25.491 16.2925 25.04 16.5421L21.5827 18.4608L17.0334 14.0073L21.6018 9.47713C22.7734 10.13 23.9259 10.7828 25.0768 11.3974C25.5359 11.6539 25.9129 12.0352 26.1643 12.497C26.4157 12.9589 26.5327 13.4825 26.499 14.0073Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                            <span className="z-10 pl-1">
                                Download for Android
                            </span>
                        </button>
                        {/* <button className="bg-black text-white border-gray-800 border-2 py-3 px-6 rounded-lg w-auto flex flex-row justify-between items-center gap-2 rgb-pulse-button transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Download for iOS
                        </button> */}
                        {/* <button className="bg-black text-white border-gray-800 border-2 py-3 px-6 rounded-lg w-auto flex flex-row justify-between items-center gap-2 rgb-pulse-button transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Download for Android
                        </button> */}
                    </div>
                </div>

            </section>
        </div >
    )
}

export default Hero