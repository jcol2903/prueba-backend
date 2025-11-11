import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    create(data: CreateProductoDto): Promise<Partial<import("./producto.entity").Producto> & import("./producto.entity").Producto>;
    findAll(): Promise<import("./producto.entity").Producto[]>;
    findOne(id: string): Promise<import("./producto.entity").Producto>;
    update(id: string, data: UpdateProductoDto): Promise<import("./producto.entity").Producto>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
