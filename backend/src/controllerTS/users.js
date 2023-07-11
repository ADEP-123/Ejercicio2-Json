var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class user {
    constructor(id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, created_at, updated_at, deleted_at) {
        this.ID = id;
        this.NOMBRE = nombre;
        this.EMAIL = email;
        this.FECH_VERF_EMAIL = email_verified_at;
        this.ESTADO = estado;
        this.CREADOR = created_by;
        this.ACTUALIZADOR = update_by;
        this.FOTO = foto;
        this.CONTRASENA = password;
        this.FECHA_CREACION = created_at;
        this.FECHA_ACTUALIZACION = updated_at;
        this.FECHA_ELIMINACION = deleted_at;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ID", void 0);
__decorate([
    Expose({ name: "NOMBRE" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "NOMBRE", void 0);
__decorate([
    Expose({ name: "EMAIL" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "EMAIL", void 0);
__decorate([
    Expose({ name: "FECH_VERF_EMAIL" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], user.prototype, "FECH_VERF_EMAIL", void 0);
__decorate([
    Expose({ name: "ESTADO" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ESTADO", void 0);
__decorate([
    Expose({ name: "CREADOR" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "CREADOR", void 0);
__decorate([
    Expose({ name: "ACTUALIZADOR" }),
    Transform(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], user.prototype, "ACTUALIZADOR", void 0);
__decorate([
    Expose({ name: "FOTO" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "FOTO", void 0);
__decorate([
    Expose({ name: "CONTRASENA" }),
    Type(() => String),
    __metadata("design:type", String)
], user.prototype, "CONTRASENA", void 0);
__decorate([
    Expose({ name: "FECHA_CREACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], user.prototype, "FECHA_CREACION", void 0);
__decorate([
    Expose({ name: "FECHA_ACTUALIZACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], user.prototype, "FECHA_ACTUALIZACION", void 0);
__decorate([
    Expose({ name: "FECHA_ELIMINACION" }),
    Transform(({ value }) => new Date(value), { toClassOnly: true }),
    __metadata("design:type", Date)
], user.prototype, "FECHA_ELIMINACION", void 0);
