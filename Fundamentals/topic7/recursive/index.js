// function sumFuction(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n + sumFuction(n - 1); // 3 + 3
  
//               if (n === 1) {
//               return 1;
//               } else {
//               return n + sumFuction(n - 1); // 2 + 1
//                           if (n === 1) {
//                               return 1;  // yuxaridaki mertebeye 1i qaytarir
//                           } else {
//                               return n + sumFuction(n - 1);
//                           }
//               }
//     }
//   }



function sumFuction(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumFuction(n - 1);
  }
}

var netice = sumFuction(3);

console.log(netice);



3 + 2 +1