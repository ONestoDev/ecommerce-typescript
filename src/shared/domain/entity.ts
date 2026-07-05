import { randomUUID } from "crypto";
import { IDEntityUUIDInvalido } from "./domain.exception";

//Método que verifica se é a instancia de uma entidade//
const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
};

abstract class Entity<T> {
    //Atributos//
    private _id: string;

    //Gets e Sets//
    public get id(): string {
        return this._id;
    }

    private set id(value: string) {
        if (!Entity.validUUID(value)) {
            throw new IDEntityUUIDInvalido();
        }
        this._id = value;
    }

    //Construtor//
    constructor(id?: string) {
        this.id = id ? id : randomUUID();
    }

    //Métodos//
    public equals(object?: Entity<T>): boolean {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this.id === object.id;
    }

    public static validUUID(UUID: string): boolean {
        let padraoUUID: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return padraoUUID.test(UUID);
    }

}

export { Entity };