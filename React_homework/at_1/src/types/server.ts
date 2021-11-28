export const enum FetchErrorType {
  PARAMS_NOT_VALID = `PARAMS_NOT_VALID`,
  BODY_NOT_VALID = `BODY_NOT_VALID`,
  RESOURCE_NOT_FOUND = `RESOURCE_NOT_FOUND`,
  SERVER_ERROR = `SERVER_ERROR`,
}

export const enum FetchErrorCode {
  OK = 200,
  BAD_REQUEST = 400,
  TIMEOUT = 408,
}
