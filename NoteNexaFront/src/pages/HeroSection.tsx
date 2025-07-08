
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faLock, faMobileAlt, faSearch, faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [hoveredFeature, setHoveredFeature] = useState(0);
    const navigate = useNavigate();
    const isAuth_1 = localStorage.getItem("isAuth");
    const isAuthBoolean = isAuth_1 === "true" ? true : false;

    useEffect(() => {
        setIsMounted(true);
        handleLoginPage();
    }, [isAuthBoolean, navigate]);


    function handleLoginPage (){
        if (isAuthBoolean) {
            navigate('/homePage')
        } else {

        navigate('/')        }
    }

    console.log(hoveredFeature)
    const features = [
        {
            icon: faMobileAlt,
            title: "Cross-Platform Sync",
            description: "Seamless access across all your devices with real-time synchronization."
        },
        {
            icon: faLock,
            title: "Military-Grade Security",
            description: "End-to-end encryption ensures your notes remain private and secure."
        },
        {
            icon: faSearch,
            title: "Intelligent Search",
            description: "AI-powered search understands context and finds exactly what you need."
        }
    ];

    const testimonials = [
        {
            quote: "NoteNexa has completely transformed my workflow. I can't imagine working without it now.",
            name: "Dr. Sarah Johnson",
            role: "Research Scientist",
            avatar: "https://randomuser.me/api/portraits/women/43.jpg"
        },
        {
            quote: "The perfect balance of simplicity and powerful features. It just works.",
            name: "Michael Chen",
            role: "Tech Entrepreneur",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            quote: "Finally a note-taking app that doesn't get in my way. Pure productivity.",
            name: "Emma Rodriguez",
            role: "Creative Director",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    return (
        <div
            style={{
                backgroundImage: 'url("../src/assets/Back_ground_image.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <section className="relative min-h-screen w-full overflow-hidden bg-transparent-900">

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40%] max-w-2xl h-full">
                        <motion.img
                            src="../../src/assets/gradient.png"
                            alt="Decorative gradient"
                            className="w-full h-full object-cover opacity-80"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 0.8, x: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                </div>

                <div className="relative z-20 h-full flex flex-col justify-center">
                    <div className="container mx-auto px-4 sm:px-6 md:px-16 py-16 md:py-20">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
                            initial="hidden"
                            animate={isMounted ? "visible" : "hidden"}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {/* Left column */}
                            <div className="space-y-6 md:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    <div className="flex items-center mb-3 md:mb-4">
                                        <span className="text-white font-['Bruno_Ace_SC'] text-lg md:text-xl">/</span>
                                        <span className="text-white font-['Bruno_Ace_SC'] text-lg md:text-xl ml-2">01</span>
                                    </div>
                                    <div className="h-0.5 w-48 md:w-64 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 md:mb-6" />
                                </motion.div>

                                <motion.div
                                    className="space-y-4 md:space-y-6"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    <h2 className="text-white font-['Bruno_Ace_SC'] text-2xl md:text-3xl tracking-wider">
                                        THINK IT. NOTE IT.
                                    </h2>
                                    <h2 className="text-white font-['Bruno_Ace_SC'] text-2xl md:text-3xl tracking-wider">
                                        FIND IT. USE IT.
                                    </h2>
                                </motion.div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                                <motion.h1
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Bruno_Ace_SC'] tracking-tight text-white"
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">ELEVATE</span>
                                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">YOUR NOTES</span>
                                </motion.h1>

                                <motion.p
                                    className="text-lg md:text-xl font-['Assistant'] text-gray-300 max-w-md md:max-w-lg"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    NoteNexa is the ultimate cognitive extension for modern thinkers. Capture ideas instantly, organize intuitively, and retrieve effortlessly with our AI-enhanced platform designed for those who demand more from their tools.
                                </motion.p>

                                <motion.div
                                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }
                                        }
                                    }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative overflow-hidden px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-yellow-500 text-white rounded-lg"
                                    >
                                        <span className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                        <span className="relative z-10 font-['Bruno_Ace_SC'] text-sm sm:text-base tracking-wider flex items-center">
                                            BEGIN YOUR JOURNEY
                                            <FontAwesomeIcon icon={faArrowRight} className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </motion.button>

                                    <a href="#features" className="lg:hidden flex items-center text-white/80 hover:text-white text-sm group transition-colors">
                                        <span>Discover Features</span>
                                        <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-3 w-3 group-hover:translate-y-1 transition-transform" />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>


                <div className={`hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-1000 delay-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="#features" className="animate-bounce flex flex-col items-center">
                        <span className="text-sm text-white/80 mb-2">Scroll Down</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white/60"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-28 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 md:px-16">
                    <motion.h2
                        className="text-center text-4xl md:text-5xl font-['Bruno_Ace_SC'] mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        Designed for <span className="text-yellow-500">Exceptional</span> Minds
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative p-8 bg-gray-850 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                onMouseEnter={() => {
                                    setHoveredFeature(index);
                                }}
                                onMouseLeave={() => setHoveredFeature(0)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative z-10">
                                    <div className="feature-icon mb-6 text-4xl text-yellow-500">
                                        <FontAwesomeIcon icon={feature.icon} />
                                    </div>
                                    <h3 className="text-2xl font-['Bruno_Ace_SC'] mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 font-['Assistant']">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 md:py-28 bg-gray-850">
                <div className="container mx-auto px-4 sm:px-6 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="relative h-96 bg-transparent rounded-xl overflow-hidden border border-white backdrop-blur-2xl"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faBookOpen}
                                    className="text-8xl text-white /20"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-850/80 to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-['Bruno_Ace_SC'] mb-8">
                                <span className="text-white">The</span> <span className="text-yellow-500">Evolution</span> <span className="text-white">of Thought</span>
                            </h2>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed font-['Assistant']">
                                NoteNexa represents a paradigm shift in knowledge management. We've reimagined note-taking from the ground up, combining neuroscience principles with cutting-edge technology to create a platform that doesn't just store information—it enhances cognition.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 bg-yellow-500 text-gray-900 font-['Bruno_Ace_SC'] rounded-lg hover:bg-yellow-400 transition-all"
                                >
                                    Discover Our Philosophy
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 border-2 border-white text-white font-['Bruno_Ace_SC'] rounded-lg hover:bg-white hover:text-gray-900 transition-all"
                                >
                                    Join the Movement
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 md:py-28 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 md:px-16">
                    <motion.h2
                        className="text-center text-4xl md:text-5xl font-['Bruno_Ace_SC'] mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Trusted by <span className="text-yellow-500">Visionaries</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative p-8 bg-gray-850 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 left-8 -translate-y-1/2 text-6xl text-yellow-500/20 font-serif">"</div>
                                <p className="text-gray-300 italic mb-8 text-lg relative z-10">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full mr-4 border-2 border-yellow-500/50"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h4 className="font-['Bruno_Ace_SC'] text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;