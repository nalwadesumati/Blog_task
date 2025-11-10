const blogForm = document.getElementById("blogForm");
const blogTitleCtrl = document.getElementById("blogTitle");
const blogContentCtrl = document.getElementById("blogContent");
const blogContainer = document.getElementById("blogContainer");

let blogsArr = [];

function snackBar(icon, msg) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 2500,
        showConfirmButton: false,
        toast: true,
        position: "top-end"
    });
}

function onBlogSubmit(e) {
    e.preventDefault();

    const blogObj = {
        blogTitle: blogTitleCtrl.value.trim(),
        blogContent: blogContentCtrl.value.trim()
    };

    if (!blogObj.blogTitle || !blogObj.blogContent) {
        snackBar("warning", "Please enter both title and content!");
        return;
    }

    onPostBlog(blogObj);
}

const onPostBlog = (obj) => {

    blogsArr.push(obj);
    onFetchBlog(blogsArr);
    snackBar("success", "Blog added successfully!");


    blogTitleCtrl.value = "";
    blogContentCtrl.value = "";
}

const onFetchBlog = (arr) => {

    renderBlogs(arr);
}

const renderBlogs = (blogs) => {
    let result = "";
    blogs.forEach(blog => {
        result += `
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="card">
          <div class="card-header">
            <h5>${blog.blogTitle}</h5>
          </div>
          <div class="card-body">
            <p>${blog.blogContent}</p>
          </div>
        </div>
      </div>`;
    });

    blogContainer.innerHTML = result;
}


blogForm.addEventListener("submit", onBlogSubmit);
