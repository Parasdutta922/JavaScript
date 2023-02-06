const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched");
      }, 1000);
    });
  };
  
  const fetchMoreData = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data} and more data`);
      }, 1000);
    });
  };
  
  async function showData() {
    try {
      const data = await fetchData();
      const moreData = await fetchMoreData(data);
      console.log(moreData); // Output: "Data fetched and more data"
    } catch (error) {
      console.error(error);
    }
  }
  
  showData();
  