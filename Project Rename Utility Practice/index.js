const fs = require('fs');
const path = require("path")
const readline = require('readline-sync')
const replaceThat = readline.question("what is the word you want to replace: ")
const replaceWith = readline.question("what is the word you want to replaceWith: ")
const preview = readline.question("Do You Want To Preview (ture or false)? ")
const folder = __dirname

try {
  const data = fs.readdir(folder,(err,data)=>{
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let oldfile = path.join(folder,item)
        let newfile = path.join(folder,item.replaceAll(replaceThat,replaceWith))
        if(preview == "false" || preview == "False"){
            fs.rename(oldfile, newfile,()=>{
                console.log("Rename Successfull",item,newfile)
            })
        }
        else(oldfile!==newfile)
            console.log(oldfile+ ' Will be renamed to '+ newfile )
      }
  })
} catch (err) {
  console.error(err);
}
