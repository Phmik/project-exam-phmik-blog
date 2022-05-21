const blogDetails = document.querySelector(".blog-headline")
const queryString = document.location.search;
const blogParams = new URLSearchParams(queryString);
const blogId = blogParams.get("id");
const idURL = "https://phmik.no/gameframe/wp-json/wp/v2/posts/" + blogId;

async function fetchBlog() {
    try {
        const response = await fetch(idURL);
        const blogResult = await response.json();
        if(!response.ok){
            throw new Error(`oops. Loading error`);
        }
        else {
            renderBlogItem(blogResult)
        }
    }
    catch(error) {

    }
}

fetchBlog();

function renderBlogItem(blogResult) {
    document.title = "";
    document.title = `${blogResult.type} | ${blogResult.acf.title}`;
}