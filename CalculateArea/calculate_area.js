let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length*width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

function calculateTotal() {
    const g1 = parseFloat(document.getElementById('grocery1').value);
    const g2 = parseFloat(document.getElementById('grocery2').value);
    const g3 = parseFloat(document.getElementById('grocery3').value);

    document.getElementById('result').innerText = `The total of groceries is: $ ${Math.round(g1+g2+g3)}`;
}