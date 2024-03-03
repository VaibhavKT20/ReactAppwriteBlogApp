import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'; // Using the YouTube icon

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About BlogVista</h3>
            <p className="text-sm text-gray-300">
              Welcome to BlogVista, your ultimate destination for insightful articles, engaging content, and diverse perspectives on various topics.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-blue-400 transition duration-300">Categories</Link>
              </li>
              <li>
                <Link to="/archives" className="hover:text-blue-400 transition duration-300">Archives</Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-blue-400 transition duration-300">Authors</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/post-1" className="hover:text-blue-400 transition duration-300">Discovering Coding Paradigms</Link>
              </li>
              <li>
                <Link to="/post-2" className="hover:text-blue-400 transition duration-300">Mastering Data Structures</Link>
              </li>
              <li>
                <Link to="/post-3" className="hover:text-blue-400 transition duration-300">JavaScript: The Language of the Web</Link>
              </li>
              <li>
                <Link to="/post-4" className="hover:text-blue-400 transition duration-300">Artificial Intelligence Demystified</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-500 transition duration-300">
                <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-500 transition duration-300">
                <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-700 my-8" />
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BlogVista. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
