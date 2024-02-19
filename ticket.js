document.getElementById('first-click').addEventListener('click', function() {
    var element = document.getElementById('second-place');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
