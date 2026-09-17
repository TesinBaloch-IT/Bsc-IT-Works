// Select HTML elements
const earth = document.getElementById('earth');
const moon = document.querySelector('.moon');
const toggleBtn = document.getElementById('toggleBtn');
const speedInput = document.getElementById('speed');


// Animatn Pause/Play Toggle for both Earth and Moon
toggleBtn.addEventListener('click', ()=> {
    const currentState = window.getComputedStyle(earth).animationPlayState;

    if(currentState === 'running'){
        earth.style.animationPlayState = 'paused';
        moon.style.animationPlayState = 'paused';
        toggleBtn.innerText = 'Play';
        toggleBtn.style.background= '#2ed573';
    }else{
        earth.style.animationPlayState = 'running';
        moon.style.animationPlayState = 'running';
        toggleBtn.innerText = 'Pause';
        toggleBtn.style.background = '#ff4757';
    }
});

// Animation Speed Change Slider (Live)
speedInput.addEventListener('input', (event)=> {
 const speedValue = event.target.value;
//  Set animation duration dynamically
earth.style.animationDuration = `${speedValue}s`;
});