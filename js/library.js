function getInputValueById(id){
     const donation = document.getElementById(id).value;
     const donationNumber = parseFloat(donation);
     return donationNumber;
};

function getTextValueById(id){
     const textValue = document.getElementById(id).innerText;
     const textNumber = parseFloat(textValue);
     return textNumber;
};

function showSectionById(id){
     document.getElementById('donation-section').classList.add('hidden');
     document.getElementById('history-section').classList.add('hidden');
     document.getElementById(id).classList.remove('hidden');
};