// load the search api
const searchPhone = () => {
    const searchipInputField = document.getElementById('input-search-text');
    const error = document.getElementById('error');
    const searchText = searchipInputField.value;
    if (!isNaN(searchText) || searchText === '') {
        error.innerText = "*Please Enter a valid phone name(e.g: iphone)"
        searchipInputField.value = '';
        detailsShow.textContent = '';
        displaySearchResult.textContent = '';
        otherDetails.textContent = '';
        document.getElementById('other-details').style.display = 'none';

    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(res => res.json())
            .then(phoneData => displayPhone(phoneData.data));
        searchipInputField.value = '';
        detailsShow.textContent = '';
        otherDetails.textContent = '';
        error.textContent = '';
        document.getElementById('other-details').style.display = 'none';
    }
}

// display search result on UI
const displaySearchResult = document.getElementById('dispaly-phone');
const displayPhone = (phones) => {
    const phones20Result = phones.slice(0, 20);
    displaySearchResult.textContent = '';
    phones20Result.forEach(phone => {
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
const otherDetails = document.getElementById('other-details')
const dispalyPhoneDetails = (details) => {
    console.log(details)
    error.textContent = '';
    detailsShow.innerHTML = `
    <div class="col">
        <div class="p-3 text-center">
            <img class="w-50" src="${details.image}" alt="">
        </div>
    </div>
    <div class="col">
        <div>
            <h1>${details.name}</h1>
                <h5>${details.releaseDate ? details.releaseDate : '<span class="text-danger">Release Date Not Found!</span>'}</h5>
            <h5>Main Featrues-</h5>
            <ul>
                <li><span class="fw-bold">chipSet:</span> ${details.mainFeatures.chipSet}</li>
                <li><span class="fw-bold">displaySize:</span> ${details.mainFeatures.displaySize}</li>
                <li><span class="fw-bold">memory:</span> ${details.mainFeatures.memory}</li>
                <li><span class="fw-bold">storage:</span> ${details.mainFeatures.storage}</li>
            </ul>
            <h5>Sensors-</h5>
            <ul class="overflow-hidden">
                <li> ${details.mainFeatures.sensors.map(sensor => sensor)}</li>
            </ul>
        </div>
    </div>
    `;
    document.getElementById('other-details').style.display = 'block';
    //display other details on UI
    otherDetails.innerHTML = `
        <div class="col">
            <h1>Other details</h1>
            <ul>
                <li><span class="fw-bold">Bluetooth :</span> ${details.others.Bluetooth}: </li>
                <li><span class="fw-bold">GPS :</span> ${details.others.GPS}</li>
                <li><span class="fw-bold">NFC :</span> ${details.others.NFC}</li>
                <li><span class="fw-bold">Radio :</span> ${details.others.Radio}</li>
                <li><span class="fw-bold">USB :</span> ${details.others.USB}</li>
                <li><span class="fw-bold">WLAN :</span> ${details.others.WLAN}</li>
            </ul>
        </div>
    `;
}

