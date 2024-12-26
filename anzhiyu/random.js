var posts=["2024/12/26/hello-world/","2024/12/26/这是新的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };