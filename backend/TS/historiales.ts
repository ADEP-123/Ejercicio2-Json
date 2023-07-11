import { Expose, Type, Transform } from "class-transformer";

export class inventarios {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: "CANTIDAD" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    CANTIDAD: number;

    @Expose({ name: "ID_BODEGA1" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID_BODEGA1: number;

    @Expose({ name: "ID_BODEGA2" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID_BODEGA2: number;

    @Expose({ name: "ID_INVENTARIO" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID_INVENTARIO: number;

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



    constructor(id: number, cantidad: number, id_bodega_origen: number, id_bodega_destino: number, id_inventario: number, created_by: number, update_by: number, created_at: Date, updated_at: Date, deleted_at: Date) {
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