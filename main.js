window.addEventListener('load', function (e) {
    console.time('performance');
    var timeline = document.getElementById('timeline'),
        timelineList = document.getElementById('timeline_list'),
        dataLength = data.length,
        posts = document.createDocumentFragment(),
        post,
        dot,
        author,
        time,
        content,
        button,
        i;

    //Create posts
    for (i = 0; i < dataLength; i++) {

        post = document.createElement('li');
        
        author = document.createElement('strong');
        author.textContent = data[i].owner;
        post.appendChild(author);

        time = document.createElement('time');
        time.textContent = data[i].date;
        post.appendChild(time);

        content = document.createElement('p');
        content.textContent = data[i].content;
        post.appendChild(content);

        if (data[i].comments) {
            button = document.createElement('button');

            button.textContent = 'comments (' + data[i].comments.length + ')';
            button.addEventListener('click', function () {
                alert('TODO - comment section');
            });
            post.appendChild(button);
        }

        dot = document.createElement('div');
        dot.className = 'dot';
        post.appendChild(dot);

        posts.appendChild(post);
    }

    timelineList.appendChild(posts);
    console.timeEnd('performance');
}, false);
