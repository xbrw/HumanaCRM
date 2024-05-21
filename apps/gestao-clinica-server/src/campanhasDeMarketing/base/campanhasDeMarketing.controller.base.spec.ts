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
import { CampanhasDeMarketingController } from "../campanhasDeMarketing.controller";
import { CampanhasDeMarketingService } from "../campanhasDeMarketing.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fim: new Date(),
  id: "exampleId",
  inCio: new Date(),
  nome: "exampleNome",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fim: new Date(),
  id: "exampleId",
  inCio: new Date(),
  nome: "exampleNome",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fim: new Date(),
    id: "exampleId",
    inCio: new Date(),
    nome: "exampleNome",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fim: new Date(),
  id: "exampleId",
  inCio: new Date(),
  nome: "exampleNome",
  updatedAt: new Date(),
};

const service = {
  createCampanhasDeMarketing() {
    return CREATE_RESULT;
  },
  campanhasDeMarketings: () => FIND_MANY_RESULT,
  campanhasDeMarketing: ({ where }: { where: { id: string } }) => {
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

describe("CampanhasDeMarketing", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CampanhasDeMarketingService,
          useValue: service,
        },
      ],
      controllers: [CampanhasDeMarketingController],
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

  test("POST /campanhasDeMarketings", async () => {
    await request(app.getHttpServer())
      .post("/campanhasDeMarketings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fim: CREATE_RESULT.fim.toISOString(),
        inCio: CREATE_RESULT.inCio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /campanhasDeMarketings", async () => {
    await request(app.getHttpServer())
      .get("/campanhasDeMarketings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fim: FIND_MANY_RESULT[0].fim.toISOString(),
          inCio: FIND_MANY_RESULT[0].inCio.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /campanhasDeMarketings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campanhasDeMarketings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /campanhasDeMarketings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campanhasDeMarketings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fim: FIND_ONE_RESULT.fim.toISOString(),
        inCio: FIND_ONE_RESULT.inCio.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /campanhasDeMarketings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/campanhasDeMarketings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fim: CREATE_RESULT.fim.toISOString(),
        inCio: CREATE_RESULT.inCio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/campanhasDeMarketings")
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
