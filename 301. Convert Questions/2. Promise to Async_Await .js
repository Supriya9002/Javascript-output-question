// Promisse
getUser()
  .then((user) => getPosts(user))
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

// convert Async / await

async function showPosts() {
  try {
    const user = await getUser();
    const posts = await getPosts(user);
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
}
showPosts()