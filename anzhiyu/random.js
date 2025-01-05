var posts=["2024/12/26/text1/","2024/12/26/hello-world/","2025/01/05/TEST/","2024/12/26/这是新的/","2024/12/26/title/","2025/01/05/test111/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };