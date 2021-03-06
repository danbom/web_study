import logo from "./logo.svg";
import "./App.css";

class Wheel {
  constructor() {
    this.nbItems = 26;
    this.stepAngle = 360 / this.nbItems;
    this.stepIndex = 0;

    // Properties for drag
    this.dragActive = false;
    this.startAngle = 0;
    this.nextClockwiseAngle = this.stepAngle;
    this.nextCounterClockwiseAngle = this.stepAngle * -1;
    this.Rad2Deg = 180 / Math.PI;
    this.dragContainer = document.querySelector(".js-container");
    let elClientRect = this.dragContainer.getBoundingClientRect();
    this.center = {
      x: elClientRect.left + elClientRect.width / 2,
      y: elClientRect.top + elClientRect.height / 2,
    };

    this.prevCoords = {
      x: 0,
      y: 0,
    };

    // Properties for elements rotation
    this.circleSize = 623;
    this.itemSize = 42;
    this.elRotation = 0;
    this.els = document.querySelectorAll(".js-letter");
  }

  init() {
    this.dragContainer.addEventListener(
      "mousedown",
      e => {
        this.start(e);
      },
      false
    );

    document.addEventListener("mousemove", e => {
      if (this.dragActive) {
        this.rotate(e);
      }
    });

    document.bind("mouseup", e => {
      e.preventDefault();
      this.stop(e);
    });
  }

  start(e) {
    e.preventDefault();

    let x = e.clientX - this.center.x;
    let y = e.clientY - this.center.y;

    this.startAngle = this.Rad2Deg * Math.atan2(y, x);
    this.prevCoords = {
      x: x,
      y: y,
    };

    this.dragActive = true;
  }

  rotate(e) {
    e.preventDefault();

    let x = e.clientX - this.center.x;
    let y = e.clientY - this.center.y;
    let d = this.Rad2Deg * Math.atan2(y, x);

    if (y !== this.prevCoords.y) {
      let rotation = d - this.startAngle;
      let direction = this.getRotationDirection(x, y);

      if (direction === "clockwise") {
        if (rotation >= this.nextClockwiseAngle) {
          this.rotation = rotation;

          if (this.stepIndex === this.nbItems - 1) {
            this.stepIndex = 0;
          } else {
            this.stepIndex += 1;
          }

          this.putElOnCircle();
          this.setActiveItem();

          this.nextClockwiseAngle += this.stepAngle;
          this.nextCounterClockwiseAngle =
            this.nextClockwiseAngle - this.stepAngle * 2;
        }
      } else if (direction === "counterclockwise") {
        if (rotation <= this.nextCounterClockwiseAngle) {
          this.rotation = rotation;

          if (this.stepIndex === 0) {
            this.stepIndex = this.nbItems - 1;
          } else {
            this.stepIndex -= 1;
          }

          this.putElOnCircle();
          this.setActiveItem();

          this.nextCounterClockwiseAngle -= this.stepAngle;
          this.nextClockwiseAngle =
            this.nextCounterClockwiseAngle + this.stepAngle * 2;
        }
      }

      this.prevCoords = {
        x: x,
        y: y,
      };
    }
  }

  getRotationDirection(x, y) {
    if (x > 0 && y < 0) {
      if (y > this.prevCoords.y) {
        return "clockwise";
      } else {
        return "counterclockwise";
      }
    } else if (x > 0 && y > 0) {
      if (y > this.prevCoords.y) {
        return "clockwise";
      } else {
        return "counterclockwise";
      }
    } else if (x < 0 && y > 0) {
      if (y < this.prevCoords.y) {
        return "clockwise";
      } else {
        return "counterclockwise";
      }
    } else if (x < 0 && y < 0) {
      if (y < this.prevCoords.y) {
        return "clockwise";
      } else {
        return "counterclockwise";
      }
    }
  }

  setActiveItem() {
    let activeItemIndex = this.nbItems - this.stepIndex;
    if (activeItemIndex === this.nbItems) {
      activeItemIndex = 0;
    }
    document
      .querySelector(".js-letter.is-active")
      .classList.remove("is-active");
    this.els[activeItemIndex].classList.add("is-active");
  }

  putElOnCircle() {
    let elRotation = 0;
    this.els.forEach((el, index) => {
      el.style.transform =
        "rotate(" +
        parseFloat(elRotation + this.stepAngle * this.stepIndex) +
        "deg) translate(" +
        this.circleSize / 2 +
        "px) rotate(" +
        parseFloat(elRotation + this.stepAngle * this.stepIndex) * -1 +
        "deg)";

      elRotation = elRotation + this.stepAngle;
    });
  }

  stop() {
    this.nextClockwiseAngle = this.stepAngle;
    this.nextCounterClockwiseAngle = this.stepAngle * -1;
    this.dragActive = false;
  }
}

this.wheel = new Wheel();
this.wheel.init();

function App() {
  return (
    <div class="wheel-container">
      <div class="wheel js-container">
        <p class="letter is-active js-letter">
          <span class="letter-text">A</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">B</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">C</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">D</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">E</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">F</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">G</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">H</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">I</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">J</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">K</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">L</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">M</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">N</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">O</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">P</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">Q</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">R</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">S</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">T</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">U</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">V</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">W</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">X</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">Y</span>
        </p>
        <p class="letter js-letter">
          <span class="letter-text">Z</span>
        </p>
      </div>
    </div>
  );
}

export default App;
