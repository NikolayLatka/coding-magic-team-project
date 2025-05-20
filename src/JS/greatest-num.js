document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const maxValueSpan = document.getElementById('maxValue');
   
    function findMaxNumber() {
       
        const num1 = parseFloat(input1.value) || 0;
        const num2 = parseFloat(input2.value) || 0;
        const num3 = parseFloat(input3.value) || 0;
        
       
        const maxNumber = Math.max(num1, num2, num3);
        
       
        maxValueSpan.textContent = maxNumber;
    }
    
    
    input1.addEventListener('input', findMaxNumber);
    input2.addEventListener('input', findMaxNumber);
    input3.addEventListener('input', findMaxNumber);
    
   
    findMaxNumber();
});