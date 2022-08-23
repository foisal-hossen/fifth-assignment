function playerSelectFunction(xyz) {
  const player = xyz.previousElementSibling.textContent;
  const liQ = document.querySelector('ol').childElementCount;

  if(liQ < 5) { 
      const ol = document.querySelector('ol');
      const li = document.createElement('li');
      li.textContent = player;
      ol.appendChild(li);
      xyz.setAttribute('disabled', 'true');
  } else {
      alert('You can select only five players.');
  }
}

document.getElementById('cal-btn').addEventListener('click', function() {
  const perPlayer = parseInt(document.getElementById('per-player').value);
  const liQ = document.querySelector('ol').childElementCount;
  const playerExpenses = perPlayer * liQ;
  document.getElementById('player-expenses').innerText = playerExpenses;
});


document.getElementById('cal-total-btn').addEventListener('click', function() {
  const manager = parseInt(document.getElementById('manager').value);
  const coach = parseInt(document.getElementById('coach').value);
  const playerExpenses = parseInt(document.getElementById('player-expenses').innerText);
  document.getElementById('total').innerText = manager + coach + playerExpenses;
});