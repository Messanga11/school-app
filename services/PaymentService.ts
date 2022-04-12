import { DeleteResponse, RequestRange, Payment, PaymentRequest, PaymentsResponse } from "@/store/types";
import BaseService from "./BaseService";
import { PaymentUrls } from "./urls";

export default class PaymentService {
    static getPayments = (range: (RequestRange | undefined)):Promise<Response> => BaseService.getRequest(PaymentUrls.GET_PAYMENTS(range), true)
    static getPayment = (uuid:string):Promise<Response> => BaseService.getRequest(PaymentUrls.GET_PAYMENT(uuid), true)
    static createPayment = (payload:PaymentRequest):Promise<Response> => BaseService.postRequest(PaymentUrls.CREATE_PAYMENT, payload, true)
    static deletePayment = (uuid:string):Promise<Response> => BaseService.deleteRequest(PaymentUrls.DELETE_PAYMENT(uuid), {}, true)
    static updatePayment = (payload: Payment):Promise<Response> => BaseService.putRequest(PaymentUrls.UPDATE_PAYMENT, payload, true)
}