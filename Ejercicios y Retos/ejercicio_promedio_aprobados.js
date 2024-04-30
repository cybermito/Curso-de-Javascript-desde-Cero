/*
Promedio de calificaciones aprobatorias

Cree un programa que tome una serie de calificaciones como entrada y calcule el promedio solo para las calificaciones aprobatorias (mayor o igual a 70).
*/

const calificaciones = [85, 92, 60, 78, 95, 66, 88, 50, 94, 100, 34, 28, 93];

const aprobados = calificaciones.filter(nota => nota >= 70);

const promedioAprobados = aprobados.reduce((sum, nota) => sum + nota, 0) / aprobados.length;

console.log('Notas originales: ',  calificaciones);
console.log('Aprobados: ', aprobados);
console.log('Promedio: ', promedioAprobados);