import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
export declare class ProductoService {
    private productoRepo;
    constructor(productoRepo: Repository<Producto>);
    create(data: Partial<Producto>): Promise<Partial<Producto> & Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: string): Promise<Producto>;
    update(id: string, data: Partial<Producto>): Promise<Producto>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
