var box = document.querySelector('#mybox');
box.addEventListener('mouseenter', function () {
    box.setAttribute('material', {color: '#ff0000'});
});

box.addEventListener('mouseleave', function() {
    box.setAttribute('material', {color: '#6173F4'});
});
