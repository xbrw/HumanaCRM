import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ComunicaOController } from "../comunicaO.controller";
import { ComunicaOService } from "../comunicaO.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dataDeEnvio: new Date(),
  destinatRio: "exampleDestinatRio",
  id: "exampleId",
  mensagem: "exampleMensagem",
  tipo: "exampleTipo",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dataDeEnvio: new Date(),
  destinatRio: "exampleDestinatRio",
  id: "exampleId",
  mensagem: "exampleMensagem",
  tipo: "exampleTipo",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dataDeEnvio: new Date(),
    destinatRio: "exampleDestinatRio",
    id: "exampleId",
    mensagem: "exampleMensagem",
    tipo: "exampleTipo",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dataDeEnvio: new Date(),
  destinatRio: "exampleDestinatRio",
  id: "exampleId",
  mensagem: "exampleMensagem",
  tipo: "exampleTipo",
  updatedAt: new Date(),
};

const service = {
  createComunicaO() {
    return CREATE_RESULT;
  },
  comunicaOS: () => FIND_MANY_RESULT,
  comunicaO: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ComunicaO", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ComunicaOService,
          useValue: service,
        },
      ],
      controllers: [ComunicaOController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /comunicaOs", async () => {
    await request(app.getHttpServer())
      .post("/comunicaOs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataDeEnvio: CREATE_RESULT.dataDeEnvio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /comunicaOs", async () => {
    await request(app.getHttpServer())
      .get("/comunicaOs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataDeEnvio: FIND_MANY_RESULT[0].dataDeEnvio.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /comunicaOs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comunicaOs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /comunicaOs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comunicaOs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataDeEnvio: FIND_ONE_RESULT.dataDeEnvio.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /comunicaOs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/comunicaOs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataDeEnvio: CREATE_RESULT.dataDeEnvio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/comunicaOs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
