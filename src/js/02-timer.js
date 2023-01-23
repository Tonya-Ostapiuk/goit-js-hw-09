


// const root = document.querySelector('.time');

// function makeTimer(root) {
//   const current = moment();
//   current.set('m', 0);
//   current.set('s', 0);
//   const newData = current.clone().add(1, 'm');
//   root.textContent = newData.format('mm:ss');
//   const interval = setInterval(() => {
//     if (newData.isSame(current)) {
//       clearInterval(interval);
//       root.textContent = 'Time is Over';
//     } else {
//       newData.subtract(1, 's');
//       root.textContent = newData.format(' mm : ss ');
//     }
//   }, 1000);
// }
// makeTimer(root);