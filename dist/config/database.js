"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
const { DB_HOST, DB_USER, DB_NAME } = process.env;
if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error('Database environment variables are not properly configured');
}
exports.sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, '', {
    host: DB_HOST,
    dialect: 'mysql',
});
