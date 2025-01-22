import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectApi = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2> This page is ment for useEffect with Api.</h2>
      <h3>the contecnts inside my JSONPlaceholder API posts </h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UseEffectApi;
