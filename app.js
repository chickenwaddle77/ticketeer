if (localStorage.getItem('password-handler') == null) {
    var users = [];
    localStorage.setItem('password-handler', JSON.stringify(users));
}
else { 
    const myPasswords = localStorage.getItem('password-handler');
    var users = JSON.parse(myPasswords)
    console.log(users);
}


function verifyUser(users, inputUser, inputPass) {

    for (let i = 0;  i < users.length; i++) {
        if (users[i].username == inputUser && users[i].password == inputPass){
            return true;
        };
    }

    return false;
}

console.log(window.location.pathname);

const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (window.location.pathname == "/") {
        const inputUser = document.getElementById('username').value;
        const inputPass = document.getElementById('password').value;
        const displayBlock = document.querySelector('.incorrect-signin');

        if (!verifyUser(users, inputUser, inputPass)){
            console.log('incorrect!');
            displayBlock.style.display = 'block'
            document.querySelector('.form-class').reset() 
        } else {
            console.log('success');
        }
    } else { 
        const newUsername = document.getElementById('newusername').value;
        const newPass = document.getElementById('newpassword').value;
        const confirmPass = document.getElementById('confirmpassword').value;

        if (newPass == confirmPass && newUsername.length > 5 && newPass.length > 5){
            newUser = {
                username : newUsername,
                password : newPass
            }

            if (!verifyUser(users, newUser.username, newUser.password)) {
                users.push(newUser);
                console.log(users); 
                console.log('newuseradded');
                localStorage.setItem('password-handler', JSON.stringify(users));
                location.pathname = '/'     //back to login page
            }
            else {
                console.log('sorry user already taken');
            }

        }
        else { 
            console.log('raiseerror');
        }
    }

})


if (window.location.pathname == "/") {
    const enterText = document.querySelectorAll('.login-form-field')

    for (let i = 0; i < enterText.length; i++) {
        enterText[i].addEventListener('keydown', (e) => {
        const displayBlock = document.querySelector('.incorrect-signin')
        console.log('textlistening');
        displayBlock.style.display = 'none'
        })
    }
}




/* const users = [
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

] */