<section class="rotator">
    <div class="rotator__inner">
        <div class="rotator-circle">
            <div class="rotator-quarter q1"></div>
            <div class="rotator-quarter q2"></div>
            <div class="rotator-quarter q3"></div>
            <div class="rotator-quarter q4"></div>
            <div class="rotator-circle-center"></div>
        </div>
        <div class="rotator-controls">
            <button class="prev-btn"><i class="fas fa-arrow-left"></i></button>
            <button class="next-btn"><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>
<script>
let rotation = 45;
const circle = document.querySelector('.rotator-circle');
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