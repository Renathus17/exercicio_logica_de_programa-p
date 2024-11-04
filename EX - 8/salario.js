var salario_hr = parseFloat(prompt("Digite o valor do seu salário por hora: "));
var horas_trab = parseInt(prompt("Digite quantas horas você trabalha por mês: "));

var salario_mes = parseFloat(salario_hr*horas_trab);

console.log("O seu salário mensal é de : R$ ",salario_mes);
alert("O seu salário mensal é de :  R$ "+salario_mes);
