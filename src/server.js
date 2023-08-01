//require("express-async-errors"); // ?
const express = require("express"); 
const CorrectionError = require('./utils/CorrectionError');
const routes = require("./routes");

const serve = express();
serve.use(express.json()); 
serve.use(routes);

const { Database } = require("sqlite");

serve.use((error, request, response,next)=>{

    if(error instanceof CorrectionError ){ // gerado pelo cliente
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "internal error",
        
    });
});

const PORT = 3000; 
serve.listen(PORT,() => console.log(`Server is running at ${PORT}`));