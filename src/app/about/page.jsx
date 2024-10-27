import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">
            About Our IMDb Clone
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Your ultimate source for movies, shows, and entertainment info!
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            What is This Platform?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            This IMDb clone is a web application designed to provide detailed
            information on the latest and greatest movies, TV shows, and
            entertainment industry insights. Built with Next.js and powered by
            the TMDb API, our platform offers an immersive experience with
            detailed content, cast information, ratings, and reviews.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-4"></span>
              <span>
                Extensive movie and TV show catalog with detailed information
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-4"></span>
              <span>Interactive ratings and reviews from users worldwide</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-4"></span>
              <span>Cast details, trailers, and high-quality media</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-4"></span>
              <span>Light and dark mode for a tailored viewing experience</span>
            </li>
          </ul>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We aim to create a seamless and enjoyable experience for movie
            enthusiasts, making it easy to discover new titles, track upcoming
            releases, and dive deep into the world of cinema. Whether youre a
            casual viewer or a cinephile, we want to provide a space where
            everyone can explore, share, and enjoy quality entertainment.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Built With</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Image src="/next.svg" alt="Next.js" width={30} height={30} />
              <span>Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/tailwindcss.svg"
                alt="Tailwind CSS"
                width={30}
                height={30}
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="TMDb API"
                width={30}
                height={30}
              />
              <span>TMDb API</span>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-12">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This site is a demo project and is not affiliated with IMDb. All
            data provided by TMDb API.
          </p>
        </footer>
      </div>
    </div>
  );
}
