import { NewOrderCommand } from '../models/newOrderCommand';
import { UpdateOrderCommand } from '../models/updateOrderCommand';

export class LoadStatuses {
    static type = '[Orders] Load Statuses';
    constructor() {}
}

export class LoadOrders {
    static type = '[Orders] Load All';
    constructor() {}
}

export class LoadFullOrder {
    static type = '[Orders] Load Full';
    constructor(public id: number) {}
}

export class NewOrder {
    static type = '[Orders] New';
    constructor(public command: NewOrderCommand) {}
}

export class UpdateOrder{
    static type = '[Orders] Update';

    constructor(public command: UpdateOrderCommand) {
    }
}
