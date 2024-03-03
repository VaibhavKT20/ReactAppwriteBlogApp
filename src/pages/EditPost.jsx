import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/Config";

function EditPost() {
  const [posts, setPosts] = useState(null);
  const [loading,setLoading]=useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
          setLoading(false);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug,navigate]);

  return !loading ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : "Loading data";
}

export default EditPost;
