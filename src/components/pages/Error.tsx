import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_PATH } from '@/config';
import { Navbar, Footer } from '@/components/layout';
import { TypingText } from '@/components/common';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const scrollToHomeSection = (id: string) => {
    navigate(`${BASE_PATH}#${id}`);
  };

  const goHome = () => {
    navigate(BASE_PATH);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar activeSection="" onNavigate={scrollToHomeSection} />
      <main className="min-h-screen">
        <section className="snap-start min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <div className="mb-8">
              <TypingText speed={50} hasGlitch>
                <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-none">
                  404
                </h1>
              </TypingText>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Oops! Page not found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
                Don't worry, it happens to the best of us. Let's get you back on
                track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 relative z-10">
              <button
                type="button"
                onClick={goHome}
                className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Go to Homepage
              </button>
              <button
                type="button"
                onClick={goBack}
                className="cursor-pointer px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Go Back
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
                <div className="w-96 h-96 rounded-full border-4 border-blue-200 dark:border-blue-800"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-5">
                <div className="w-64 h-64 rounded-full border-2 border-purple-200 dark:border-purple-800 animate-pulse"></div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 relative z-10">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Or try one of these popular sections:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => scrollToHomeSection('about')}
                  className="cursor-pointer px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors active:scale-95"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => scrollToHomeSection('projects')}
                  className="cursor-pointer px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors active:scale-95"
                >
                  Projects
                </button>
                <button
                  type="button"
                  onClick={() => scrollToHomeSection('contact')}
                  className="cursor-pointer px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors active:scale-95"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={scrollToHomeSection} />
    </div>
  );
};
