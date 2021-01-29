
export class LoadCustomers {
    static type = '[Customers] Load All';
    constructor() {}
}

export class LoadFullCustomer {
    static type = '[Customers] Load Full';
    constructor(public id: number) {}
}

export class NewCustomer {
    static type = '[Customers] New';
    constructor(public name: string, public address: string) {}
}
