export function layout(title, content) {
    return `
    <html>
    <head>
      <title>${title}</title>
      <style>
        body {
          padding: 80px;
          font: 16px Helvetica, Arial;
          background: #f6f9fa;
          color: #333;
          line-height: 1.6;
        }
  
        h1 {
          font-size: 2.5em;
          color: #007bff;
          align: center;
        }
  
        h2 {
          font-size: 1.8em;
          color: #0056b3;
        }
  
        #posts {
          margin: 20px auto;
          max-width: 300px;
          padding: 0;
        }
  
        #posts li {
          margin: 20px 0;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
        }
  
        #posts li:last-child {
          border-bottom: none;
        }
  
        textarea {
          width: 500px;
          height: 300px;
        }
  
        input[type=text],
        textarea {
          border: 1px solid #eee;
          border-top-color: #ddd;
          border-left-color: #ddd;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
        }
  
        input[type=text] {
          width: 500px;
        }
      </style>
    </head>
    <body>
      <section id="content">
        ${content}
      </section>
    </body>
    </html>
    `
  }
  
  // 顯示貼文列表，並加入貼文建立時間
  export function list(posts) {
    let list = []
    for (let post of posts) {
      const formattedDate = new Date(post.created_at).toLocaleString(); // 格式化時間
      list.push(`
      <li class="post-item">
        <h2 class="post-title">${ post.title }</h2>
        <p class="post-date">Created at: ${formattedDate}</p> <!-- 顯示貼文的建立時間 -->
        <p class="read-btn"><a href="/post/${post.id}">Read post</a></p>
      </li>      
      `)
    }
    let content = `
    <h1 class="page-title">Posts</h1>
    <p class="page-count">You have <strong>${posts.length}</strong> posts!</p>
    <p><a class="creat-btn" href="/post/new">Create a Post</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>

    <style>
        #content {
          text-align: center;
        }
        .page-title {
          font-size: 2.5em;
          color: #007bff;
          text-align: center;
          margin-bottom: 20px;
        }
        .page-count {
          font-size: 1.2em;
          color: #555;
        }
        .post-item {
          margin: 20px 0;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          text-align: left;
        }
        .post-title {
          font-size: 1.8em;
          color: #007bff;
        }
        .post-date {
          font-size: 1em;
          color: #777;
        }
        .read-btn,.creat-btn {
          display: inline-block;
          padding: 10px 20px;
          background: #007bff;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1em;
          color: white;
          transition: background 0.3s;
        }
    </style>
    `
    return layout('Posts', content)
  }
  
  // 顯示新增貼文的表單
  export function newPost() {
    return layout('New Post', `
    <h1>New Post</h1>
    <p>Create a new post.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
    </form>
    `)
  }
  
  // 顯示特定貼文的內容，並加入貼文建立時間
  export function show(post) {
    const formattedDate = new Date(post.created_at).toLocaleString(); // 格式化時間
    return layout(post.title, `
      <h1>${post.title}</h1>
      <pre>${post.body}</pre>
      <p>Created at: ${formattedDate}</p> <!-- 顯示貼文的建立時間 -->
    `)
  }
  
