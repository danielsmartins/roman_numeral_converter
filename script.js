const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convert = num => {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    const result = []
    
    ref.forEach(([letter, value]) => {
        while (num >= value) {
            result.push(letter)
            num -= value
        }
    })
    return result.join('')
}

const isValid = (str, int) => {
    let errorText = '';
  
    if (!str || str.match(/[e.]/g)) {
      errorText = 'Please enter a valid number.';
    } else if (int < 1) {
      errorText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
      errorText = 'Please enter a number less than or equal to 3999.';
    } else {
      return true;
    }

    output.innerText = errorText;
  
    return false;
  };

  const clearOutput = () => {
    output.innerText = '';
  }

  convertButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateUI();
  });
  

  const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);
  

    output.classList.remove('hidden');

    clearOutput();
    if (isValid(numStr, int)) {
      output.innerText = convert(int);
    }
  };