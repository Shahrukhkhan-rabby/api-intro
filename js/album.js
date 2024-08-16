function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}

function displayAlbums(albums) {
    const albumContainer = document.getElementById('albums');

    for (const album of albums) {
        const albumDiv = document.createElement('div');
        albumDiv.style.border = '1px solid #ddd';
        albumDiv.style.margin = '10px';
        albumDiv.style.padding = "10px";
        
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.fontWeight = 'bold';
        p.innerText = album.title;
        albumDiv.appendChild(p);

        fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
        )
            .then(res => res.json())
            .then(photos => {
            
                for (let i = 0; i < 5 && i < photos.length; i++) {
                    const img = document.createElement('img');
                    img.src = photos[i].thumbnailUrl;
                    img.alt = photos[i].title;
                    img.style.display = 'block';
                    img.style.margin = '5px auto';
                    albumDiv.appendChild(img);
                }
            });
        albumContainer.appendChild(albumDiv);
        
    }
}
loadAlbum();