import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <Image
          src="/school_banner.png"
          alt="School Banner"
          width={1920}
          height={1080}
          className="banner-img"
          priority
        />
      </div>
      
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="hero-content">
        <h1>Welcome to Our Journey</h1>
        <div className="bangla-text">ONUSURJO - 22</div>
        <p>
          As the SSC Batch of 2022 from Pabna Collectorate Model School and
          College, we take pride in the friendships we&lsquo;ve forged, the lessons
          we&lsquo;ve learned, and the memories we&lsquo;ve created. Together, we honor our
          past and look forward to building a future shaped by unity,
          excellence, and shared purpose.
        </p>

        <div className="hero-buttons">
          <Link href="/memories" className="btn-primary">
            Explore Memories
          </Link>
          <Link href="/alumni" className="btn-secondary">
            Join Alumni Network
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;