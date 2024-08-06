import Genre from './atoms/Genre';
import data from '../data/topAiringData.json'; 
import Image from 'next/image';

const TopAiring = () => {
  return (
    <div className="w-full flex justify-center"> {/* Menyelaraskan konten secara horizontal */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"> {/* Mengatur lebar responsif */}
        {data.map((item, index) => (
          <div key={index} className="flex mb-4 p-4 bg-gray-800 rounded-lg">
            <div className="relative w-20 h-28 sm:w-24 sm:h-32">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
              <div className="my-2">
                {item.genre.map((g, i) => (
                  <Genre key={i} genre={g} />
                ))}
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Eps: {item.episode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAiring;
