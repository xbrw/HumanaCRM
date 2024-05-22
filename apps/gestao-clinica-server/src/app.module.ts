import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { RedisModule } from "./redis/redis.module";
import { EquipamentosModule } from "./equipamentos/equipamentos.module";
import { ReceitasModule } from "./receitas/receitas.module";
import { DespesasModule } from "./despesas/despesas.module";
import { PacientesModule } from "./pacientes/pacientes.module";
import { MateriaisModule } from "./materiais/materiais.module";
import { ComunicaOModule } from "./comunicaO/comunicaO.module";
import { ConsultasModule } from "./consultas/consultas.module";
import { CampanhasDeMarketingModule } from "./campanhasDeMarketing/campanhasDeMarketing.module";
import { TratamentosModule } from "./tratamentos/tratamentos.module";
import { LeadsModule } from "./leads/leads.module";
import { AgendamentoModule } from "./agendamento/agendamento.module";
import { SalasModule } from "./salas/salas.module";
import { AnotaEsModule } from "./anotaEs/anotaEs.module";
import { ProntuRiosEletrNicosModule } from "./prontuRiosEletrNicos/prontuRiosEletrNicos.module";
import { PacienteModule } from "./paciente/paciente.module";
import { ConsultaModule } from "./consulta/consulta.module";
import { ProntuRioModule } from "./prontuRio/prontuRio.module";
import { MDicoModule } from "./mDico/mDico.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./redis/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    EquipamentosModule,
    ReceitasModule,
    DespesasModule,
    PacientesModule,
    MateriaisModule,
    ComunicaOModule,
    ConsultasModule,
    CampanhasDeMarketingModule,
    TratamentosModule,
    LeadsModule,
    AgendamentoModule,
    SalasModule,
    AnotaEsModule,
    ProntuRiosEletrNicosModule,
    PacienteModule,
    ConsultaModule,
    ProntuRioModule,
    MDicoModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    OpenTelemetryModule.forRoot({
      serviceName: "Gestão Clínica",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
