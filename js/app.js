// load the search api
const searchPhone = () => {
    const searchipInputField = document.getElementById('input-search-text');
    const searchText = searchipInputField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(phoneData => displayPhone(phoneData.data));
}

// display search result on UI
const displayPhone = (phones) => {
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
    })
}