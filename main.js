window.addEventListener('load', function (e) {
    console.time('performance');
    var timeline = document.getElementById('timeline'),
        timelineList = document.getElementById('timeline_list'),
        dataLength = data.length,
        posts = document.createDocumentFragment(),
        currentData,
        post,
        dot,
        author,
        time,
        content,
        button,
        i;

    //Create posts
    for (i = 0; i < dataLength; i++) {

        currentData = data[i];

        post = document.createElement('li');
        
        author = document.createElement('strong');
        author.textContent = currentData.owner;
        post.appendChild(author);

        time = document.createElement('time');
        time.textContent = currentData.date;
        post.appendChild(time);

        content = document.createElement('p');
        content.textContent = currentData.content;
        post.appendChild(content);

        if (currentData.comments) {
            button = document.createElement('button');
            button.textContent = 'comments (' + currentData.comments.length + ')';
            post.appendChild(button);
        }

        dot = document.createElement('div');
        dot.className = 'dot';
        post.appendChild(dot);

        posts.appendChild(post);
    }

    timelineList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            alert('TODO - comment section');
        }
    }, false);

    timelineList.appendChild(posts);
    console.timeEnd('performance');
}, false);
