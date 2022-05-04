"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.details = exports.list = exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEYS = ['2b1d99462emsh9c635f07393b079p114434jsna98d58434cdc'];
let k = 0;
const search = (location) => __awaiter(void 0, void 0, void 0, function* () {
    // call hotels4 locations/v2/search endpoint
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        headers: {
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEYS[k],
        },
        params: {
            locale: 'en_US',
            currency: 'USD',
            query: location
        }
    };
    let resp = yield axios_1.default.request(options);
    if (resp.status == 429) {
        k++;
        resp = yield axios_1.default.request(options);
    }
    return resp;
});
exports.search = search;
const dateStrings = () => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;
    date.setDate(date.getDate() + 1);
    dd = String(date.getDate()).padStart(2, '0');
    mm = String(date.getMonth() + 1).padStart(2, '0');
    yyyy = date.getFullYear();
    const tommorow = yyyy + '-' + mm + '-' + dd;
    return {
        today,
        tommorow
    };
};
const list = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const dates = dateStrings();
    const defaults = {
        locale: 'en_US',
        currency: 'USD',
        checkIn: dates.today,
        checkOut: dates.tommorow,
        pageNumber: '1',
        pageSize: '25',
        adults1: '1',
    };
    // call hotels4 properties/list endpoint
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: Object.assign(Object.assign({}, defaults), params),
        headers: {
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEYS[k]
        }
    };
    let resp = yield axios_1.default.request(options);
    if (resp.status == 429) {
        k++;
        resp = yield axios_1.default.request(options);
    }
    return resp;
});
exports.list = list;
const details = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // call hotels4 properties/get-details endpoint
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/get-details',
        params: {
            id
        },
        headers: {
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEYS[k]
        }
    };
    let resp = yield axios_1.default.request(options);
    if (resp.status == 429) {
        k++;
        resp = yield axios_1.default.request(options);
    }
    return resp;
});
exports.details = details;
//# sourceMappingURL=hotelServices.js.map