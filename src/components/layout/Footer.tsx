import React from 'react';

import { homeSections } from '@/components/config';
import { Brand, Contacts } from '@/components/common';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t border-gray-800 py-12 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Brand />
            <p className="text-gray-400 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              dolores corporis laboriosam natus veniam architecto consequuntur
              sit! Voluptate harum fugit distinctio, cumque voluptatibus ipsa at
              odit aut, consequuntur, ullam dolorem.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {homeSections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Contacts />
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} by mxrkjxy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
