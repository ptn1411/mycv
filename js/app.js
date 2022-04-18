// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .then(reg => console.log('sw registered', reg))
//         .catch(err => console.log('sw register err', err))
// }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("https://ptn1411.github.io/mycv/sw.js", {
      scope: "https://ptn1411.github.io/mycv/", // <--- THIS BIT IS REQUIRED
    })
    .then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
}
