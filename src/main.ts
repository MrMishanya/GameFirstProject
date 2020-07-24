import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  width: 800,
  height: 600,
});

const mainContainer = new PIXI.Container();

app.stage.addChild(mainContainer);
mainContainer.x = 100;
mainContainer.y = 100;

const a = new PIXI.Graphics();
a.beginFill(0xffffaa);
a.drawCircle(0, 0, 10);
a.endFill;

mainContainer.addChild(a);

app.ticker.add((delta) => {
  a.y = Math.cos(new Date().getMilliseconds() / 150) * 50;
});

document.body.appendChild(app.renderer.view);
