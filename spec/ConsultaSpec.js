describe("Consulta", function(){

    var rodrigo;

    beforeEach(function(){ //executa antes de cada teste
        rodrigo = new PacienteBuilder().constroi();
    });

    it("nao deve cobrar nada se for retorno", function(){
        var consulta = new Consulta(rodrigo, [], true, true);

        expect(consulta.preco()).toEqual(0);
    });

    it("deve cobrar 25 por cada procedimento comum", function(){
        var consulta = new Consulta(rodrigo, ["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50);
    });

    it("deve cobrar preco especifico dependendo do procedimento", function(){
        var consulta = new Consulta(rodrigo, ["procedimento-comum", "raiox", "gesso"], false, false);

        expect(consulta.preco()).toEqual(25 + 55 + 32);
    });
});