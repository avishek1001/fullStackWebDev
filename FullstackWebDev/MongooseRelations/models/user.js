const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            _id: {_id: false},
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })

    const res = await u.save();
    console.log(res);
}

// makeUser();

const editUser = async (id) => {
    const u = await User.findById(id);
    u.address.push({
        street: 'Hogwarts',
        city: 'London',
        state: 'LON',
        country: 'England'
    })
    const res = await u.save()
    console.log(res);
}

editUser('67aa0cc84fece4944705fc89');