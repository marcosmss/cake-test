const getData = async () => {
  const url = "https://desolate-brushlands-20405.herokuapp.com/api/v1/products";
  const promiseCallBack = (resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  };

  return new Promise(promiseCallBack);
};

export default getData;

// const getData = async () => {
//   const url = "https://desolate-brushlands-20405.herokuapp.com/api/v1/products";
//   fetch(url)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => data)
//     .catch(error => error);
// };

// export default getData;
