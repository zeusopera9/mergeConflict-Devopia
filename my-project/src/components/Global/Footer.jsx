import React from 'react';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 999 }}>
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Learn Karo</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="https://github.com/alekyaarra" className="hover:underline me-4 md:me-6">Alekya</a>
              </li>
              <li>
                <a href="https://github.com/YakshitPoojary" className="hover:underline me-4 md:me-6">Yakshit</a>
              </li>
              <li>
                <a href="https://github.com/AtharvaK-15" className="hover:underline me-4 md:me-6">Atharva</a>
              </li>
              <li>
                <a href="https://github.com/zeusopera9" className="hover:underline">Zaidali</a>
              </li>
            </ul>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed at Devopia</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
