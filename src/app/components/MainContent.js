import RecentKdramaEpisodes from './RecentKdramaEpisodes';
import TopAiring from './TopAiring';

const MainContent = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-8 bg-glow">
      <div className="flex items-center justify-between mb-4 bg-glow-content">
        <h1 className="text-3xl font-bold">Recent Kdrama Episodes</h1>
      </div>
      <div className="flex flex-col lg:flex-row bg-glow-content">
        <div className="lg:w-2/3">
          <RecentKdramaEpisodes />
        </div>
        <div className="lg:w-1/4 lg:ml-16">
          <h2 className="text-2xl font-bold mb-4">Top Airing</h2>
          <TopAiring />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
