document.getElementById('mode-toggle').addEventListener('click', function() {
    var body = document.body;
    var popup = document.createElement('div');
    popup.style.position = 'fixed'; 
    popup.style.bottom = '10px'; 
    popup.style.right = '10px'; 
    popup.style.backgroundColor = 'white'; 
    popup.style.padding = '10px'; 
    popup.style.borderRadius = '5px'; 
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        popup.innerHTML = 'Dark Mode Activated'; 
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        popup.innerHTML = 'Light Mode Activated'; 
    }
    body.appendChild(popup); 
    setTimeout(function() {
        body.removeChild(popup); 
    }, 1500);
});


$(document).ready(function(){
    $("#myModal").modal('show');
  });
  

  // Times for timetable
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
  
  function updateTime() {
    var now = new Date();
    var currentTime = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes() + ':' + (now.getSeconds()<10?'0':'') + now.getSeconds();
  
    document.getElementById('time-widget').textContent = currentTime;
  
    var currentPeriod = '';
    for (var i = 0; i < timetable.length; i++) {
      if (currentTime >= timetable[i].start && currentTime <= timetable[i].end) {
        currentPeriod += timetable[i].event;
        break;
      }
    }
    document.getElementById('timetable').textContent = currentPeriod;
  }
  
  setInterval(updateTime, 1000);
  
  updateTime();
  
