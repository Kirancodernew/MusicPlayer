import React from 'react';
import musicBg from '../assets/music-bg.jpg'
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="bg-black/95 text-white">
      {/* Hero Section */}
      <section className="bg-cover bg-fixed bg-center h-screen w-full" style={{ backgroundImage: `url(${musicBg})` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300"><span > Welcome to Our</span> Music World</h1>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-musicColor to-black py-10 text-center">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="text-gray-300 mb-4">Stay updated with the latest music trends and releases.</p>
        <Link to='/signup' className="bg-transparent border text-white py-2 px-4 rounded hover:bg-black">Sign Up Now</Link>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;