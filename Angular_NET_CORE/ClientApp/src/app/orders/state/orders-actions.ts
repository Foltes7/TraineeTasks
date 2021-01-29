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
