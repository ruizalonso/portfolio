const apiUrl = import.meta.env.VITE_API_URL;

const getData = async () => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));
};
export default getData;