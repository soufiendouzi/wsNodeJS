var generator = require ("generratoe password")
 var password = generator.generate (
    {
        length : 10 ,
        Number: true
 }
 );
 console.log(password);
