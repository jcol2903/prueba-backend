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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateProductoDto {
    nombre;
    precio;
    stock;
}
exports.UpdateProductoDto = UpdateProductoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'string',
        description: 'Nombre del producto (opcional)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto' }),
    __metadata("design:type", String)
], UpdateProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 999.99,
        description: 'Precio del producto en USD (opcional)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un n�mero decimal' }),
    (0, class_validator_1.Min)(0, { message: 'El precio no puede ser negativo' }),
    __metadata("design:type", Number)
], UpdateProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 999,
        description: 'Cantidad disponible en inventario (opcional)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'El stock debe ser un n�mero entero' }),
    (0, class_validator_1.Min)(0, { message: 'El stock no puede ser negativo' }),
    __metadata("design:type", Number)
], UpdateProductoDto.prototype, "stock", void 0);
//# sourceMappingURL=update-producto.dto.js.map