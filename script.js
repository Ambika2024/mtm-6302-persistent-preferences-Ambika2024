document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const listStyleSelect = document.getElementById('list-style');
    const itemList = document.getElementById('item-list');
    const imageDropdown = document.getElementById('image-dropdown');

    // Apply saved preferences
    const savedColor = localStorage.getItem('themeColor');
    const savedListStyle = localStorage.getItem('listStyle');
    const savedBackgroundImage = localStorage.getItem('backgroundImage');

    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorPicker.value = savedColor;
    }

    if (savedListStyle) {
        itemList.className = savedListStyle;
        listStyleSelect.value = savedListStyle;
    }

    if (savedBackgroundImage) {
        document.body.style.backgroundImage = `url(${savedBackgroundImage})`;
        imageDropdown.value = savedBackgroundImage;
    }

    // Update preferences
    colorPicker.addEventListener('input', () => {
        document.body.style.backgroundColor = colorPicker.value;
        localStorage.setItem('themeColor', colorPicker.value);
    });

    listStyleSelect.addEventListener('change', () => {
        itemList.className = listStyleSelect.value;
        localStorage.setItem('listStyle', listStyleSelect.value);
    });

    imageDropdown.addEventListener('change', () => {
        const imageUrl = imageDropdown.value;
        document.body.style.backgroundImage = imageUrl ? `url(${imageUrl})` : '';
        localStorage.setItem('backgroundImage', imageUrl);
    });
});


