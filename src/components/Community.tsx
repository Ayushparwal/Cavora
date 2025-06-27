import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    img: "https://avatars.githubusercontent.com/u/100942934?v=4",
    name: "Ayush Parwal",
    role: "Founder & AI Engineer",
    bio: "CSE Undergrad at IIIT Nagpur | AI/ML Intern at @PathBreakers | Ex - Research Intern @ISRO | Passionate about AutoML, NLP, LLMs and scalable neural net solutions.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rohan Malhotra",
    role: "Co-Founder & Full Stack Web Dev",
    bio: "Expert in building robust and scalable web platforms using React, Node.js, and TypeScript. Leads Cavora's engineering and deployment efforts.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Muhammed Fazl Omar",
    role: "Co-Founder & Full Stack Web Dev",
    bio: "Full Stack Developer with a focus on performance and user experience. Passionate about building clean, maintainable, and impactful digital solutions.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    bio: "Designs intuitive and elegant user interfaces. Passionate about user-centric design and improving product accessibility and interaction.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Arjun Mehta",
    role: "Machine Learning Engineer",
    bio: "Works on ML pipelines, AutoML tuning, and data preprocessing. Loves building end-to-end AI systems that actually solve real-world problems.",
  },
];

const Community = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-14 text-center">
          Meet the Team Behind Cavora
        </h1>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full border-2 border-cyan-500 mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-center">{member.name}</h2>
              <p className="text-cyan-400 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cavora was built to simplify the development and deployment of advanced neural
            networks. Leveraging AutoML, it empowers businesses and developers to build
            AI solutions faster—without needing deep ML expertise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our mission is to make AI accessible, scalable, and intuitive. Cavora integrates
            cutting-edge neural architectures with a user-friendly interface and scalable
            infrastructure, enabling you to transform raw data into impactful models with ease.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're optimizing demand forecasting, automating document analysis, or
            deploying ML-powered features, Cavora streamlines the entire AI lifecycle.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="italic text-cyan-400"
          >
         Build smarter AI—faster and more efficiently—with Cavora.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Community;
