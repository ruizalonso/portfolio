// const apiUrl = 'https://resume-api-ruizalonso.vercel.app/';
const apiUrl = 'http://localhost:3500/data';

const getData = async () => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
export default getData;