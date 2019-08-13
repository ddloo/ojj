const test = require("./test");
const path = require("path");
const fs = require("fs");
const less = require("less");

// console.log(path.join('D:', 'a.txt'));
// console.log(path.resolve('temp', 'hello-1.json'));

// let br = "\n";
// for(let i = 1; i <= 2; i++){
    // fs.writeFile("D:/a.txt", i + "\n", {flag: "a"},  function(){
    //     console.log("写入成功");
    // });
    // let json = {
    //     "title" : "标题"+ i
    // }
    // json = JSON.stringify(json);
    // fs.writeFile(path.resolve('temp', 'hello-'+ i +'.json'), json, {flag: "as"}, function(){
    //     console.log("写入成功");
    // });
    // for(let i = 1; i <= 2; i++){
    //     fs.readFile(path.resolve('temp', 'hello-'+ i +'.json'), 'utf-8', (err, data) => {
    //         if (err) throw err;
    //         data = JSON.parse(data);
    //         fs.mkdir(path.resolve('temp', data.title), function(){
    //             console.log("创建目录成功");
    //         });
    //     });
    // }
    let lessContent = fs.readFileSync(path.resolve('styles', 'navigation.less'), "utf-8");
    let promise = less.render(lessContent);
    promise.then((output) => {
        fs.writeFile(path.resolve('styles', 'navigation.css'), output.css, {flag: "w"}, function(){
            console.log("less改css成功");
        });
    })
    
// }
// console.log(test.a);