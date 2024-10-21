import React from "react";
import { useEffect, useState } from "react";

function FetchDataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(await response.json());
    };

    fetchAll();
  }, []);

  fetch;

  return (
    <div>
      <ol>
        {data.map(({ id, title, body }) => (
          <li key={id}>
            <h3>Title:{title} </h3><br /> Body:<br/>{body}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FetchDataEffect;
