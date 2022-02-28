// load the search api
const searchPhone = () => {
    const searchipInputField = document.getElementById('input-search-text');
    const searchText = searchipInputField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(phoneData => displayPhone(phoneData.data));
    searchipInputField.value = '';
}

// display search result on UI
const displayPhone = (phones) => {
    phones.forEach(phone => {
        const displaySearchResult = document.getElementById('dispaly-phone');
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="phone-container h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <div class= "d-flex justify-content-between align-items-center">
                    <span class="badge bg-success justify-content-end">${phone.brand}</span>
                    <button class="btn btn-success">See Details</button>
                </div>
            </div>
        </div>
        `;
        displaySearchResult.appendChild(div);
    })
}