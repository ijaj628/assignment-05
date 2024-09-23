document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    const subDonation = getInputValueById('add-donation');
    if (subDonation > 0 || !isNAN) {
        const balance = getTextValueById('main-donation')
        const newBalance = balance - subDonation;
        document.getElementById('main-donation').innerText = newBalance;
    }
    else {
        alert('Failed to add the donation.');
    }
});


document.getElementById('btn-donation1').addEventListener('click', function (event) {
    event.preventDefault();
    const subDonation1 = getInputValueById('add-donation1');
    if (subDonation1 > 0 || !isNAN) {
        const balance = getTextValueById('main-donation')
        const newBalance = balance - subDonation1;
        document.getElementById('main-donation').innerText = newBalance;
    }
    else {
        alert('Failed to add the donation.');
    }
});


document.getElementById('btn-donation2').addEventListener('click', function (event) {
    event.preventDefault();
    const subDonation2 = getInputValueById('add-donation2');
    if (subDonation2 > 0 || !isNAN) {
        const balance = getTextValueById('main-donation')
        const newBalance = balance - subDonation2;
        document.getElementById('main-donation').innerText = newBalance;
    }
    else {
        alert('Failed to add the donation.');
    }
});