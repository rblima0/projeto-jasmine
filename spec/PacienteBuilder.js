
//TEST DATA BUILDER - dados de teste para cenario de teste.
function PacienteBuilder(){

    var nome = "Rodrigo";
    var idade = 23;
    var peso = 90;
    var altura = 1.86;

    var clazz = {
        constroi : function(){
            return Paciente(nome, idade, peso, altura);
        },
        comIdade : function(valor){
            idade = valor;
            return this;
        },
        comPeso : function(valor){
            peso = valor;
            return this;
        }
    };
    return clazz;
}