"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.listHotels = exports.getDetails = exports.searchHotels = void 0;
const http_status_1 = __importDefault(require("http-status"));
const db_1 = require("../db");
const hotelServices = __importStar(require("../services/hotelServices"));
const searchHotels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Called searchHotels method');
    const { location } = req.query;
    try {
        // call api and get data
        const searchResp = yield hotelServices.search(location);
        const destinationId = searchResp.data.suggestions[0].entities[0].destinationId;
        delete req.query.location;
        const resp = yield hotelServices.list(Object.assign(Object.assign({}, req.query), { destinationId }));
        res.status(http_status_1.default.OK).json(resp.data.data.body.searchResults.results);
    }
    catch (err) {
        console.log('search error');
        next(err);
    }
});
exports.searchHotels = searchHotels;
const getDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Called getDetails method');
    const { hotelId } = req.params;
    try {
        // call api and get data
        const resp = yield hotelServices.details(hotelId);
        res.status(http_status_1.default.OK).json(resp.data);
    }
    catch (err) {
        console.log('search error');
        next(err);
    }
});
exports.getDetails = getDetails;
const listHotels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Called listHotels method');
    const { name, ammens } = req.body;
    const why = req.body;
    try {
        // call api and get data
        // const resp = await hotelServices.list(req.query)
        // res.status(httpStatus.OK).json(resp.data.body.searchResults.results);
        console.log(why);
        yield db_1.db.collection('Hotels').doc(name).set(why, { merge: true });
        res.status(http_status_1.default.OK).json({ 'uh': 'huh' });
    }
    catch (err) {
        console.log('search error');
        next(err);
    }
});
exports.listHotels = listHotels;
//# sourceMappingURL=hotelController.js.map