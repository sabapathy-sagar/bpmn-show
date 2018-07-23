import showBpmn from "./index";

// the tests are run using JEST

// use JEST expect to write assertions:
// https://facebook.github.io/jest/docs/en/expect.html

describe("show-bpmn", function() {
  it("should load and show example diagram", () => {
    const BPMN_DIAGRAM_URL =
      "https://rawgit.com/bpmn-io/bpmn-js-examples/master/starter/diagram.bpmn";
    // verify correct diagram loading
    return showBpmn(BPMN_DIAGRAM_URL).then(res => {
      expect(res).toBe("Success");
    });
  });
  it("should handle load error (invalid URL)", () => {
    const BPMN_DIAGRAM_URL = "invalidUrl";
    // verify handling of invalid urls
    return showBpmn(BPMN_DIAGRAM_URL).then(null, err => {
      expect(err).toBeTruthy();
    });
  });
});
