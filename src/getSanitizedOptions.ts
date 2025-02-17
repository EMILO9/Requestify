import { Options } from "./types/options";
import { RequestifyError } from "./requestifyError";
import * as ss from "superstruct";
import { Methods } from "./types/methods";
export default function (options: Options) {
  try {
    const schema = ss.object({
      routes: ss.defaulted(
        ss.array(
          ss.object({
            path: ss.string(),
            method: ss.defaulted(ss.enums(Object.values(Methods)), Methods.GET),
          })
        ),
        []
      ),
    });
    const result = ss.create(options, schema);
    return result;
  } catch (error) {
    const err = error as ss.StructError;
    throw new RequestifyError(err.message);
  }
}
