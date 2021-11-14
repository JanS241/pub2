// oefening 2 javascript
//pub2

const age = 25;
const isFemale = false;
const driverStatus = 'bob';
const firstName = 'John';
const totalAmount = 55;
const drinkOnly = false;

//age check
if (age >= 18){
 console.log("You are allowed to get in")
} else{
  console.log("Sorry, you are to young to get in")
};

//ladies night
if (isFemale){
   console.log( 'Lady, welcome to ladies night')
} else{
    console.log( 'sorry, this is for ladies only')
};

//driverstatus
if (driverStatus === 'bob'){
   console.log ( 'have a good trip home')
   } else
   { console.log('you better call a taxi')
};

// 50% discount
if (age >=18 && age<=25){
    console.log('Welcome, You get 50% off')
}else if (age >= 25){
    console.log('welcome, have a nice stay')
}else if (age<18){
    console.log('sorry, you are to young to get in')
};

// fun action
if (firstName === "Sarah" || firstName === "Bram"){
    console.log('Gongratulations, you get a free beer');
} else if(age>=18) {
    console.log( 'Welcome, have a nice stay') 
}else {
        console.log('Sorry, you are to young to get in')
    };

    //Anniversary discount

   if (drinkOnly===false && totalAmount>50 && totalAmount<100){
        console.log('Congratulations, you het a free portion of nachos' );
     } else if (drinkOnly && totalAmount>50 && totalAMount<100){
         console.log ('Congratulations, you get free portion of veggie and nachos')
     } else if( totalAmount >= 100){
         console.log('Congratulations, you get a free bottle of champagne')
     }else {
         console.log('Safe journey home')
     };
