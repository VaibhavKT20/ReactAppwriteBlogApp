import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/Config";
import { Link } from "react-router-dom";
import { Container, PostCard } from "../components/index";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((result) => {
      if (result?.documents) {
        setPosts(result.documents);
      }
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <Container>
        {posts.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <p className="text-lg mb-4">
                There are no posts. Go to{" "}
                <Link to="/add-post" className="text-blue-500 underline">
                  Add Post
                </Link>{" "}
                page and add some posts.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {posts.map((post) => (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPost;
