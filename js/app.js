// load the search api
const searchPhone = () => {
    const searchipInputField = document.getElementById('input-search-text');
    const searchText = searchipInputField.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(phoneData => console.log(phoneData.data));
}