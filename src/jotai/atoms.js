import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils"

export const isOpenModalAtom = atom(false)

export const isLogin = atomWithStorage("isLogin", false)

export const currentPage = atom("/")

export const merchantInformation = atom([])

