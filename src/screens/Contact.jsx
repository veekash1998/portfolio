import { useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8 max-w-6xl mx-auto"
    >
      <div className="space-y-8">
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <MapContainer
            center={[30.688168, 76.84338]}
            zoom={7}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <div className="absolute inset-0 bg-gray-900 opacity-50 pointer-events-none" />
            <Marker position={[30.688168, 76.84338]}>
              <Popup>Your location</Popup>
            </Marker>
          </MapContainer>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-700 outline-none focus:border-gray-400 bg-gray-800 text-gray-100"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-700 outline-none focus:border-gray-400 bg-gray-800 text-gray-100"
              required
            />
          </div>
          <div className="relative">
            <FaCommentAlt className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-700 outline-none focus:border-gray-400 bg-gray-800 text-gray-100 h-32"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-1/5 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-500 transition-colors duration-300 flex justify-center"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
