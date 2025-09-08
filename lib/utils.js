import confetti from 'canvas-confetti';

export const runFireworks = () => {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

// Convert USD to JPY and format with Japanese Yen symbol and commas
export const formatJPYPrice = (usdPrice) => {
  // Convert USD to JPY (approximate exchange rate: 1 USD = 150 JPY)
  const jpyPrice = Math.round(usdPrice * 150);
  
  // Format with commas and yen symbol
  return `¥${jpyPrice.toLocaleString('ja-JP')}`;
}