const express = require('express');
const app = express();

const shelterRoutes = require('./routes/shelter');
const dogRoutes = require('./routes/dog');
// console.log(shelterRoutes);

app.use('/shelter', shelterRoutes);
app.use('/dog', dogRoutes);

app.listen(9999, () => {
    console.log('Listening from port 9999!!!!')
})