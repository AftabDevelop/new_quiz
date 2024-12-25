const form = document.querySelector('form');
const original_answer = {
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
};
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;
    for(let [key,value] of data.entries()){
        if(value==original_answer[key]){
            result++;
        }
    }
    const result1 = document.getElementById('result');
    result1.innerHTML=`${result} out of 5 is correct`;
})

document.getElementById('out').addEventListener('click', () => {
    form.reset();
    // Clear the result display as well
    const result1 = document.getElementById('result');
    if(result1) {
        result1.innerHTML = '';
    }
});