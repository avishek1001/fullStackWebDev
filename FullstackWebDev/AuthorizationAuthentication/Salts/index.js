const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPass) => {
    const result = await bcrypt.compare(pw, hashedPass);

    if(result) {
        console.log('Successfully logged in');
    } else {
        console.log('Wrong Password');
    }
}

//hashPassword('password');

login('password', '$2b$12$8HHBo9mLkvSblAoosavB3.bk14u8AaAgKkEvlT1yomdrLpofOQV8G');