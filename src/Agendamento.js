function Agendamento(){
    var clazz = {
        
        para : function(consulta){
            var vinteDiasEmMillisegundos = 1000 * 60 * 60 * 24 * 20;
            var umDiaEmMillisegundos = 1000 * 60 * 60 * 24;

            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);
            while(novaData.getDay()== 0 || novaData.getDay()== 6) novaData = new Date(novaData.getTime() + umDiaEmMillisegundos);

            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;
        }
    };
    return clazz;
}