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
    constructor(id, id_bodega, id_producto, cantidad, created_by, update_by, created_at, updated_at, deleted_at) {
        this.ID = id;
        this.ID_BODEGA = id_bodega;
        this.ID_PRODUCTO = id_producto;
        this.CANTIDAD = cantidad;
        this.CREADOR = created_by;
        this.ACTUALIZADOR = update_by;
        this.FECHA_CREACION = created_at;
        this.FECHA_ACTUALIZACION = updated_at;
        this.FECHA_ELIMINACION = deleted_at;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID", void 0);
__decorate([
    Expose({ name: "ID_BODEGA" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro1` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_BODEGA", void 0);
__decorate([
    Expose({ name: "ID_PRODUCTO" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro2` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_PRODUCTO", void 0);
__decorate([
    Expose({ name: "CANTIDAD" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro3` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CANTIDAD", void 0);
__decorate([
    Expose({ name: "CREADOR" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro4` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CREADOR", void 0);
__decorate([
    Expose({ name: "ACTUALIZADOR" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro5` }; }, { toClassOnly: true }),
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
