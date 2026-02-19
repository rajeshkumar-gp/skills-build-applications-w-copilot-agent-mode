import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching from:', url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        if (data.results) {
          setData(data.results);
        } else {
          setData(Array.isArray(data) ? data : []);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item.id || index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;