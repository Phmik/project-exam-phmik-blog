const blogDetails = document.querySelector(".blog-content")
const blogHeadline = document.querySelector(".headline")
const sidebarTrack = document.querySelector(".sidebar-track");
const sidebarNav = document.querySelector(".nav-sidebar")
const queryString = document.location.search;
const blogParams = new URLSearchParams(queryString);
const blogId = blogParams.get("id");
const idURL = "https://phmik.no/gameframe/wp-json/wp/v2/posts/" + blogId + "?acf_format=standard";
const listURL = "https://phmik.no/gameframe/wp-json/wp/v2/posts?per_page=20&acf_format=standard";

async function fetchBlog() {
    try {
        const response = await fetch(idURL);
        const blogResult = await response.json();
        if(!response.ok){
            throw new Error(`oops. Loading error`);
        }
        else {
            renderBlogItems(blogResult)
        }
    }
    catch(error) {

    }
}

fetchBlog();

function renderBlogItems(blogResult) {
    document.title = "";
    document.title = `${blogResult.type} | ${blogResult.acf.title}`;
    blogHeadline.innerHTML += `
                                <h1>${blogResult.acf.title}</h1>
                                <hr class="headline-hr">`
    blogDetails.innerHTML += `
                            <section class="main-content">
                                <div class="side-content">
                                    <p><span class="author">Author: </span><em>${blogResult.acf.author}</em></p>
                                    <p><span class="date">Date: </span><em>${blogResult.modified}</em></p>
                                </div>
                                <div class="blog-img-container"> 
                                    <div class="modal-container">
                                        <img src="${blogResult.acf.images}" alt="ragnaros" class="modal-hover" onclick="onClick(this)">
                                    </div> 
                                </div>
                                <div class="blog-main-content">
                                    <h2>
                                        ${blogResult.acf.name}
                                    </h2>
                                    <p>${blogResult.acf.paragraph}</p>
                                    <p>${blogResult.acf.paragraphtwo}</p>
                                </div>
                                <div id="modalTrack" class="modal" onclick="this.style.display='none'"> 
                                    <span class="modal-close"&times;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <div class="modal-content">
                                        <img id="modalImg" class="modal-img">
                                    </div>
                                </div>
                            </section`
}

function onClick(element) {
    document.getElementById("modalImg").src = element.src;
    document.getElementById("modalTrack").style.display = "block";
}