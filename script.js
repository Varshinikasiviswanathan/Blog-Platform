let blogs = [];

function addBlog(){

    const title =
        document.getElementById(
            "title"
        ).value;

    const content =
        document.getElementById(
            "content"
        ).value;

    if(title === "" || content === ""){
        alert("Please fill all fields");
        return;
    }

    blogs.push({
        title,
        content,
        comments:[]
    });

    document.getElementById(
        "title"
    ).value = "";

    document.getElementById(
        "content"
    ).value = "";

    displayBlogs();
}

function displayBlogs(){

    const container =
        document.getElementById(
            "blogContainer"
        );

    container.innerHTML = "";

    blogs.forEach((blog,index)=>{

        const div =
            document.createElement(
                "div"
            );

        div.className =
            "blog-card";

        div.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>

            <button
            class="edit-btn"
            onclick="editBlog(${index})">
                Edit
            </button>

            <button
            class="delete-btn"
            onclick="deleteBlog(${index})">
                Delete
            </button>

            <div class="comment-box">

                <input
                type="text"
                id="comment-${index}"
                placeholder="Add Comment">

                <button
                onclick="addComment(${index})">

                Add Comment

                </button>

            </div>

            <div id="comments-${index}">
            </div>
        `;

        container.appendChild(div);

        showComments(index);
    });
}

function addComment(index){

    const commentText =
        document.getElementById(
            `comment-${index}`
        ).value;

    if(commentText === ""){
        return;
    }

    blogs[index].comments.push(
        commentText
    );

    document.getElementById(
        `comment-${index}`
    ).value = "";

    displayBlogs();
}

function showComments(index){

    const commentDiv =
        document.getElementById(
            `comments-${index}`
        );

    commentDiv.innerHTML = "";

    blogs[index].comments.forEach(
        comment=>{

        const p =
            document.createElement(
                "p"
            );

        p.className =
            "comment";

        p.innerText =
            comment;

        commentDiv.appendChild(p);
    });
}

function editBlog(index){

    const newTitle =
        prompt(
            "Edit Title",
            blogs[index].title
        );

    const newContent =
        prompt(
            "Edit Content",
            blogs[index].content
        );

    if(newTitle && newContent){

        blogs[index].title =
            newTitle;

        blogs[index].content =
            newContent;

        displayBlogs();
    }
}

function deleteBlog(index){

    blogs.splice(index,1);

    displayBlogs();
}
