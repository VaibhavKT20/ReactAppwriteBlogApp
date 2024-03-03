import React from "react";
import appwriteService from "../appwrite/Config";
import { Link } from "react-router-dom";
import { htmlToText } from "html-to-text";

function PostCard({ $id, title, featuredImage, content }) {
  const textContent = htmlToText(content, { wordwrap: 130 });

  return (
    <Link
      to={`/post/${$id}`}
      className="block w-[300px] rounded-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="relative">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="h-[200px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-0"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-lg font-semibold text-white text-center px-4">
            {title}
          </h2>
        </div>
      </div>
      <div className="bg-white p-4">
        <p className="text-sm text-gray-600">{textContent}</p>
      </div>
    </Link>
  );
}

export default PostCard;
