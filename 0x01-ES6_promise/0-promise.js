export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        data: 'API data',
        status: 200,
      };
      resolve(response);
    }, 1000);
  });
}
