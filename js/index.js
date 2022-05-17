const fetchPosts = "https://phmik.no/gameframe/wp-json/wp/v2/posts?acf_format=standard";
const postsContainer = document.querySelector(".carousel");
const track = document.querySelector(".carousel_track")
const slides = document.querySelector(".carousel_slide")
const slideImage = document.querySelector(".carousel-img")
const nextButton = document.querySelector(".carousel-button-left");
const prevButton = document.querySelector(".carousel-button-right")



async function getPosts(fetchPosts) {
    try {

        const response = await fetch(fetchPosts);
        const posts = await response.json();
        console.log(posts)
        slides.innerHTML = "";
            for(let i = 0; i < posts.length; i++) {
                
                if(i === 4) {
                    break;
                }
                const blog = posts[i];
                console.log(blog)

                slides.innerHTML += `
                                    <div class="slide-column">
                                        <h2>${blog.title.rendered}</h2>
                                        <div class="slide-row">
                                            <div class="slide-img-container">
                                                <img src="${blog.acf.Ragnaros}">
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