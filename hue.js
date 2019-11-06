let data= [{
	"criterio": "Criterios",
	"id": 0,
	"isDelete": false,
	"mejor": "mejor",
	"ponderacion": "Ponderación %",
	"tipo": "Tipo",
},{
	"criterio": "Druracion (en meses)4",
	"id": 1,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 15,
	"tipo": true,
},{
	"criterio": "Valor presente neto",
	"id": 2,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 25,
	"tipo": true,
},{
	"criterio": "Periodo de recuperacion de la inversión",
	"id": 3,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 20,
	"tipo": true,
},{
	"criterio": "Riesgo",
	"id": 4,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 20,
	"tipo": false,
},{
	"criterio": "Generación de tecnología propietaria",
	"id": 5,
	"isDelete": false,
	"mejor": false,
	"ponderacion": 15,
	"tipo": false,
},{
	"criterio": "x",
	"id": 6,
	"isDelete": false,
	"mejor": true,
	"ponderacion": 5,
	"tipo": true,
},];
let proyectos = [{ 
	"costo": "costo",
	"descripcion": "descripcion",
	"id": 0,
	"identificador": "identificador",
},{
	"costo": 30000,
	"descripcion": "sdfsdf",
	"id": 1,
	"identificador": "ererre",
},
{
	"costo": 30000,
	"descripcion": "sdfsdfsdf",
	"id": 2,
	"identificador": "sdfsfs",
},
{ 
	"costo": 10000,
	"descripcion": "sdfsdfsdf",
	"id": 2,
	"identificador": "sdfsfs",
},{
	"costo": 60000,
	"descripcion": "sdfsdfsdf",
	"id": 2,
	"identificador": "sdfsfs",
},]; 
let criteriosProyectos = [ 
	[ "A",24, 43000, 6, 3, 3, 10,],
	[ "B", 11, -12000, 10, 4, 1, 70,],
	[ "C", 8, 5000, 8, 2, 2, 50,],
	[ "D", 5, 21000, 3, 1, 0, 100,],
];

let n = [];

for(let h = 0; h < criteriosProyectos[0].length;h++) n.push([]);

criteriosProyectos.map( (e,i) => e.map((a, j) => n[j].push(a)));

let m = [];

for(let h = 0; h < criteriosProyectos[0].length;h++) m.push([]);

n.map((s, u) => m[u] = (s.map((o, i) => {return {
	'idx': i,
	'obj': o
}}).sort((a, b) => a.obj - b.obj)));

data.map( (hue, index) => {
	m[index] = (!hue.mejor)? m[index] : m[index].reduceRight( (arr, last, i, coll) => (arr = arr.concat(last)), []);
	let n = hue.tipo? (m[index].length*2)+1:-1;
	m[index].map(y => y.obj = hue.tipo? n-=2: n+=2);
});


let qwer = data.map( (hue, j) => m[j].map( v => v.obj * (hue.ponderacion/100)));
qwer = qwer.filter(numero => !isNaN(numero[0]));
let total = 0;
qwer.map(v => total += v[0]);



console.log(total);





