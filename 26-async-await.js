function fetchData() {
  console.log(` Promise will fetch the Data....`);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Successfully fetched Data..");
      reject("Failed to fetch data");
    }, 20000);
  });
  return promise;
}

async function main() {
  console.log("main function");
  try {
    const promise = await fetchData();
    console.log(promise);
  } catch (error) {
    console.log(error);
  }

  // promise.then((success)=>{
  //     console.log(success);
  // }).catch((failure)=>{
  //     console.log(failure);
  // });

  console.log("After fetch...");
}
main();
