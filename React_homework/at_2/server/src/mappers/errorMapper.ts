import {AxiosError} from 'axios';
import ErrorMessages from '../constants/errorMessages';
import {IError, IErrorData} from '../types/error';

class ErrorMapper {
  static mapBodyRes(message: ErrorMessages): IErrorData {
    return {
      error: message,
    };
  }

  static mapAxiosError(error: AxiosError): IError {
    if (error.code !== undefined) {
      return {
        status: 500,
        data:
          error.code === 'ECONNABORTED'
            ? ErrorMapper.mapBodyRes(ErrorMessages.THIRD_PARTY_TIMEOUT_ERROR)
            : ErrorMapper.mapBodyRes(ErrorMessages.INTERNAL_SERVER_ERROR),
      };
    }

    return {
      status: error.response?.status || 500,
      data: error.response?.data || ErrorMapper.mapBodyRes(ErrorMessages.INTERNAL_SERVER_ERROR),
    };
  }
}

export default ErrorMapper;
