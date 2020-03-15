"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const naruto_service_1 = require("./naruto.service");
let NarutoController = class NarutoController {
    constructor(narutoService) {
        this.narutoService = narutoService;
    }
    async getCharacter(name, response) {
        try {
            const character = await this.narutoService.getCharacter(name);
            return response.status(common_1.HttpStatus.OK).json(character);
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({ error: "Not Found" });
        }
    }
};
__decorate([
    common_1.Get(':name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NarutoController.prototype, "getCharacter", null);
NarutoController = __decorate([
    common_1.Controller('naruto'),
    __metadata("design:paramtypes", [naruto_service_1.NarutoService])
], NarutoController);
exports.NarutoController = NarutoController;
//# sourceMappingURL=naruto.controller.js.map