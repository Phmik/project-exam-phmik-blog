const fetchPosts = "https://phmik.no/gameframe/wp-json/wp/v2/posts?per_page=20&acf_format=standard";
const blogContainer = document.querySelector(".blog-main");

async function getBlog(fetchPosts) {
    const blogResponse = await fetch(fetchPosts);
    const results = await blogResponse.json();
    
    for(let i = 0; i < results.length; i++) {
        if(i === 12){
            break;
        }
        const blogs = results[i];
        console.log(results[i]);

        blogContainer.innerHTML += `
                                    <div class="blogs-content">
                                        <div class="blogs-column">
                                            <a href="blogspecific.html?id=${blogs.id}" class="blogs-post">${blogs.title.rendered}</a>
                                            <h3>${blogs.acf.name}</h3>
                                            <div class="blogs-row">
                                                <div class="blogs-img-container">
                                                    <img src="${blogs.acf.images}" class="blogs-image">
                                                    <a href="blogspecific.html?id=${blogs.id}"><button class="slide-button">Read More</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }
}

getBlog(fetchPosts);