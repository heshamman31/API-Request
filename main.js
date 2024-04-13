let usersReq = new XMLHttpRequest();
usersReq.open('get','https://jsonplaceholder.typicode.com/users');
usersReq.responseType = 'json';
usersReq.send();
usersReq.onload = function(){
    let dev = document.getElementsByClassName('users')[0];
    dev.innerHTML = '';
    for(user of usersReq.response){
        dev.innerHTML += `
        <div onclick="getPosts(${user.id}); this.classList.add('selected')" class="user">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
    </div>`;
}
}




function getPosts(userId){
    let postsReq = new XMLHttpRequest();
    postsReq.open('get',"https://jsonplaceholder.typicode.com/posts?userId="+userId);
    postsReq.responseType = 'json';
    postsReq.send();
    postsReq.onload = function(){
        let postsBox = document.getElementsByClassName('posts-box')[0]
        postsBox.innerHTML='';
        for(post of postsReq.response){
            postsBox.innerHTML += `
            <div class="post">
            <h4>${post.title}</h4>
            <hr>
            <p>${post.body}</p>
            </div>
            `
        }
    }
    let userEle = document.getElementsByClassName('selected');
    for (ele of userEle) {
        ele.classList.remove('selected')
    }
}