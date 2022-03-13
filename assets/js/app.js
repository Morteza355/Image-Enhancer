const image = document.getElementById('image-manage');
const Opacity = document.getElementById('opacity-range');
const grayScale = document.getElementById('gray-scale');
const Blur = document.getElementById('blur-range');
const Brightness = document.getElementById('bright-range');
const Contrast = document.getElementById('contrast-range');
const BtnReset = document.getElementById('reset-btn');
BtnReset.addEventListener('click', e=> {
    Opacity.value = 100;
    grayScale.value = 0;
    Blur.value = 0;
    Brightness.value = 100;
    Contrast.value = 100;
    Color.value = '#000000';
    image.style = '';
});
Opacity.addEventListener('input', e=> {
    image.style.opacity = `${e.target.value}%`;
});
grayScale.addEventListener('input', e=> {
    image.style.filter = `contrast(${Contrast.value}%) brightness(${Brightness.value}%) grayscale(${e.target.value}%) blur(${Blur.value}px)`;
});
Blur.addEventListener('input', e=> {
    image.style.filter = `contrast(${Contrast.value}%) brightness(${Brightness.value}%) grayscale(${grayScale.value}%) blur(${e.target.value}px)`;
});
Brightness.addEventListener('input', e=> {
    image.style.filter = `contrast(${Contrast.value}%) brightness(${e.target.value}%) grayscale(${grayScale.value}%) blur(${Blur.value}px)`;
});
Contrast.addEventListener('input', e=> {
    image.style.filter = `contrast(${e.target.value}%) brightness(${Brightness.value}%) grayscale(${grayScale.value}%) blur(${Blur.value}px)`;
});
const offsetX = document.getElementById('offset-x-range');
const offsetY = document.getElementById('offset-y-range');
const blurRadius = document.getElementById('blur-radius-range');
const Color = document.getElementById('color-range');
offsetX.addEventListener('input', e=> {
    image.style.cssText += `box-shadow : ${e.target.value}px ${offsetY.value}px ${blurRadius.value}px ${Color.value}`;
}); 
offsetY.addEventListener('input', e=> {
    image.style.cssText += `box-shadow : ${offsetX.value}px ${e.target.value}px ${blurRadius.value}px ${Color.value}`;
});
blurRadius.addEventListener('input', e=> {
    image.style.cssText += `box-shadow : ${offsetX.value}px ${offsetY.value}px ${e.target.value}px ${Color.value}`;
}); 
Color.addEventListener('input', e=> {
    image.style.cssText += `box-shadow : ${offsetX.value}px ${offsetY.value}px ${blurRadius.value}px ${e.target.value}`;
}); 
const fileUpload = document.getElementById('file-upload');
fileUpload.addEventListener('change', e => {
    image.src = URL.createObjectURL(e.target.files[0]);
    fileUpload.style.display = 'none';
});
window.onload = function () {
    alert('Upload Your Image !');
}