  //GET REQUESTI UCUN


  const getPosts = () => {
    $("#postDesc").val("");


    $.ajax({
      url: "https://bloggy-api.herokuapp.com/posts",
      method: "GET",
      // headers:{
      //     "api-key":"43jhfs",
      //     "Content-Type":"application/json"
      // }
      // data:{
      //     apiKey:"dsasd",
      //     t:"titanic"
      // }
    }).then((res) => {
      console.log("getPosts", res);
      renderPosts(res);
    });
  };

  const createPost = (postData) => {
    $.ajax({
      url: "https://bloggy-api.herokuapp.com/posts",
      method: "POST",
      data: postData,
    })
      .then(() => {
        getPosts()
        $("#postTitle").val("");
        $("#postDesc").val("");
      })
      .catch((err) => {
        alert(err)
      });
  };
