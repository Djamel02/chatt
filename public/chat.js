var socket = io.connect('http://localhost:4000');

//DOM qurying
let name = document.getElementById('person'),
    message = document.getElementById('message'),
    output = document.getElementById('output'),
    btn = document.getElementById('btn')
    typing = document.getElementById('typing');

//Socket working
//Emit event
btn.addEventListener('click',()=>{
    if(name.value !='' || message.value!=''){
        socket.emit('chat',{
            name:name.value,
            message:message.value
        })
        message.value='';
    }
    
})
//Typing script
message.addEventListener('keypress',()=>{
        socket.emit('typing',name.value)
})

//Listen for event
socket.on('chat',(data)=>{
    typing.innerHTML = '';
    output.innerHTML += '<p><strong>'+data.name+':</strong>'+data.message+'</p><hr>';
})

socket.on('typing',(data)=>{
    typing.innerHTML = '<p class="alert alert-warning"><strong>'+data+' </strong> is typing ....</p>'
})
