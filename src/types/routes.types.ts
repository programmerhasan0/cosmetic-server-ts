type Cart = {
    prodId: string;
    name: string;
    email: string;
    price: number;
    quantity: number;
};

export type Message = {
    statusCode: number;
    message: string;
    payload: Cart;
};
