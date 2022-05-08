var SecondItem = document.querySelector('.list-group-item: nth child(2)');
SecondItem.style.color ="green";


//QuerySelector ALL

var odd = document.querySelectorAll('li-nth child(odd)');

for(var i=0;i< odd.length;i++){
    
    odd[i].style.backgroundColor ='#f4f4f4';
}


//querySelector methodcan only be used to access
 //a single element while querySelectorAll method can be used 
 //to access all elements which match with a specified CSS selector