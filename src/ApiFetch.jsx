import { useState, useEffect } from "react";
import React from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const dat = await fetch(url);
        const data = await dat.json();
        setData(data);
      } catch (err) {
        setError(err.message);
        console.error("error is", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  });

  return { loading, data, error };
};
const PostLists = () => {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <div>Loading......</div>;
  if (error) return <div>error is ...{error}</div>;
  return (
    <div>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PostLists;
