const fetchPosts = "https://phmik.no/gameframe/wp-json/wp/v2/posts?per_page=20&acf_format=standard";
const postsContainer = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const slideImage = document.querySelector(".carousel-images");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".back-button");
const dotsTracker = document.querySelector(".carousel-dots");
const dots = Array.from(dotsTracker.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePositition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePositition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsTracker.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsTracker.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

dotsTracker.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.active-slide');
    const currentDot = dotsTracker.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    console.log(targetIndex);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    
})

async function getPosts(fetchPosts) {
    try {

        const response = await fetch(fetchPosts);
        const posts = await response.json();
        console.log(posts)
        slides[0].innerHTML = "";
            for(let i = 0; i < posts.length; i++) {
                if(i === 4) {
                    break;
                }
                const blog = posts[i];
                console.log(blog)

                slides[0].innerHTML += `
                                    <div class="slide-column">
                                        <a href="blogspecific.html?id=${blog.id}" class="blog-post">${blog.title.rendered}</a>
                                        <div class="slide-row">
                                            <div class="slide-img-container">
                                                <img src="${blog.acf.images}" class="carousel-image">
                                                <a href="blogspecific.html?id=${blog.id}"><button class="slide-button">View more</button></a>
                                            </div>
                                        </div>
                                    </div>`
        }
        slides[1].innerHTML = "";
        for(let i = 4; i < posts.length; i++) {
            if(i === 8) {
                break;
            }
            const blog = posts[i];
                console.log(blog)

                slides[1].innerHTML += `
                                    <div class="slide-column">
                                    <a href="blogspecific.html?id=${blog.id}" class="blog-post">${blog.title.rendered}</a>
                                        <div class="slide-row">
                                            <div class="slide-img-container">
                                                <img src="${blog.acf.images}" class="carousel-image">
                                                <a href="blogspecific.html?id=${blog.id}"><button class="slide-button">View more</button></a>
                                            </div>  
                                        </div>
                                    </div>`
        }
        slides[2].innerHTML = "";
        for(let i = 8; i < posts.length; i++) {
            if(i === 12) {
                break;
            }
            const blog = posts[i];
                console.log(blog)

                slides[2].innerHTML += `
                                    <div class="slide-column">
                                    <a href="blogspecific.html?id=${blog.id}" class="blog-post">${blog.title.rendered}</a>
                                        <div class="slide-row">
                                            <div class="slide-img-container">
                                                <img src="${blog.acf.images}" class="carousel-image">
                                                <a href="blogspecific.html?id=${blog.id}"><button class="slide-button">View more</button></a>
                                            </div>  
                                        </div>
                                    </div>`
    }
}
    catch(error) {
        console.log(error);
    }
}
getPosts(fetchPosts)