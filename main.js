document.getElementById('mode-toggle').addEventListener('click', function() {
    var body = document.body;
    var popup = document.createElement('div'); // create a new div element
    popup.style.position = 'fixed'; // set the position to fixed
    popup.style.bottom = '10px'; // set the bottom margin to 10px
    popup.style.right = '10px'; // set the right margin to 10px
    popup.style.backgroundColor = '#1a1a1a'; // set the background color to white
    popup.style.padding = '10px'; // set the padding to 10px
    popup.style.borderRadius = '5px'; // set the border radius to 5px
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        popup.innerHTML = 'Dark Mode Activated'; // set the popup text to Dark Mode Activated
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        popup.innerHTML = 'Light Mode Activated'; // set the popup text to Light Mode Activated
    }
    body.appendChild(popup); // add the popup to the body
    setTimeout(function() {
        body.removeChild(popup); // remove the popup after 1.5 seconds
    }, 1500);
});


$(document).ready(function(){
    $("#myModal").modal('show');
  });
  