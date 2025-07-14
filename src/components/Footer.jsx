import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-600 dark:text-gray-300 bg-fogMauve dark:bg-crimsonDepth border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4">
            <p className="mb-2 font-light tracking-wide">
            Made with 💜 by Annisa Bunga Aurelia
            </p>
            <p className="text-xs opacity-70">
            © {new Date().getFullYear()} All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
