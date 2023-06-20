fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    // Create HTML elements for each post
    const appContainer = document.getElementById('app');
    data.forEach(post => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create title element
        const title = document.createElement('h1');
        title.textContent = post.title;

        // Create text element
        const text = document.createElement('p');
        text.textContent = post.body;

        // Append title and text to the card
        card.appendChild(title);
        card.appendChild(text);

        // Append the card to the app container
        appContainer.appendChild(card);
    });
})
.catch(error => {
    console.log('Error:', error);
});