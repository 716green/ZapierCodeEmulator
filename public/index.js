import "./styles.css";

// TODO:
// Declare your variables:
let inputData = {
  // Update this inputData "{key: 'value'}" pair data:
  email: "test@testemail.com",
  source: "website.com"
};

// DO NOT MODIFY THIS CODE:
let inputs = [];
for (let i = 0; i < Object.keys(inputData).length; i++) {
  inputs[i] = Object.keys(inputData)
    /*eslint-disable*/
    [i].concat(": ")
    .concat("'", Object.values(inputData)[i], "',<br>");
}
let inputValues = inputs
  .toString()
  .replaceAll(",", "")
  .replaceAll("<br>", ",<br>");
let output = [];

// TODO: Edit your zapier code below:
//
/* ----------- Start of Zapier Code ----------- */
//
let inboundEmail = inputData.email;
let inboundSource = inputData.source;

output = [{ inboundEmail: inboundEmail, inboundSource: inboundSource }];
//
/* ----------- End of Zapier Code ----------- */
//
//
// DO NOT MODIFY ANYTHING BELOW THIS LINE:
let userOutput = {};
for (let i = 0; i < Object.keys(output).length; i++) {
  userOutput[i] = Object.keys(output)
    [i].concat(": ")
    .concat("'", Object.values(output)[i], "',<br>");
}
userOutput = output[0];
let outputValues = [];
for (let i = 0; i < Object.keys(userOutput).length; i++) {
  outputValues[i] = Object.keys(userOutput)
    [i].concat(": ")
    .concat("'", Object.values(userOutput)[i], "',<br>");
}
outputValues = outputValues
  .toString()
  .replaceAll(",", "")
  .replaceAll("<br>", ",<br>");
console.log("Your output is as follows:", userOutput);
document.getElementById("app").innerHTML = `
<h1>Zapier Code Assistance</h1>
<b>Example:</b><br>
<img src="images/zapexample.png" style="width: 80%"><br>
<strong>Would be written as:</strong> <br><br>
<div class="code half"><br>
<div class="ind0">
let <b class="var">inputData</b> = {<br>
  <div class="ind4">
  <b class="obj">email</b>: "bob@example.com",<br>
  <b class="obj">source</b>: "everypage"<br></div>
};
</div><br></div><br>
<div><hr>
<h3>Your inputData:</h3>
${inputValues}
<br></div>
<h3>Your output:</h3>
<div>
${outputValues}
</div>
`;
