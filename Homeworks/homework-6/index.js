let n = 100; 

for (let i = 2; i <= n; i++) {
  let tub = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      tub = false;
      break;
    }
  }

  if (tub) {
    console.log(i);
  }
}

// for (let i = 0; i < 5; i++ ) natija 0,1,2,3,4 chiqida sabab i<5 dan deyilga 
// i++ qadamni birga oshiradi 5ga borganda esa toxtaydi 5 dan  kichik bolsin deyilgan shartda 
    console.log(i);
    

for ( let i = 0; i < 5; ++i )
    //  bunda ham xuddi shunday xolatda  bajariladi
     console.log(i);
    