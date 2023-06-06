let prompt = require('prompt-sync')();

function apresentacaoMenu(){
console.log(`Especificação - Código - Preço `);
console.log(`Cachorro-Quente - 100 - 1.20 `);
console.log(`Bauru Simples - 101 - 1.30 `);
console.log(`Bauru com ovo - 102 - 1.50 `);
console.log(`Hambúrguer - 103 - 1.20 `);
console.log(`Cheesburguer - 104 - 1.30 `);
console.log(`Refrigerante - 105 - 1.00 `);
}

let valor,valor0,valor1,valor2,valor3,valor4,valor5 = 0;
let valorTotal = 0;
let valorTotal0 = 0;
let valorTotal1 = 0;
let valorTotal2 = 0;
let valorTotal3 = 0;
let valorTotal4 = 0;
let valorTotal5 = 0;
let teste = 0;
function codigoQuantidade(){
    do{
    codigo = parseInt(prompt(`Digite um código: `));
    quantidade = parseInt(prompt(`Digite quantas unidades são deste produto: `));
    
    if(codigo==100 && quantidade>teste){
        valor0=1.20*quantidade;
        console.log(`Cachorro-Quente - quantidade ${quantidade} - valor ${valor0}`);     
        valorTotal0+=valor0;
    }
    else if(codigo==101 && quantidade>teste){
        valor1=1.30*quantidade;
        console.log(`Bauru Simples - quantidade ${quantidade} - valor ${valor1}`);   
        valorTotal1+=valor1;
    }
    else if(codigo==102 && quantidade>teste){
        valor2=1.50*quantidade;
        console.log(`Bauru com ovo - quantidade ${quantidade} - valor ${valor2}`);
        valorTotal2+=valor2;
    }
    else if(codigo==103 && quantidade>teste){
        valor3=1.20*quantidade;
        console.log(`Hambúrguer - quantidade ${quantidade} - valor ${valor3}`);
        valorTotal3+=valor3;
    }
    else if(codigo==104 && quantidade>teste){
        valor4=1.30*quantidade;
        console.log(`Cheesburguer - quantidade ${quantidade} - valor ${valor4}`);
        valorTotal4+=valor4;
    }
    else if(codigo==105 && quantidade>teste){
        valor5=1.00*quantidade;
        console.log(`Refrigerante - quantidade ${quantidade} - valor ${valor5}`);
        valorTotal5+=valor5;
    }
    else if(codigo==999){
        valorTotal+=valorTotal0+valorTotal1+valorTotal2+valorTotal3+valorTotal4+valorTotal5;
        console.log(`Valor total: ${valorTotal}`); 
         
    }else{
        console.log(`Número inválido`);
    } 
    
     

}while(codigo!=999)




}   

module.exports={
    apresentacaoMenu, codigoQuantidade
   }
   