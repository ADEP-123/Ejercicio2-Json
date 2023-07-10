import { Expose, Type, Transform } from "class-transformer";

export class user {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: "NOMBRE" })
    @Type(() => String)
    NOMBRE: string;

    @Expose({ name: "EMAIL" })
    @Type(() => String)
    EMAIL: string;

    @Expose({ name: "FECH_VERF_EMAIL" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECH_VERF_EMAIL: Date;

    @Expose({ name: "ESTADO" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ESTADO: number;

    @Expose({ name: "CREADOR" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    CREADOR: number;

    @Expose({ name: "ACTUALIZADOR" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
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