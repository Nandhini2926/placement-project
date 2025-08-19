document.getElementById('submit').addEventListener('click',function(e)
{
    e.preventDefault();
const user = document.getElementById('Username').value 
const pass=document.getElementById('Password').value 
const message=document.getElementById('result')
if(user==='java_batch' && pass==='@123')
{
    message.textContent='login successful✅'
    message.className='success'
}
else
{
message.textContent='invalid ❌'
message.className='failed'
}
});