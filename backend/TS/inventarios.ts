import { Expose, Type, Transform } from "class-transformer";

export class inventarios {
    @Expose({ name: "ID" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: "ID_BODEGA" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID_BODEGA: number;

    @Expose({ name: "ID_PRODUCTO" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID_PRODUCTO: number;

    @Expose({ name: "CANTIDAD" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    CANTIDAD: number;

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



    constructor(id: number, id_bodega: number, id_producto: number, cantidad: number, created_by: number, update_by: number, created_at: Date, updated_at: Date, deleted_at: Date) {
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