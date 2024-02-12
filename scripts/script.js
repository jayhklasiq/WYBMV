const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let noClicks = 0;
const container = document.querySelector('.container')

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
    container.innerHTML = '';
    const newMessage = `
  <h1> HOW DO I LOVE THEE?</h1>
    <p>How do I love thee? Let me count the ways.</p>
    <p>I love thee to the depth and breadth and height My soul can reach, when
      feeling out of sight For the ends of Being and ideal Grace.</p>
    <p>I love thee to the level of every day's Most quiet need, by sun and
      candlelight.</p>
    <p>I love thee freely, as men strive for Right;</p>
    <p>I love thee purely, as they turn from Praise.</p>
    <p>I love thee with the passion put to use In my old griefs, and with my
      childhood's faith.</p>
    <p>I love thee with a love I seemed to lose With my lost saints—I love thee
      with the breath, Smiles, tears, of all my lifel-and, if God choose, I
      shall but love thee better after death.</p>
    <span>ELIZABETH BARRETT BROWNING</span>
    <h1>LOVE NOT ME FOR COMELY GRACE</h1>
    <p>Love not me for comely grace, For my pleasing eye or face;</p>
    <p>Nor for any outward part, No, nor for a constant heart:</p>
    <p>For these may fail or turn to ill, So thou and I shall sever.</p>
    <p>Keep, therefore, a true woman's eye, And love me still, but know not
      why;</p>
    <p>So hast thou the same reason still
      To doat upon me ever.</p>
    <span>UNKNOWN</span>
  `
    container.innerHTML = newMessage;
  }, 1200);



});

noButton.addEventListener('click', function () {
  // Increase size of yes button by 8px for each click on no button
  noClicks++;
  if (noClicks <= 10) {
    yesButton.style.fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 8 + 'px';
  }
});