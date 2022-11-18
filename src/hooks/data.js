import { useEffect, useState } from 'react';
import getData from '../utils/getData';

function useData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setLoading(false);
      setData(data);
    });
  }, [setLoading]);
  return [data, loading];
}

export default useData;