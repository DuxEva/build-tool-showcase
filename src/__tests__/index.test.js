/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/dom";
import "@testing-library/jest-dom";
import toolsData from "../data/tools.json";

beforeEach(() => {
  document.body.innerHTML = '<main id="content"></main>';
});

test("should create a content", () => {
  document.body.innerHTML = '<main id="content"></main>';
  const content = document.getElementById("content");
  expect(content).not.toBeNull();
});
