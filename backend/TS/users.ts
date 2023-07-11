import { Expose, Type, Transform } from "class-transformer";

export class user {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value) ? value : "Error", { toClassOnly: true })
    ID: number;

    @Expose({ name: "NOMBRE" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    NOMBRE: string;

    @Expose({ name: "EMAIL" })
    @Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) return value; else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    EMAIL: string;

    @Expose({ name: "FECH_VERF_EMAIL" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECH_VERF_EMAIL: Date;

    @Expose({ name: "ESTADO" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    ESTADO: number;

    @Expose({ name: "CREADOR" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    CREADOR: number;

    @Expose({ name: "ACTUALIZADOR" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    ACTUALIZADOR: number;

    @Expose({ name: "FOTO" })
    @Type(() => String)
    FOTO: string;

    @Expose({ name: "CONTRASENA" })
    @Type(() => String)
    CONTRASENA: string;

    @Expose({ name: "FECHA_CREACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_CREACION: Date;

    @Expose({ name: "FECHA_ACTUALIZACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_ACTUALIZACION: Date;

    @Expose({ name: "FECHA_ELIMINACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_ELIMINACION: Date;



    constructor(id: number, nombre: string, email: string, email_verified_at: Date, estado: number, created_by: number, update_by: number, foto: string, password: string, created_at: Date, updated_at: Date, deleted_at: Date) {
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