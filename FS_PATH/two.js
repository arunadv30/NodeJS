import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


let cwdir=path.join(process.cwd())
let cwf=path.basename(__filename)

console.log(cwdir)
console.log(cwf)