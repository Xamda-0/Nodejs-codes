let express=require("express")
let app=express()
app.get("/example3",(req,res)=>{
    // res.send(`<h1>welcome to express js example 3</h1>`)
    // res.end(`<table style=" border-collapse: collapse; width: 40%;"><thead style="background-color:black; color: white;">
    // <tr>
    //     <th>No</th><th>Name</th><th>Tell</th>
    // </tr></thead><tbody>
    // <tr style="border: 1px solid blue; color: black;"><td>1</td><td>Xamdi Cumar</td><td>+252612345678</td></tr>
    // <tr style="border: 1px solid blue; color: black;"><td>2</td><td>Cali Xassan</td><td>+252613454328</td></tr>
    // <tr style="border: 1px solid blue; color: black;"><td>3</td><td>Yasmiin Maxamed</td><td>+252619876543</td></tr>
    // </tbody></table>`)
    res.send(`<table><thead>
        <tr><th>No</th><th>Name</th><th>Tell</th>
        </tr></thead><tbody><tr>
        <td>1</td><td>Xamdi Cumar</td><td>+252612345678</td></tr>
        <tr><td>2</td><td>Cali Xassan</td><td>+252613454328</td></tr>
        <tr><td>3</td><td>Yasmiin Maxamed</td><td>+252619876543</td>
        </tr></tbody></table>`)
}).listen(3000);