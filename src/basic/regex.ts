/**
 * Applicable to mainland China
 */

export const ID_CARD_REGEX: RegExp = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;

export const BANK_CARD_ID_REGEX: RegExp = /^([1-9]{1})(\d{14}|\d{18})$/;

export const EMAIL_REGEX: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const TEL_REGEX: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[01256789]))\d{8}$/;

export const URL_REGEX: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.\w{2,})+(?:[\w-._~:/?#[\]@!$&'()*+,;=])*$/;

export const WIN_REGEX: RegExp = /^Win/;

export const MOBILE_REGEX: RegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/;
