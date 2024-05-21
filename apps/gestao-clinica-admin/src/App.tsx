import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EquipamentosList } from "./equipamentos/EquipamentosList";
import { EquipamentosCreate } from "./equipamentos/EquipamentosCreate";
import { EquipamentosEdit } from "./equipamentos/EquipamentosEdit";
import { EquipamentosShow } from "./equipamentos/EquipamentosShow";
import { ReceitasList } from "./receitas/ReceitasList";
import { ReceitasCreate } from "./receitas/ReceitasCreate";
import { ReceitasEdit } from "./receitas/ReceitasEdit";
import { ReceitasShow } from "./receitas/ReceitasShow";
import { DespesasList } from "./despesas/DespesasList";
import { DespesasCreate } from "./despesas/DespesasCreate";
import { DespesasEdit } from "./despesas/DespesasEdit";
import { DespesasShow } from "./despesas/DespesasShow";
import { PacientesList } from "./pacientes/PacientesList";
import { PacientesCreate } from "./pacientes/PacientesCreate";
import { PacientesEdit } from "./pacientes/PacientesEdit";
import { PacientesShow } from "./pacientes/PacientesShow";
import { MateriaisList } from "./materiais/MateriaisList";
import { MateriaisCreate } from "./materiais/MateriaisCreate";
import { MateriaisEdit } from "./materiais/MateriaisEdit";
import { MateriaisShow } from "./materiais/MateriaisShow";
import { ComunicaOList } from "./comunicaO/ComunicaOList";
import { ComunicaOCreate } from "./comunicaO/ComunicaOCreate";
import { ComunicaOEdit } from "./comunicaO/ComunicaOEdit";
import { ComunicaOShow } from "./comunicaO/ComunicaOShow";
import { ConsultasList } from "./consultas/ConsultasList";
import { ConsultasCreate } from "./consultas/ConsultasCreate";
import { ConsultasEdit } from "./consultas/ConsultasEdit";
import { ConsultasShow } from "./consultas/ConsultasShow";
import { CampanhasDeMarketingList } from "./campanhasDeMarketing/CampanhasDeMarketingList";
import { CampanhasDeMarketingCreate } from "./campanhasDeMarketing/CampanhasDeMarketingCreate";
import { CampanhasDeMarketingEdit } from "./campanhasDeMarketing/CampanhasDeMarketingEdit";
import { CampanhasDeMarketingShow } from "./campanhasDeMarketing/CampanhasDeMarketingShow";
import { TratamentosList } from "./tratamentos/TratamentosList";
import { TratamentosCreate } from "./tratamentos/TratamentosCreate";
import { TratamentosEdit } from "./tratamentos/TratamentosEdit";
import { TratamentosShow } from "./tratamentos/TratamentosShow";
import { LeadsList } from "./leads/LeadsList";
import { LeadsCreate } from "./leads/LeadsCreate";
import { LeadsEdit } from "./leads/LeadsEdit";
import { LeadsShow } from "./leads/LeadsShow";
import { AgendamentoList } from "./agendamento/AgendamentoList";
import { AgendamentoCreate } from "./agendamento/AgendamentoCreate";
import { AgendamentoEdit } from "./agendamento/AgendamentoEdit";
import { AgendamentoShow } from "./agendamento/AgendamentoShow";
import { SalasList } from "./salas/SalasList";
import { SalasCreate } from "./salas/SalasCreate";
import { SalasEdit } from "./salas/SalasEdit";
import { SalasShow } from "./salas/SalasShow";
import { AnotaEsList } from "./anotaEs/AnotaEsList";
import { AnotaEsCreate } from "./anotaEs/AnotaEsCreate";
import { AnotaEsEdit } from "./anotaEs/AnotaEsEdit";
import { AnotaEsShow } from "./anotaEs/AnotaEsShow";
import { ProntuRiosEletrNicosList } from "./prontuRiosEletrNicos/ProntuRiosEletrNicosList";
import { ProntuRiosEletrNicosCreate } from "./prontuRiosEletrNicos/ProntuRiosEletrNicosCreate";
import { ProntuRiosEletrNicosEdit } from "./prontuRiosEletrNicos/ProntuRiosEletrNicosEdit";
import { ProntuRiosEletrNicosShow } from "./prontuRiosEletrNicos/ProntuRiosEletrNicosShow";
import { PacienteList } from "./paciente/PacienteList";
import { PacienteCreate } from "./paciente/PacienteCreate";
import { PacienteEdit } from "./paciente/PacienteEdit";
import { PacienteShow } from "./paciente/PacienteShow";
import { ConsultaList } from "./consulta/ConsultaList";
import { ConsultaCreate } from "./consulta/ConsultaCreate";
import { ConsultaEdit } from "./consulta/ConsultaEdit";
import { ConsultaShow } from "./consulta/ConsultaShow";
import { ProntuRioList } from "./prontuRio/ProntuRioList";
import { ProntuRioCreate } from "./prontuRio/ProntuRioCreate";
import { ProntuRioEdit } from "./prontuRio/ProntuRioEdit";
import { ProntuRioShow } from "./prontuRio/ProntuRioShow";
import { MDicoList } from "./mDico/MDicoList";
import { MDicoCreate } from "./mDico/MDicoCreate";
import { MDicoEdit } from "./mDico/MDicoEdit";
import { MDicoShow } from "./mDico/MDicoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Gestão Clínica"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Equipamentos"
          list={EquipamentosList}
          edit={EquipamentosEdit}
          create={EquipamentosCreate}
          show={EquipamentosShow}
        />
        <Resource
          name="Receitas"
          list={ReceitasList}
          edit={ReceitasEdit}
          create={ReceitasCreate}
          show={ReceitasShow}
        />
        <Resource
          name="Despesas"
          list={DespesasList}
          edit={DespesasEdit}
          create={DespesasCreate}
          show={DespesasShow}
        />
        <Resource
          name="Pacientes"
          list={PacientesList}
          edit={PacientesEdit}
          create={PacientesCreate}
          show={PacientesShow}
        />
        <Resource
          name="Materiais"
          list={MateriaisList}
          edit={MateriaisEdit}
          create={MateriaisCreate}
          show={MateriaisShow}
        />
        <Resource
          name="ComunicaO"
          list={ComunicaOList}
          edit={ComunicaOEdit}
          create={ComunicaOCreate}
          show={ComunicaOShow}
        />
        <Resource
          name="Consultas"
          list={ConsultasList}
          edit={ConsultasEdit}
          create={ConsultasCreate}
          show={ConsultasShow}
        />
        <Resource
          name="CampanhasDeMarketing"
          list={CampanhasDeMarketingList}
          edit={CampanhasDeMarketingEdit}
          create={CampanhasDeMarketingCreate}
          show={CampanhasDeMarketingShow}
        />
        <Resource
          name="Tratamentos"
          list={TratamentosList}
          edit={TratamentosEdit}
          create={TratamentosCreate}
          show={TratamentosShow}
        />
        <Resource
          name="Leads"
          list={LeadsList}
          edit={LeadsEdit}
          create={LeadsCreate}
          show={LeadsShow}
        />
        <Resource
          name="Agendamento"
          list={AgendamentoList}
          edit={AgendamentoEdit}
          create={AgendamentoCreate}
          show={AgendamentoShow}
        />
        <Resource
          name="Salas"
          list={SalasList}
          edit={SalasEdit}
          create={SalasCreate}
          show={SalasShow}
        />
        <Resource
          name="AnotaEs"
          list={AnotaEsList}
          edit={AnotaEsEdit}
          create={AnotaEsCreate}
          show={AnotaEsShow}
        />
        <Resource
          name="ProntuRiosEletrNicos"
          list={ProntuRiosEletrNicosList}
          edit={ProntuRiosEletrNicosEdit}
          create={ProntuRiosEletrNicosCreate}
          show={ProntuRiosEletrNicosShow}
        />
        <Resource
          name="Paciente"
          list={PacienteList}
          edit={PacienteEdit}
          create={PacienteCreate}
          show={PacienteShow}
        />
        <Resource
          name="Consulta"
          list={ConsultaList}
          edit={ConsultaEdit}
          create={ConsultaCreate}
          show={ConsultaShow}
        />
        <Resource
          name="ProntuRio"
          list={ProntuRioList}
          edit={ProntuRioEdit}
          create={ProntuRioCreate}
          show={ProntuRioShow}
        />
        <Resource
          name="MDico"
          list={MDicoList}
          edit={MDicoEdit}
          create={MDicoCreate}
          show={MDicoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
