const fetchPosts = "https://phmik.no/gameframe/wp-json/wp/v2/posts?per_page=20&acf_format=standard";
const blogContainer = document.querySelector(".blog-main");
const readButton = document.querySelector(".read-more-button");
const blogHiddenContainer = document.querySelector(".blog-more-content");

readButton.addEventListener('click', (e) => {
    blogHiddenContainer.style.display = "flex";
    if(readButton.innerText === "LOAD MORE") {
        
        readButton.innerText = "LOAD LESS";
    }
    else {
        readButton.innerText = "LOAD MORE";
        blogHiddenContainer.style.display = "none";
    }
})

async function getBlog(fetchPosts) {
    const blogResponse = await fetch(fetchPosts);
    const results = await blogResponse.json();
    console.log(results);
    
    for(let i = 0; i < results.length; i++) {
        const blogs = results[i];
        console.log(blogs)
        if(i <= 8) {
            blogContainer.innerHTML += `
                                    <div class="blogs-content">
                                        <div class="blogs-column">
                                            <a href="blogspecific.html?id=${blogs.id}" class="blogs-post">${blogs.title.rendered}</a>
                                            <h3>${blogs.acf.name}</h3>
                                            <div class="blogs-row">
                                                <div class="blogs-img-container">
                                                    <img src="${blogs.acf.images}" class="blogs-image">
                                                    <a href="blogspecific.html?id=${blogs.id}"><button class="blog-button">Read More</button></a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>`
                                    
                                    
        }
        if(i >= 9) {
            blogHiddenContainer.innerHTML += `
                                            
                                            <div class="blogs-hidden-content">
                                                <div class="blogs-column">
                                                    <a href="blogspecific.html?id=${blogs.id}" class="blogs-post">${blogs.title.rendered}</a>
                                                    <h3>${blogs.acf.name}</h3>
                                                    <div class="blogs-row">
                                                        <div class="blogs-img-container">
                                                            <img src="${blogs.acf.images}" class="blogs-image">
                                                            <a href="blogspecific.html?id=${blogs.id}"><button class="blog-button">Read More</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>`
                                        
        }
    }
}

getBlog(fetchPosts);

