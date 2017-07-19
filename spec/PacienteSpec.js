describe("Paciente", function(){
    it("deve calcular o imc", function(){
        var rodrigo = new Paciente("Rodrigo", 23, 90, 1.85);
        expect(rodrigo.imc()).toEqual(90/(1.85 * 1.85));
    });

    it("deve calcular os batimentos", function(){
        var rodrigo = new Paciente("Rodrigo", 23, 90, 1.85);
        expect(rodrigo.batimentos()).toEqual(967104000);
    });
});