import{ useState } from 'react';

const Card3D = ({ imageSrc, title, description }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="card-container perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card bg-gray-700 rounded-xl shadow-xl transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h2 className="text-xl text-gray-200 font-bold mb-2">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card3D;