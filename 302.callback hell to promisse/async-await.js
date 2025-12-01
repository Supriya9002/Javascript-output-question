function getUser(callback) {
  setTimeout(() => {
    console.log("Fetched User");
    callback({ id: 1, name: "Supriya" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched Posts");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log("Fetched Comments");
    callback(["comment1", "comment2"]);
  }, 1000);
}

// CALLBACK HELL
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0], (comments) => {
      console.log("Comments:", comments);
    });
  });
});
// convert promisse
getUser()
  .then((user) => {
    return getPosts(user.id);
  })
  .then((posts) => {
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments: (Promisse)", comments);
  });
