import BookService from "@/services/BookService";
import { createBook, deleteBook, getBooks, updateBook } from "../actions";
import { Effect, EffectRange } from "../types";
import { basicEffectFunction } from "./shared";

export const getBooksEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, BookService.getBooks, dispatch, getBooks)

export const createBookEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, BookService.createBook, dispatch, createBook)

export const updateBookEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, BookService.updateBook, dispatch, updateBook)

export const deleteBookEffect = (effectRange:EffectRange):Effect => async (dispatch) => basicEffectFunction(effectRange, BookService.deleteBook, dispatch, deleteBook)