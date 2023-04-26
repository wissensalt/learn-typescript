class Coupon {
    id: number;
    code: string;
    name: string;
    discountAmount: number;
}

class CouponRule {
    id: number;
    coupon: Coupon;
    minTransactionAmount: number;
}

class UserCoupon {
    id: number;
    coupon: Coupon;
    usedAt: Date;
}

class CouponTransaction {
    id: number;
    userCoupon: UserCoupon;
    userId: number;
    orderId: number;

    createdAt: Date;
}

//main function
const coupon: Coupon = {
    id: 1,
    code: "test",
    name:"test",
    discountAmount: 1000
}
