// ******************** Imports ******************** //
import StudentService from "@/services/StudentService"
import AuthService from "@/services/AuthService"
import { Dispatch, SetStateAction } from "react"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AuthActions, AuthState } from "./Auth"
import { StudentActions, StudentState } from "./Student"
import { BookActions, BookState } from "./Book"
import { PaperActions, PaperState } from "./Paper"
import { PaymentActions, PaymentState } from "./Payment"
import { SubjectActions, SubjectState } from "./Subject"
import { TopicActions, TopicState } from "./Topic"
import { VideoActions, VideoState } from "./Video"
import BookService from "@/services/BookService"
import PaperService from "@/services/PaperService"
import PaymentService from "@/services/PaymentService"

// ******************** Exports ******************** //
export * from "./Student"
export * from "./Auth"
export * from "./Book"
export * from "./Paper"
export * from "./Payment"
export * from "./Subject"
export * from "./Topic"
export * from "./Video"

// ******************** Application Types  ******************** //
export type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>
export type ApplicationDispatch = ThunkDispatch<ApplicationState, any, ApplicationAction>
export type ApplicationAction = StudentActions | AuthActions | BookActions | PaperActions | PaymentActions | SubjectActions | TopicActions | VideoActions
export type ApplicationService = StudentService | AuthService | BookService | PaperService | PaymentService | AuthService
export interface ApplicationState {
    auth: AuthState
    student: StudentState,
    book: BookState,
    paper: PaperState,
    payment: PaymentState,
    subject: SubjectState,
    topic: TopicState,
    video: VideoState,
}

// ******************** Shared interfaces ******************** //
export interface RequestRange {
    page?: number;
    per_page?: number;
    keyword?: string;
    order_field?: string;
    subject_uuid?: string
    conversation_uuid?: string
}

export interface ResponseRange<T = any> {
    current_page?: number;
    per_page?: number;
    keyword?: string;
    total?: number;
    pages?: number;
    data?: T[]
}

export interface EffectRange {
    range?: RequestRange | string;
    payload?: any,
    setLoading: Dispatch<SetStateAction<boolean>>;
    successCb: Function;
    failCb: Function;
}

export interface DeleteResponse {
    message: string
}