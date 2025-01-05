var posts=["2024/12/26/hello-world/","2024/12/26/text1/","2024/12/26/title/","2024/12/26/这是新的/","2025/01/05/TEST/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };