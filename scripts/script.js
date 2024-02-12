const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let noClicks = 0;

yesButton.addEventListener('click', function () {
  // Display confetti for 15 seconds
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 150,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 150,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 1000,
    scalar: 4,
  });

  setTimeout(() => {
    location.reload(); // Reload the page after 15 seconds
  }, 15000);
});

noButton.addEventListener('click', function () {
  // Increase size of yes button by 8px for each click on no button
  noClicks++;
  if (noClicks <= 10) {
    yesButton.style.fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 8 + 'px';
  }
});