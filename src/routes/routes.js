const parseString = require('xml2js').parseString;


module.exports = app =>{

    app.post('/login', (req, res)=>{
        app.src.controller.controllers.login(app, req, res)

    })

    app.post('/teste', (req,res)=>{  
        
        var xml = "<root>Hello xml2js!</root>"
        parseString(xml, function (err, result) {
            res.send(result);
        });

    })


}