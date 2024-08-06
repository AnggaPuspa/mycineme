'use client';

const genreStyles = {
  Comedy: 'bg-yellow-500 text-black',
  Action: 'bg-red-500 text-white',
  Drama: 'bg-blue-500 text-white',
  Romance: 'bg-pink-500 text-white',
  Thriller: 'bg-green-500 text-white',
};

const Genre = ({ genre }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full mr-2 ${genreStyles[genre] || 'bg-gray-500 text-white'}`}
    >
      {genre}
    </span>
  );
};

export default Genre;
