// load the search api
const searchPhone = () => {
    const searchipInputField = document.getElementById('input-search-text');
    const searchText = searchipInputField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(phoneData => displayPhone(phoneData.data));
    searchipInputField.value = '';
    detailsShow.textContent = '';
}

// display search result on UI
const displayPhone = (phones) => {
    const displaySearchResult = document.getElementById('dispaly-phone');
    displaySearchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="phone-container h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <div class= "d-flex justify-content-between align-items-center">
                    <span class="badge bg-success justify-content-end">${phone.brand}</span>
                    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success details-btn">See Details</button>
                </div>
            </div>
        </div>
        `;
        displaySearchResult.appendChild(div);
    })
}

// phone details
const phoneDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(phoneData => dispalyPhoneDetails(phoneData.data));
}
// display phone details
const detailsShow = document.getElementById('phone-details');
const dispalyPhoneDetails = (details) => {
    console.log(details)
    detailsShow.innerHTML = `
    <div class="col">
        <div class="p-3 text-center">
            <img class="w-50" src="${details.image}" alt="">
        </div>
    </div>
    <div class="col">
        <div>
            <h1>${details.name}</h1>
                <h5>${details.releaseDate}</h5>
            <h5>Main Featrues</h5>
            <ul>
                <li><span class="fw-bold">chipSet:</span> ${details.mainFeatures.chipSet}</li>
                <li><span class="fw-bold">displaySize:</span> ${details.mainFeatures.displaySize}</li>
                <li><span class="fw-bold">memory:</span> ${details.mainFeatures.memory}</li>
            </ul>
        </div>
    </div>
    `;
}

