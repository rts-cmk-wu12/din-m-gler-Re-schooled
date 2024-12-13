import HeroSection from '../../components/home/HeroSection';
import FeaturedProperties from '../../components/home/FeaturedProperties';
import InfoSection from '../../components/home/InfoSection'
import Newsletter from '../../components/home/Newsletter'
import TeamSection from '../../components/home/TeamSection';
import SalesProcess from '../../components/home/SalesProcess';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <div className="w-full max-w-screen-xxl">
        <HeroSection />
      </div>
      <div className="w-full max-w-screen-xl">
        <InfoSection />
      </div>
      <div className="w-full max-w-screen-xxl">
        <FeaturedProperties />
      </div>
      <div className="w-full max-w-screen-xxl">
        <Newsletter />
      </div>
      <div className="w-full max-w-screen-xl">
        <TeamSection />
      </div>
      <div className="w-full max-w-screen-xxl">
        <SalesProcess />
      </div>
    </main>
  );
}
