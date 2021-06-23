// alert("test")

"use strict";

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addS(s) {
    return new Vector2(this.x + s, this.y + s);
  }

  subS(s) {
    return new Vector2(this.x - s, this.y - s);
  }

  mulS(s) {
    return new Vector2(this.x * s, this.y * s);
  }

  divS(s) {
    return new Vector2(this.x / s, this.y / s);
  }

  addV(v) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  subV(v) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  mulV(v) {
    return new Vector2(this.x * v.x, this.y * v.y);
  }

  divV(v) {
    return new Vector2(this.x / v.x, this.y / v.y);
  }

  len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalized() {
    const len = this.len();

    return new Vector2(this.x / len, this.y / len);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
}

class Ball {
  constructor(pos, r) {
    this.pos = pos;
    this.r = r;
    this.mass = r;
    this.v = new Vector2(0, 0);
  }

  addForce(f) {
    this.v = this.v.addV(f.divS(this.mass));
  }

  update(friction) {
    this.pos = this.pos.addV(this.v);
    this.v = this.v.mulS(friction);
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

class Wiper {
  constructor(pos, len, bottomWidth, topWidth) {
    this.pos = pos;
    this.len = len;
    this.bottomWidth = bottomWidth;
    this.topWidth = topWidth;

    this.base = new Vector2(0, 0);
    this.tip = new Vector2(0, -len);

    this.update();
  }

  update(rot = 0.0) {
    let cos = Math.cos(rot);
    let sin = Math.sin(rot);

    this.tPosBase = new Vector2(
      cos * this.base.x - sin * this.base.y,
      sin * this.base.x + cos * this.base.y
    );
    this.tPosTip = new Vector2(
      cos * this.tip.x - sin * this.tip.y,
      sin * this.tip.x + cos * this.tip.y
    );

    this.tPosBase = this.tPosBase.addV(this.pos);
    this.tPosTip = this.tPosTip.addV(this.pos);
  }

  render(ctx) {
    const dir = this.tPosTip.subV(this.tPosBase).normalized();
    let nor = new Vector2(-dir.y, dir.x);
    ctx.beginPath();
    ctx.moveTo(
      this.tPosBase.subV(nor.mulS(this.bottomWidth)).x,
      this.tPosBase.subV(nor.mulS(this.bottomWidth)).y
    );
    ctx.lineTo(
      this.tPosTip.subV(nor.mulS(this.topWidth)).x,
      this.tPosTip.subV(nor.mulS(this.topWidth)).y
    );
    ctx.lineTo(
      this.tPosTip.addV(nor.mulS(this.topWidth)).x,
      this.tPosTip.addV(nor.mulS(this.topWidth)).y
    );
    ctx.lineTo(
      this.tPosBase.addV(nor.mulS(this.bottomWidth)).x,
      this.tPosBase.addV(nor.mulS(this.bottomWidth)).y
    );
    ctx.lineTo(
      this.tPosBase.subV(nor.mulS(this.bottomWidth)).x,
      this.tPosBase.subV(nor.mulS(this.bottomWidth)).y
    );
    ctx.stroke();
  }
}

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.cvs = document.getElementById("cvs");
    this.cvs.setAttribute("width", width);
    this.cvs.setAttribute("height", height);
    this.ctx = this.cvs.getContext("2d");

    this.times = [];
  }

  start() {
    this.init();
    this.run();
  }

  init() {
    this.friction = 0.995;
    this.gravity = 0.7;
    this.balls = [];
    this.wiper = new Wiper(
      new Vector2(this.width / 2.0, this.height - 10),
      this.height * 0.88, // wiper 길이
      100,
      50
    );

    const spread = 0.8;

    for (let i = 0; i < 100; i++) {
      let b = new Ball(
        new Vector2(
          (Math.random() - 0.5) * this.width * spread + this.width / 2.0,
          (Math.random() - 0.5) * this.height * spread + this.height / 2.0
        ),
        Math.random() * 10 + 15
      );

      b.addForce(
        new Vector2(Math.random() - 0.5, Math.random() - 0.5).mulV(
          new Vector2(100, 100)
        )
      );
      this.balls.push(b);
    }

    let b = new Ball(new Vector2(100, 100), 10);
    b.addForce(new Vector2(10, 0));

    this.balls.push(b);

    b = new Ball(new Vector2(200, 110), 10);
    b.addForce(new Vector2(-10, 0));

    this.balls.push(b);
  }

  run() {
    // console.log(true);
    const now = performance.now();
    this.times.push(now);

    if (now - this.times[0] > 1000) {
      this.times.shift();
    }
    // console.log(this.times.length);

    this.update();
    this.render();

    requestAnimationFrame(this.run.bind(this));
  }

  update() {
    this.balls.forEach(b => {
      b.update(this.friction);
    });

    let colliders = [];

    // wiper 속도
    this.wiper.update(Math.sin(performance.now() / 800) * 1.5);

    this.balls.forEach(b => {
      this.balls.forEach(t => {
        if (b === t) return;

        let dir = t.pos.subV(b.pos);
        const dist = dir.len();

        if (dist < b.r + t.r) {
          colliders.push([b, t]);
          dir = dir.normalized();
          const gap = b.r + t.r - dist;
          t.pos = t.pos.addV(dir.mulS(gap / 2.0));
          //   b.pos = b.pos.addV(dir.mulS(gap / 2.0));
        }
      });
    });

    colliders.forEach(pair => {
      const b = pair[0];
      const t = pair[1];

      const dir = t.pos.subV(b.pos).normalized();
      const nor = new Vector2(-dir.y, dir.x);

      const u1 = dir.dot(b.v);
      const u2 = dir.dot(t.v);

      const vn1 = nor.dot(b.v);
      const vn2 = nor.dot(t.v);

      const vd1 =
        ((b.mass - t.mass) * u1 + 2 * t.mass * u2) / (b.mass + t.mass);
      const vd2 =
        ((t.mass - b.mass) * u2 + 2 * b.mass * u1) / (b.mass + t.mass);

      b.v = dir.mulS(vd1).addV(nor.mulS(vn1));
      t.v = dir.mulS(vd2).addV(nor.mulS(vn2));
    });

    this.balls.forEach(b => {
      b.addForce(new Vector2(0, this.gravity));
    });

    this.balls.forEach(b => {
      if (b.pos.x - b.r < 0) {
        b.pos.x = b.r;
        b.v.x = b.v.x * -1;
      }

      if (b.pos.y - b.r < 0) {
        b.pos.y = b.r;
        b.v.y = b.v.y * -1;
      }

      if (b.pos.x + b.r >= this.width) {
        b.pos.x = this.width - b.r;
        b.v.x = b.v.x * -1;
      }

      if (b.pos.y + b.r >= this.height) {
        b.pos.y = this.height - b.r;
        b.v.y = b.v.y * -1;
      }
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.fillStyle = "white";
    this.ctx.font = "22px Quicksand";
    this.ctx.fillText(this.times.length - 1 + "fps", 15, 35);

    this.balls.forEach(b => {
      b.render(this.ctx);
    });

    this.wiper.render(this.ctx);
  }
}

window.onload = () => {
  new Game(1600, 900).start();
};
