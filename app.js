const cl = console.log;


const blogForm = document.getElementById("blogForm");
const blogTitleCtrl = document.getElementById("blogTitle");
const blogContentctrl = document.getElementById("blogContent");
const blogContainer = document.getElementById("blogContainer");


let blogsArr = [];

function snackBar(msg, icon) {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 2500
    })
}



function onBlogSubmit(eve) {
    eve.preventDefault();

    let blogObj = {
        blogTitle: blogTitleCtrl.value,
        blogContent: blogContentctrl.value
    };

    onPostblog(blogObj);
}


const onPostblog = (obj) => {
    setTimeout(() => {
        let error1 = Math.random() > .4 ? false : true;
        if (!error1) {
            blogsArr.push(obj);
            onFetchBlog(blogsArr);
            snackBar("Blog added successfully!", "success");

        } else {
            snackBar("error", "something went wrong while postBlog");
        }
    }, 2000);
}



const onFetchBlog = (arr) => {
    setTimeout(() => {
        let error = Math.random() > .5 ? false : true;

        if (!error) {


            temp(data);
        } else {
            snackBar("error", "Fetch failed, showing old data");
            temp(arr);


        }
    }, 1000)
}


const temp = (data) => {
    let result = "";

    data.forEach(blog => {
        result +=
            ` <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-header">
                      <h5>${blog.blogTitle}</h5>
                    </div>
                    <div class="card-body">
                        <p>${blog.blogContent}</p>
                    </div>
                </div>
            </div>`

    })
    blogContainer.innerHTML = result;

}







blogForm.addEventListener("submit", onBlogSubmit)






