var posts=["2024/12/26/hello-world/","2025/01/05/大学日志/","2024/12/26/这是新的/","2025/01/05/new/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };