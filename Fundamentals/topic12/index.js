$(document).ready(function () {
  //   let promise = $.ajax({
  //     url: "https://bloggy-api.herokuapp.com/posts",
  //     method:"GET",
  //     // headers:{
  //     //     "api-key":"43jhfs",
  //     //     "Content-Type":"application/json"
  //     // }
  //     // data:{
  //     //     apiKey:"dsasd",
  //     //     t:"titanic"
  //     // }
  //   });

  const postList = $("#postList");

  const renderPosts = (arr) => {
    postList.html(
      arr
        .reverse()
        .map(
          (post) => `
                <div class="card m-4 w-100" data-post-id="${post.id}">
                    <img
                    src="https://cdn.dribbble.com/users/713533/screenshots/14158095/media/ae32d01dfc221a34aa5f3a2060a1e028.png?compress=1&resize=400x300"
                    class="card-img-top"
                    height="200"
                    id="moviePoster"
                    style="object-fit: cover"
                    />
                    <div class="card-body">
                    <h5 class="card-title" id="movieName">${post.title}</h5>
                    <p class="card-text" id="movieAwards">
                        ${post.body}
                    </p>
                </div>
            </div>
            `
        )
        .join("")
    );
  };

  $("#addPostBtn").on("click", function () {
    let title = $("#postTitle").val();
    let body = $("#postDesc").val().trim();

    let createPostData = {
      title,
      body,
    };

    console.log(createPostData);
    createPost(createPostData)

  });

  getPosts();

  sayHello(5)

});
