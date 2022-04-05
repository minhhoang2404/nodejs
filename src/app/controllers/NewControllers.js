

    async function index(req,res)  {
        res.send("123");
    }
   
    async function show(req,res)  {
        res.send("abc");
    }
module.exports = {show,index};
