function u(t) {
  c.width ^= 0;
  for (i = 0; i < 1e3; i++) {
    x.moveTo(
      (v = 960 + C((i % 100) + t * S((t / 3.14) % i)) * i),
      (b = 540 - T((i % (2 + t * 1e-4)) + S(t)) * i)
    );
    x.arc(v, b, 20, -1, 1);
  }
  x.fill();
}

const x = c.getContext("2d");
const S = Math.sin;
const C = Math.cos;
const T = Math.tan;
const TIME_START = Date.now();

function loop() {
  u((Date.now() - TIME_START) * 1e-3);
  window.requestAnimationFrame(loop);
}

loop();
