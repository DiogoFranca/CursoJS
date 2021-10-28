let i = 0;
function teste() {
  if(i < 10) {
    console.log(i);
    i++;
    teste();
  } else {
    return;
  }
};

teste();