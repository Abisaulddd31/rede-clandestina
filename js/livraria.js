// Simulação de dados dos livros (normalmente viria de um backend)
const allBooks = [
    { title: 'Livro Exemplo 1', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 150 },
    { title: 'Livro Exemplo 2', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 200 },
    { title: 'Livro Exemplo 3', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 50 },
    { title: 'Livro Exemplo 4', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 300 },
    { title: 'Livro Exemplo 5', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 100 },
    { title: 'Livro Exemplo 6', image: 'https://via.placeholder.com/150', downloadLink: '#', viewLink: '#', downloads: 500 },
   
];

let filteredBooks = [...allBooks]; // Books a serem exibidos após filtro

function loadBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';  // Limpa a lista de livros

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.image}" alt="Capa do Livro">
            <h3>${book.title}</h3>
            <div class="buttons-container">
                <button class="button" onclick="window.location.href='${book.downloadLink}'"><i class="fas fa-download"></i>Download</button>
                <button class="button" onclick="window.location.href='${book.viewLink}'"><i class="fas fa-eye"></i>Visualizar</button>
            </div>
        `;
        bookList.appendChild(bookCard);
    });
}

function filterBooks(filter) {
    switch (filter) {
        case 'downloads':
            filteredBooks = [...allBooks].sort((a, b) => b.downloads - a.downloads); // Ordena por downloads
            break;
        case 'alphabetical':
            filteredBooks = [...allBooks].sort((a, b) => a.title.localeCompare(b.title)); // Ordena alfabeticamente
            break;
        case 'mixed':
            filteredBooks = [...allBooks]; // Misturado, sem alteração
            break;
        default:
            filteredBooks = [...allBooks]; // Sem filtro
    }

    loadBooks(filteredBooks); // Recarrega os livros filtrados
}

// Função de pesquisa
function searchBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchTerm));
    loadBooks(filteredBooks);
}

// Inicializa os livros ao carregar a página
loadBooks(filteredBooks);
