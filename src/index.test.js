import { expect } from "chai";
import { JSDOM } from "jsdom";
import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  })
});

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { window } = new JSDOM(index);
    const header = window.document.getElementsByTagName("h1")[0];
    expect(header.innerHTML).to.equal("Hello World");
  });
})
