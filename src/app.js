import http from 'http';
import fs from 'fs';
import qs from 'qs';
import {StudentService} from "./service/StudentService.js";

let studentService = new StudentService();
const se = http.createServer((req, res) => {
    let data = '';
    req.on('data', dataRaw => {
        data += dataRaw;
    })
    req.on('end', () => {
        if (req.method === 'GET') {
            showList(req, res);
        } else {
            data = qs.parse(data);
            studentService.add(data);
            showList(req, res);
        }
    })
})
function showList(req, res) {
    fs.readFile('views/listStudent.html', 'utf-8', (err, stringHTML) => {
        let str = '';
        for (const item of studentService.findAll()) {
            str += `<h2>${item.id}. ${item.name}</h2>`;
        }
        stringHTML = stringHTML.replace('{list}', str)
        res.write(stringHTML);
        res.end();
    })
}
se.listen('8080', () => {
    console.log('Đã kết nối thanh công!')
})
