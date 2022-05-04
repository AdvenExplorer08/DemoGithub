const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) =>{
    e.preventDefault();

    console.log('click');
});
btn.addEventListener('mouseover', (e) =>{
    e.preventDefault();

    console.log('mouseoverk');
});
btn.addEventListener('mouseout', (e) =>{
    e.preventDefault();

    console.log('mouseout');
});

