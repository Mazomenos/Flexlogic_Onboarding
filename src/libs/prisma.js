"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
exports.prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE !== "production")
    global.prisma = exports.prisma;
