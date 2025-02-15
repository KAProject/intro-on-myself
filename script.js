// const video = document.getElementById('video');
//         video.addEventListener('ended', () => {
//             window.location.href = 'index.html';
//         });

//         video.addEventListener('canplay', () => {
//             video.requestFullscreen().catch(err => {
//                 console.log('Error trying to enable full-screen mode: ', err);
//             });
//         });



function startMarquee(id, pathId, content, speed) {
    const textPath = document.getElementById(id);
    const path = document.getElementById(pathId);
    const pathLength = path.getTotalLength();
    textPath.innerHTML = content;

    let offset = 0;

    function animateText() {
        offset -= speed;
        if (offset < 0) {
            offset = pathLength;
        } else if (offset > pathLength) {
            offset = 0;
        }
        textPath.setAttribute('startOffset', `${offset}px`);
        requestAnimationFrame(animateText);
    }

    animateText();
}

document.addEventListener('DOMContentLoaded', () => {
    const textContent1 = '<a href="" target="_blank" style="text-decoration: none;">The Power of Imagination make us infinet</a>'
    // .repeat(20);
    startMarquee('marquee-text', 'text-path', textContent1, -2);
});