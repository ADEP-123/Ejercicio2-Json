import { Expose, Type, Transform } from "class-transformer";

export class bodegas {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: "NOMBRE" })
    @Type(() => String)
    NOMBRE: string;

    @Expose({ name: "RESPONSABLE" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    RESPONSABLE: number;

    @Expose({ name: "ESTADO" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ESTADO: number;

    @Expose({ name: "CREADOR" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    CREADOR: number;

    @Expose({ name: "ACTUALIZADOR" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ACTUALIZADOR: number;

    @Expose({ name: "FECHA_CREACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_CREACION: Date;

    @Expose({ name: "FECHA_ACTUALIZACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_ACTUALIZACION: Date;

    @Expose({ name: "FECHA_ELIMINACION" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    FECHA_ELIMINACION: Date;



    constructor(id: number, nombre: string, id_responsable: number, estado: number, created_by: number, update_by: number, created_at: Date, updated_at: Date, deleted_at: Date) {
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