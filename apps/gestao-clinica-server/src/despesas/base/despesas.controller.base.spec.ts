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
import { DespesasController } from "../despesas.controller";
import { DespesasService } from "../despesas.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  data: new Date(),
  id: "exampleId",
  nome: "exampleNome",
  updatedAt: new Date(),
  valor: 42.42,
};
const CREATE_RESULT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  data: new Date(),
  id: "exampleId",
  nome: "exampleNome",
  updatedAt: new Date(),
  valor: 42.42,
};
const FIND_MANY_RESULT = [
  {
    categoria: "exampleCategoria",
    createdAt: new Date(),
    data: new Date(),
    id: "exampleId",
    nome: "exampleNome",
    updatedAt: new Date(),
    valor: 42.42,
  },
];
const FIND_ONE_RESULT = {
  categoria: "exampleCategoria",
  createdAt: new Date(),
  data: new Date(),
  id: "exampleId",
  nome: "exampleNome",
  updatedAt: new Date(),
  valor: 42.42,
};

const service = {
  createDespesas() {
    return CREATE_RESULT;
  },
  despesasItems: () => FIND_MANY_RESULT,
  despesas: ({ where }: { where: { id: string } }) => {
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

describe("Despesas", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DespesasService,
          useValue: service,
        },
      ],
      controllers: [DespesasController],
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

  test("POST /despesas", async () => {
    await request(app.getHttpServer())
      .post("/despesas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        data: CREATE_RESULT.data.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /despesas", async () => {
    await request(app.getHttpServer())
      .get("/despesas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          data: FIND_MANY_RESULT[0].data.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /despesas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/despesas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /despesas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/despesas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        data: FIND_ONE_RESULT.data.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /despesas existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/despesas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        data: CREATE_RESULT.data.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/despesas")
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
