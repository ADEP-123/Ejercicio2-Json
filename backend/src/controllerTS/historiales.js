var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class inventarios {
    constructor(id, cantidad, id_bodega_origen, id_bodega_destino, id_inventario, created_by, update_by, created_at, updated_at, deleted_at) {
        this.ID = id;
        this.CANTIDAD = cantidad;
        this.ID_BODEGA1 = id_bodega_origen;
        this.ID_BODEGA2 = id_bodega_destino;
        this.ID_INVENTARIO = id_inventario;
        this.CREADOR = created_by;
        this.ACTUALIZADOR = update_by;
        this.FECHA_CREACION = created_at;
        this.FECHA_ACTUALIZACION = updated_at;
        this.FECHA_ELIMINACION = deleted_at;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID", void 0);
__decorate([
    Expose({ name: "CANTIDAD" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CANTIDAD", void 0);
__decorate([
    Expose({ name: "ID_BODEGA1" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_BODEGA1", void 0);
__decorate([
    Expose({ name: "ID_BODEGA2" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_BODEGA2", void 0);
__decorate([
    Expose({ name: "ID_INVENTARIO" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_INVENTARIO", void 0);
__decorate([
    Expose({ name: "CREADOR" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CREADOR", void 0);
__decorate([
    Expose({ name: "ACTUALIZADOR" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ACTUALIZADOR", void 0);
__decorate([
    Expose({ name: "FECHA_CREACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], inventarios.prototype, "FECHA_CREACION", void 0);
__decorate([
    Expose({ name: "FECHA_ACTUALIZACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], inventarios.prototype, "FECHA_ACTUALIZACION", void 0);
__decorate([
    Expose({ name: "FECHA_ELIMINACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], inventarios.prototype, "FECHA_ELIMINACION", void 0);
