function toggleDropdown1() {
    const dropdown = document.getElementById('dropdownList');
    const arrowIcon = document.getElementById('arrowIcon');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0deg)';
    }
} 

function toggleDropdown2() {
    const dropdown = document.getElementById('dropdownList2');
    const arrowIcon = document.getElementById('arrowIcon2');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        arrowIcon.style.transform = 'rotate(180deg)';
    }
} 

function toggleDropdown3() {
    const dropdown = document.getElementById('dropdownList3');
    const arrowIcon = document.getElementById('arrowIcon3');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        arrowIcon.style.transform = 'rotate(180deg)';
    }
} 

function toggleDropdown4() {
    const dropdown = document.getElementById('dropdownList4');
    const arrowIcon = document.getElementById('arrowIcon4');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        arrowIcon.style.transform = 'rotate(180deg)';
    }
} 

function productDetails() {
    const dropdown = document.getElementById('ProductDetail');
    const arrowIcon = document.getElementById('arrowIcon5');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        arrowIcon.style.transform = 'rotate(180deg)';
    }
} 

function moreInfo() {
    const dropdown = document.getElementById('moreInfo');
    const arrowIcon = document.getElementById('arrowIcon6');
    dropdown.classList.toggle('hidden');
    
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.style.transform = 'rotate(0deg)';
    } else {
        arrowIcon.style.transform = 'rotate(180deg)';
    }
} 