interface Product {
    name: string;
    unitPrice: number;
}

interface DiscountCode {
    code: string;
    percentage: number;
}

interface ProductWithDiscountCodes extends Product {
    discountCodes: DiscountCode[];
}

const myProduct: ProductWithDiscountCodes = {
    name : "table",
    unitPrice : 10000,
    discountCodes : [
        {code: "abc", percentage: 30},
        {code: "def", percentage: 10}
    ]
}

console.log(myProduct);