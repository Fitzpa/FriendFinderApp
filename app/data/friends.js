// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArr = [
  {
    name: "Abe",
    photo: "https://scontent-msp1-1.cdninstagram.com/vp/d357dfdb2bd1a796db396b56727c5a1d/5D3AF07B/t51.2885-15/sh0.08/e35/p640x640/51110199_319871578872126_3484740709525714078_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com",
    score: [1,2,4,3,2,3,5,4,3,2],
    total: 1+2+4+3+2+3+5+4+3+2
  },
  {
    name: "Gary",
    photo: "https://scontent-msp1-1.cdninstagram.com/vp/bfc4862031a265198ed905b6472ac4f3/5D6EC8B4/t51.2885-15/e35/51609165_380784156087113_1056402129777595369_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com",
    score: [3,2,5,3,5,3,5,4,3,2],
    total: 3+2+5+3+5+3+5+4+3+2
  },
  {
    name: "Katie",
    photo: "https://scontent-msp1-1.cdninstagram.com/vp/923294b86b30f1d8ea87643fdd1f812e/5D5BB3FB/t51.2885-15/e15/11236210_657781197700462_391457268_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com",
    score: [4,5,3,4,2,3,1,5,2,3],
    total: 4+5+3+4+2+3+1+5+2+3
  },
  {
    name: "Alex",
    photo: "https://scontent-msp1-1.cdninstagram.com/vp/41a7186de4ff3f8d8815e93e431fc71b/5D7223E6/t51.2885-15/sh0.08/e35/p640x640/57572898_297824327783672_46204072922020939_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com",
    score: [1,2,3,4,5,1,2,3,4,5],
    total: 1+2+3+4+5+1+2+3+4+5
  },
  {
    name: "Tony",
    photo: "https://scontent-msp1-1.cdninstagram.com/vp/3bc9441b0b087e0cd42feba5480d2f59/5D71CAE6/t51.2885-15/sh0.08/e35/s640x640/17881493_389873231412374_5134348079100592128_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com",
    score: [5,5,5,5,5,5,5,5,5,5],
    total: 5+5+5+5+5+5+5+5+5+5
  }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArr;
