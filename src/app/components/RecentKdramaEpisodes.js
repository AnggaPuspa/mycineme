import Image from 'next/image';
import data from '../data/recentKdramaData.json'; 

const RecentKdramaEpisodes = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="relative w-full h-60 md:h-80">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {item.episode}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentKdramaEpisodes;
