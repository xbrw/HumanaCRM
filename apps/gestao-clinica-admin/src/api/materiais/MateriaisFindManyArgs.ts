import { MateriaisWhereInput } from "./MateriaisWhereInput";
import { MateriaisOrderByInput } from "./MateriaisOrderByInput";

export type MateriaisFindManyArgs = {
  where?: MateriaisWhereInput;
  orderBy?: Array<MateriaisOrderByInput>;
  skip?: number;
  take?: number;
};
