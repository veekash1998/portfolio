import { useState } from 'react';
import Card3D from '../components/Card3D';
import Pic1 from "/assets/PicsArt_01-19-08.20.48.jpg";
import Aman from "/assets/aman.jpeg";
import Ashutosh from "/assets/ashutosh.jpeg";
import Manish from "/assets/manish.jpeg";
import Mehak from "/assets/mehak.jpeg";
import Ramanpreet from "/assets/ramanpreet.jpeg";
import Saksham from "/assets/saksham.jpeg";
import Shikha from "/assets/shikha.jpeg";
const Gallery = () => {
  const [gallery, setGallery] = useState([
    {
      image: Pic1,
      title: "Vikash kumar verma",
      description: "This is the first 3D card effect using React and Tailwind CSS."
    },
    {
      image: Aman,
      title: "Amandeep",
      description: "This is the second 3D card effect using React and Tailwind CSS."
    },
    {
      image: Ashutosh,
      title: "Ashutosh",
      description: "This is the third 3D card effect using React and Tailwind CSS."
    },
    {
      image: Manish,
      title: "Manish",
      description: "This is the first 3D card effect using React and Tailwind CSS."
    },
    {
      image: Mehak,
      title: "Mehak Saini",
      description: "This is the second 3D card effect using React and Tailwind CSS."
    },
    {
      image: Ramanpreet,
      title: "Ramanpreet kour",
      description: "This is the third 3D card effect using React and Tailwind CSS."
    },
    {
      image: Saksham,
      title: "Saksham Sharma",
      description: "This is the first 3D card effect using React and Tailwind CSS."
    },
    {
      image: Shikha,
      title: "Shikha Singhal",
      description: "This is the second 3D card effect using React and Tailwind CSS."
    }
  ])


  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <Card3D
              imageSrc={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 
