// const btnOpen = document.querySelectorAll('.fa-chevron-down');
// const btnClose = document.querySelectorAll('.fa-times-circle');


// btnOpen.forEach(open => {
//     open.addEventListener('click', () => {
//         open.parentElement.classList.add('active');
//     })
// });

// btnClose.forEach(open => {
//     open.addEventListener('click', () => {
//         open.parentElement.classList.remove('active');
//     })
// });


// SIMPLER CODE THEN PREVIOUS
const toggle = document.querySelectorAll('.faq__content__box i');

toggle.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    })
})
