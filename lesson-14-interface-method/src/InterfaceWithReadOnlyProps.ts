interface InterfaceWithReadOnlyProps {
    readonly name: string;
    unitPrice: number;
}

const table: InterfaceWithReadOnlyProps = {
    name : "table",
    unitPrice : 5000,
}

// error
// table.name = "test";
table.unitPrice = 1000;