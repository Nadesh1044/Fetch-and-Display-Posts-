async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        handleError(error);
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

function handleError(error) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = `<p>Error: ${error.message}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
});
