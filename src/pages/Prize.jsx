import React from "react";
import {
    MdEmojiEvents,
    MdVerified,
    MdStar,
    MdWorkspacePremium,
    MdAccountCircle
} from "react-icons/md";
// import { motion } from "framer-motion";

// Default trophy image if import fails
const defaultTrophy = "https://cdn-icons-png.flaticon.com/512/3132/3132693.png";

const Prize = () => {
    const [trophyImage, setTrophyImage] = React.useState(defaultTrophy);

    // Handle image loading error
    const handleImageError = () => {
        setTrophyImage(defaultTrophy);
    };

    const winners = [
        {
            id: 1,
            name: "Alex Johnson",
            achievement: "Top Performer 2023",
            prize: "Gold Certification + $500",
            date: "Jan 15, 2023",
            level: "gold",
            testimonial: "This recognition boosted my professional credibility significantly."
        },
        {
            id: 2,
            name: "Sarah Williams",
            achievement: "Innovation Excellence",
            prize: "Silver Certification + $300",
            date: "Jan 15, 2023",
            level: "silver",
            testimonial: "The certification helped me land my dream job!"
        },
        {
            id: 3,
            name: "Michael Chen",
            achievement: "Rising Star Award",
            prize: "Bronze Certification + $200",
            date: "Feb 28, 2023",
            level: "bronze",
            testimonial: "Being recognized early in my career was incredibly motivating."
        },
    ];

    const certificationLevels = [
        {
            name: "Gold",
            icon: <MdWorkspacePremium className="text-2xl" />,
            color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
            textColor: "text-yellow-600",
            bgColor: "bg-yellow-100",
            borderColor: "border-yellow-400",
            criteria: "Top 1% of performers",
            benefits: ["Digital badge", "Physical certificate", "$500 reward", "Featured profile"]
        },
        {
            name: "Silver",
            icon: <MdStar className="text-2xl" />,
            color: "bg-gradient-to-r from-gray-300 to-gray-400",
            textColor: "text-gray-500",
            bgColor: "bg-gray-100",
            borderColor: "border-gray-300",
            criteria: "Top 5% of performers",
            benefits: ["Digital badge", "Physical certificate", "$300 reward"]
        },
        {
            name: "Bronze",
            icon: <MdEmojiEvents className="text-2xl" />,
            color: "bg-gradient-to-r from-amber-600 to-amber-800",
            textColor: "text-amber-600",
            bgColor: "bg-amber-100",
            borderColor: "border-amber-600",
            criteria: "Top 10% of performers",
            benefits: ["Digital badge", "$200 reward"]
        }
    ];

    const stats = [
        { value: "50+", label: "Certifications Awarded" },
        { value: "$10k+", label: "In Prizes Distributed" },
        { value: "100%", label: "Verified Achievements" },
        { value: "30+", label: "Success Stories" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8"
                >
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                Achievement Hall of Fame
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Celebrating excellence and recognizing outstanding contributions from our top performers.
                        </p>
                        <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-indigo-100 rounded-full">
                                <MdVerified className="text-indigo-600 text-2xl" />
                            </div>
                            <p className="text-gray-700">
                                All certifications are verifiable on the blockchain for authenticity.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <motion.img
                            src={trophyImage}
                            alt="Achievement Trophy"
                            className="w-64 h-64 object-contain"
                            onError={handleImageError}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </motion.div>

                {/* Winners Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <MdEmojiEvents className="text-indigo-600" />
                            Recent Award Winners
                        </h2>
                        <span className="text-sm text-gray-500">Updated monthly</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {winners.map((winner) => {
                            const levelInfo = certificationLevels.find(l => l.name.toLowerCase() === winner.level);
                            return (
                                <motion.div
                                    key={winner.id}
                                    whileHover={{ y: -5 }}
                                    className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${levelInfo?.borderColor}`}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 rounded-full ${levelInfo?.bgColor}`}>
                                                {levelInfo?.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{winner.name}</h3>
                                                <p className="text-sm text-gray-500">{winner.date}</p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="font-medium text-gray-800">{winner.achievement}</p>
                                            <p className={`${levelInfo?.textColor} font-semibold`}>{winner.prize}</p>
                                        </div>

                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <p className="text-sm text-gray-600 italic">"{winner.testimonial}"</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Certification Levels */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <MdVerified className="text-indigo-600" />
                        Certification Levels
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certificationLevels.map((level, index) => (
                            <motion.div
                                key={level.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <div className={`h-2 ${level.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 rounded-full ${level.color} text-white`}>
                                            {level.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{level.name} Level</h3>
                                    </div>

                                    <p className="text-gray-600 mb-4">{level.criteria}</p>

                                    <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                                    <ul className="space-y-2">
                                        {level.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Stats Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="bg-indigo-600 rounded-2xl p-8 text-white mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-indigo-100">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to join our Hall of Fame?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Consistently perform at high levels and you could be our next featured achiever!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                        View Performance Criteria
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Prize;