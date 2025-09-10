// src/components/client/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-yef-blue text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Youth for a Better Tomorrow
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          We are dedicated to creating opportunities for young people to develop skills, 
          gain education, and become leaders in their communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/get-involved" 
            className="bg-white text-yef-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
          <Link 
            href="/donate" 
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;