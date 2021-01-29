import { NewProductCommand } from '../models/newProductCommand';
import { UpdateProductCommand } from '../models/updateProductCommand';

export class LoadSizes {
    static type = '[Products] Load Sizes';
    constructor() {}
}

export class LoadCategories {
    static type = '[Products] Load Categories';
    constructor() {}
}

export class LoadProducts {
    static type = '[Products] Load All';
    constructor() {}
}

export class LoadFullProduct {
    static type = '[Products] Load Full';
    constructor(public id: number) {}
}

export class NewProduct {
    static type = '[Products] New';
    constructor(public command: NewProductCommand) {}
}

export class RemoveProduct{
    static type = '[Products] Remove';
    constructor(public id: number) {}
}

export class UpdateProduct{
    static type = '[Products] Update';
    constructor(public command: UpdateProductCommand) {}
}
