var posts=["posts/1d65caa7.html","posts/ea6d17dc.html","posts/4a17b156.html","posts/15d1eb56.html","posts/ea1bff1b.html","posts/ac9cf1f1.html","posts/f2c8fa34.html","posts/8bec8784.html","posts/35945283.html","posts/47402b14.html","posts/1706a3c7.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};