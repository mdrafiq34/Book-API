let  searchBooks = () => {
    
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    // console.log(searchText); 
    searchField.value='';

    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBook(data.items));
    
    
}


function displaySearchBook(items) {
    console.log(items)
    let searchBookItem = document.getElementById('search-box');
    for (let item of items) {
        console.log(item)

        
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadBookDetails(${item.id})" class="card h-auto">
            <img src=" ${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top w-50 mx-auto" alt="Book image">
            <div class="card-body">
                <h4 class="card-title">Book: ${item.volumeInfo.title} </h4>
                <h4 class="card-title">Writer: ${item.volumeInfo.authors} </h4>
                <h5 class="card-title">Published: ${item.volumeInfo.publishedDate}  (${item.volumeInfo.categories}) </h5>
                <h6 class="card-title">Totalpage: ${item.volumeInfo.pageCount}    Rating: ${item.volumeInfo.averageRating} </h6>
                <p class="card-text">Description:${item.volumeInfo.description.slice(0,100)}</p>
            </div>
        </div>
        `;
         searchBookItem.appendChild(div);
    }
   
}

let loadBookDetails = bookId => {
    alert(bookId)
}


