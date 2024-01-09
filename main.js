document.getElementById('mode-toggle').addEventListener('click', function() {
    var body = document.body;
    var popup = document.createElement('div'); // create a new div element
    popup.style.position = 'fixed'; // set the position to fixed
    popup.style.bottom = '10px'; // set the bottom margin to 10px
    popup.style.right = '10px'; // set the right margin to 10px
    popup.style.backgroundColor = 'white'; // set the background color to white
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
  

  // Define the timetable
var timetable = [
    { start: '08:30', end: '08:49', event: 'AM Form' },
    { start: '08:50', end: '09:49', event: 'Period 1' },
    { start: '09:50', end: '10:49', event: 'Period 2' },
    { start: '10:50', end: '11:09', event: 'Break' },
    { start: '11:10', end: '12:09', event: 'Period 3' },
    { start: '12:10', end: '13:09', event: 'Period 4' },
    { start: '13:10', end: '13:49', event: 'Lunch' },
    { start: '13:50', end: '14:49', event: 'Period 5' },
    { start: '14:50', end: '14:59', event: 'PM Form' },
    { start: '15:00', end: '08:29', event: 'After School' }
  ];
  
  // Function to update the time and current period
  function updateTime() {
    // Get the current time
    var now = new Date();
    // Add the seconds to the time
    var currentTime = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes() + ':' + (now.getSeconds()<10?'0':'') + now.getSeconds();
  
    // Display the current time
    document.getElementById('time-widget').textContent = currentTime;
  
    // Determine the current period
    var currentPeriod = '';
    for (var i = 0; i < timetable.length; i++) {
      if (currentTime >= timetable[i].start && currentTime <= timetable[i].end) {
        currentPeriod += timetable[i].event;
        break;
      }
    }
    document.getElementById('timetable').textContent = currentPeriod;
  }
  
  // Update the time and current period every second
  setInterval(updateTime, 1000);
  
  // Call updateTime immediately to populate the time and period
  updateTime();
  