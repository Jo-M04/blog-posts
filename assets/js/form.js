// Form validation and submission logic
document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!username || !title || !content) {
      alert("Please complete all fields");
      return;
    }

    // Save blog post data to localStorage
    const postData = {
      username: username,
      title: title,
      content: content,
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(postData);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect to posts page
    window.location.href = "blog.html";
  });
