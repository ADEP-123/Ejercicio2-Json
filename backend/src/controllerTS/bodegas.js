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
export class bodegas {
    constructor(id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) {
        this.ID = id;
        this.NOMBRE = nombre;
        this.RESPONSABLE = id_responsable;
        this.ESTADO = estado;
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
], bodegas.prototype, "ID", void 0);
__decorate([
    Expose({ name: "NOMBRE" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "NOMBRE", void 0);
__decorate([
    Expose({ name: "RESPONSABLE" }),
    Transform(({ value, key }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "RESPONSABLE", void 0);
__decorate([
    Expose({ name: "ESTADO" }),
    Transform(({ value, key }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "ESTADO", void 0);
__decorate([
    Expose({ name: "CREADOR" }),
    Transform(({ value, key }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "CREADOR", void 0);
__decorate([
    Expose({ name: "ACTUALIZADOR" }),
    Transform(({ value, key }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "ACTUALIZADOR", void 0);
__decorate([
    Expose({ name: "FECHA_CREACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], bodegas.prototype, "FECHA_CREACION", void 0);
__decorate([
    Expose({ name: "FECHA_ACTUALIZACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], bodegas.prototype, "FECHA_ACTUALIZACION", void 0);
__decorate([
    Expose({ name: "FECHA_ELIMINACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], bodegas.prototype, "FECHA_ELIMINACION", void 0);
