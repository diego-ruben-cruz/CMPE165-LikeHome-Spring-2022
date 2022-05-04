"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hotelRoutes_1 = __importDefault(require("./hotelRoutes"));
// import accountRoutes from './accountRoutes';
const reservationRoutes_1 = __importDefault(require("./reservationRoutes"));
const paymentRoutes_1 = __importDefault(require("./paymentRoutes"));
const accountRoutes_1 = __importDefault(require("./accountRoutes"));
const router = express_1.default.Router();
router.use('/hotel', hotelRoutes_1.default);
// router.use('/account', accountRoutes);
router.use('/reservation', reservationRoutes_1.default);
router.use('/payment', paymentRoutes_1.default);
router.use('/account', accountRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map