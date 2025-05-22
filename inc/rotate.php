<section class="rotator">
    <div class="rotator__inner">
        <div class="circle">
            <div class="quarter q1"></div>
            <div class="quarter q2"></div>
            <div class="quarter q3"></div>
            <div class="quarter q4"></div>
            <div class="circle-center"></div>
        </div>
        <div class="controls">
            <button class="prev-btn"><i class="fas fa-arrow-left"></i></button>
            <button class="next-btn"><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>
<style>
.rotator {
    margin-bottom: 30px;
    margin-top: -340px;
}

.rotator__inner {
    padding: 0px 40px 40px 40px;
    background: #18191a;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
}

.circle {
    position: relative;
    width: 650px;
    height: 650px;
    margin: 50px auto;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.5s ease;
    background: transparent;
    transform: rotate(45deg);
}
.quarter {
    position: absolute;
    width: 50%;
    height: 50%;
    background: transparent;
    transform-origin: 100% 100%;
}
.q1 {
    background: #36d1c4;
    clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 0);
    left: 50%; top: 0;
    transform: rotate(0deg);
}
.q2 {
    background: #ff2e63;
    clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 0);
    left: 0%; top: 50%;
    transform: rotate(90deg);
}
.q3 {
    background: #ffe66d;
    clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 0);
    left: -50%; top: -50%;
    transform: rotate(180deg);
}
.q4 {
    background: #1a535c;
    clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 0);
    left: 0; top: 0;
    transform: rotate(270deg);
}
.circle-center {
    position: absolute;
    left: 25%;
    top: 25%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
    /* opacity: 0.8; */
    /* background: #fff; */
    opacity: 1;
    background: #18191a;
}
.controls {
    text-align: center;
    margin-top: 20px;
}
.prev-btn,
.next-btn {
    padding: 10px 14px;
    margin: 0 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #ff2e63;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all .3s ease;
}
.prev-btn:hover,
.next-btn:hover {
    background-color:rgba(255, 46, 99, .8);
}
</style>
<script>
let rotation = 45;
const circle = document.querySelector('.circle');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
    rotation += 90;
    circle.style.transform = `rotate(${rotation}deg)`;
});

prevBtn.addEventListener('click', () => {
    rotation -= 90;
    circle.style.transform = `rotate(${rotation}deg)`;
});
</script>