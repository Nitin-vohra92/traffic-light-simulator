
const circles1 = document.querySelectorAll('.circle1');
const circles2 = document.querySelectorAll('.circle2');
const circles3 = document.querySelectorAll('.circle3');
const circles4 = document.querySelectorAll('.circle4')

var database = firebase.database();

var ref = database.ref('crossings/0');
ref.on('value', function (data) {
  let x = data.val();
  var keys = Object.keys(x);//harr cheez ko objects mei convert krdeta hai
  var index1 = keys[9];
  var index2 = keys[10];
  var index3 = keys[11];
  var index4 = keys[12];


  let activeLight2 = x[index1];
  let activeLight1 = x[index2];
  let activeLight3 = x[index3];
  let activeLight4 = x[index4];

  //light 2 start

  if (activeLight2 > 2)
    activeLight2 = 1;
  else
    activeLight2 = 0;
  circles2[activeLight2].className = 'circle2';

  if (activeLight2 == 1) {
    circles2[0].className = 'circle2';
  }
  else {
    circles2[1].className = 'circle2';
  }

  const currentLight2 = circles2[activeLight2];

  console.log(currentLight2);

  if (activeLight2 == 0)
    currentLight2.classList.remove('green');
  else
    currentLight2.classList.remove('red');

  currentLight2.classList.add(currentLight2.getAttribute('color'));

  //light 2 end


  //light 1 start

  if (activeLight1 > 2)
    activeLight1 = 1;
  else
    activeLight1 = 0;
  circles1[activeLight1].className = 'circle1';

  if (activeLight1 == 1) {
    circles1[0].className = 'circle1';
  }
  else {
    circles1[1].className = 'circle1';
  }


  const currentLight1 = circles1[activeLight1];



  if (activeLight1 == 0)
    currentLight1.classList.remove('green');
  else
    currentLight1.classList.remove('red');

  currentLight1.classList.add(currentLight1.getAttribute('color'));

  //light 1 end


  //light 3 start

  if (activeLight3 > 2)
    activeLight3 = 1;
  else
    activeLight3 = 0;
  circles3[activeLight3].className = 'circle3';

  if (activeLight3 == 1) {
    circles3[0].className = 'circle3';
  }
  else {
    circles3[1].className = 'circle3';
  }


  const currentLight3 = circles3[activeLight3];


  if (activeLight3 == 0)
    currentLight3.classList.remove('green');
  else
    currentLight3.classList.remove('red');

  currentLight3.classList.add(currentLight3.getAttribute('color'));


  //light 3 end


  //light 4 start

  if (activeLight4 > 2)
    activeLight4 = 1;
  else
    activeLight4 = 0;
  circles4[activeLight4].className = 'circle4';

  if (activeLight4 == 1) {
    circles4[0].className = 'circle4';
  }
  else {
    circles4[1].className = 'circle4';
  }


  const currentLight4 = circles4[activeLight4];



  if (activeLight4 == 0)
    currentLight4.classList.remove('green');
  else
    currentLight4.classList.remove('red');

  currentLight4.classList.add(currentLight4.getAttribute('color'));


  //light 4 end
})

