"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const naruto_controller_1 = require("./naruto/naruto.controller");
const naruto_service_1 = require("./naruto/naruto.service");
let ControllersModule = class ControllersModule {
};
ControllersModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [
            naruto_controller_1.NarutoController
        ],
        providers: [
            naruto_service_1.NarutoService
        ],
    })
], ControllersModule);
exports.ControllersModule = ControllersModule;
//# sourceMappingURL=controllers.module.js.map