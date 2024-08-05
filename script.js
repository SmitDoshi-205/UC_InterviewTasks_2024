const ans = document.getElementById('display');

        function appendToDisplay(input) {
            ans.value += input;
        }

        function clearDisplay() {
            ans.value = '';
        }

        function calculate() {
            try{
                ans.value = eval(ans.value);
            }
            catch(error){
                display.value = "Error";
            }
        }