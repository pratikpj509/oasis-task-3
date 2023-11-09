const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    const celToFah = (cel) => {
      let fahrenhiet = Math.round((cel * 9/5) + 32);
      return fahrenhiet;
    }
    const fehToCel = (fehr) => {
      let celsius = Math.round((fehr - 32) * 5/9);
      return celsius;
    }
    const kelTofeh = (kel) => {
        let kelvin = Math.round((kel - 273.15) * 1.8 + 32);
        return kelvin;
      }
    let result;
 
    if(valueTemp == 'kel')
    {
      result = kelTofeh(numberTemp);
      document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;

    }
    else if (valueTemp == 'cel')
    {
      result = celToFah(numberTemp);
      document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;

    }
    else
    {
       result = fehToCel(numberTemp);
       document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
 
    }
  
    }