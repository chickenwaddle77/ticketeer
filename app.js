const users = [
    {
        username : 'Bret',
        password : 'hildegard'
    },
    {
        username : 'Antonette',
        password : 'anastasia'
    },
    {
        username : 'Samantha',
        password : 'McKenziehaven'
    },
    {
        username : 'Karianne',
        password : 'Julianne.OConner'
    },
    {
        username : 'Kamren',
        password : 'Roscoeview6'
    },

]


const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('okworking');
    const userName = document.getElementById('username')
    const password = document.getElementById('password')
    
    //if (users.includes(userName) && users.includes(password)) {

    //}
})

