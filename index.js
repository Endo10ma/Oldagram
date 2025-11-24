const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let main = document.querySelector("main")

for (let i = 0; i < posts.length; i++){
    const post = posts[i]

    main.innerHTML += `
        <section class="post-content">
            <div class="profile-section">    
                <img class="avatar" src="${post.avatar}">
                <div class="details">
                    <h4>${post.name}</h4>
                    <h5>${post.location}</h5>
                </div>
                
            </div>
            <img class="post" src="${post.post}">
            <div class="actions">
                <img src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src="images/icon-dm.png">
            </div>
            <h3>21,492 likes</h3>
        <p><span>${post.username}</span> ${post.comment} </p>
        </section>
        <div class="filler"></div>
    `


}