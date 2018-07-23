import BpmnViewer from "bpmn-js/lib/Viewer";

// see README.md for instructions

// create your API here

// url of the diagram to display
const bpmnXML =
  "https://rawgit.com/bpmn-io/bpmn-js-examples/master/starter/diagram.bpmn";

export default function showBpmn(xmlUrl) {
  // get the xml data
  return fetch(xmlUrl)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      //BPMN viewer instance
      const viewer = new BpmnViewer({ container: "#app" });
      // convert xml to a string
      const xmlText = new XMLSerializer().serializeToString(data);

      // a promise instance to import the bpmn diagram
      return new Promise((resolve, reject) => {
        // import the BPMN diagram
        viewer.importXML(xmlText, err => {
          if (err) {
            console.log("error", err);
            reject(err);
          } else {
            console.log("successfully rendered the BPMN diagram!");
            resolve("Success");
          }
        });
      });
    })
    .catch(error => {
      //catch and log error that may occur in any one of the failed promise calls that are made above
      console.log("Error in fetching the BPMN xml data", error);
      throw new Error(error);
    });
}

showBpmn(bpmnXML);
