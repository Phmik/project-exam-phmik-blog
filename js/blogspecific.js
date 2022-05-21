const queryString = document.location.search;
const blogParams = new URLSearchParams(querystring);
const blogId = blogParams.get("id");
const idURL = ("https://phmik.no/gameframe/wp-json/wp/v2/posts?per_page=20&acf_format=standard" + blogId);

async function fetchBlog() {
    try {
        const response = await fetch(idURL);
        const blogResult = await response.json();
        console.log(blogResult);
        if(!blogResult.ok) {
            throw new Error(`Looks like a problem occured loading the API`);
        }
        else {
            renderBlog(renderBlog);
        }
    }
    catch(error) {

    }
}

fetchBlog();

function renderBlog(blogResult) {
    document.title = "";
    document.title = `${blogResult.title}`;
}