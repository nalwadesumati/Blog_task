const cl = console.log;

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
        blogTitle: blogTitleCtrl.value,
        blogContent: blogContentCtrl.value
    };

    onPostBlog(blogObj);
}


const onPostBlog = (obj) => {
    setTimeout(() => {
        let error1 = Math.random() > 0.4 ? false : true;
        if (!error1) {
            blogsArr.push(obj);
            onFetchBlog(blogsArr);
            snackBar("success", "Blog added successfully!");


            blogTitleCtrl.value = "";
            blogContentCtrl.value = "";
        } else {
            snackBar("error", "Something went wrong while posting the blog");
        }
    }, 2000);
}


const onFetchBlog = (arr) => {
    setTimeout(() => {
        let error = Math.random() > 0.5 ? false : true;
        if (!error) {
            renderBlogs(arr);
        } else {
            snackBar("error", "Fetch failed, showing old data");
            renderBlogs(arr);
        }
    }, 1000);
}


const renderBlogs = (data) => {
    let result = "";
    data.forEach(blog => {
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
