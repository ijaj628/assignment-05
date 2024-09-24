document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    const addDonation = getInputValueById('add-donation');
    if (addDonation > 0 || !isNAN) {
        const balance = getTextValueById('account-balance')
        const newBalance = balance + addDonation;
        document.getElementById('account-balance').innerText = newBalance;
        
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="ml-10 mr-10 mb-10 py-6 px-10 border border-black rounded">${newBalance} Taka is Donated for famine-2024 at Noakhali, Bangladesh.</div>
        `;
        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Failed to add the donation.');
    }
});


document.getElementById('btn-donation1').addEventListener('click', function (event) {
    event.preventDefault();
    const addDonation1 = getInputValueById('add-donation1');
    if (addDonation1 > 0 || !isNAN) {
        const balance1 = getTextValueById('account-balance1')
        const newBalance1 = balance1 + addDonation1;
        document.getElementById('account-balance1').innerText = newBalance1;
        
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="ml-10 mr-10 mb-10 py-6 px-10 border border-black rounded">${newBalance1} Taka is Donated for famine-2024 at Feni, Bangladesh.</div>
        `;
        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Failed to add the donation.');
    }
});


document.getElementById('btn-donation2').addEventListener('click', function (event) {
    event.preventDefault();
    const addDonation2 = getInputValueById('add-donation2');
    if (addDonation2 > 0 || !isNAN) {
        const balance2 = getTextValueById('account-balance2')
        const newBalance2 = balance2 + addDonation2;
        document.getElementById('account-balance2').innerText = newBalance2;
        
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="ml-10 mr-10 mb-10 py-6 px-10 border border-black rounded">${newBalance2} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</div>
        `;
        document.getElementById('history-container').appendChild(div);
    }
    else {
        alert('Failed to add the donation.');
    }
});