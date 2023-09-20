function delayConsole(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, seconds * 1000);
  });
}

async function main() {
  console.log("before delay");
  let message = await delayConsole(3);
  console.log(message);
  console.log("After Delay");
}

main();
