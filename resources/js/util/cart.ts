/* eslint-disable prettier/prettier */
import { cartItem } from '@/types';
export function addToCart(
    cart: cartItem[],
    product: cartItem,
    setCart: (cart: cartItem[]) => void,
) {
    const updatedcart = [...cart];
    const existingItem = updatedcart.find(
        (item: cartItem) => item.id === product.id,
    );

    if (existingItem) {
        existingItem.quantity += product.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
    } else {
        updatedcart.push({
            ...product,
            subtotal: product.quantity * product.price,
        });
    }
    // const cartTotal = cart.reduce(
    //     (sum: number, item: cartItem) => sum + (item.subtotal ?? 0),
    // );
    localStorage.setItem('cart', JSON.stringify(updatedcart));
    return setCart(updatedcart);
}

export const handleRemoveItem = (
    itemId: number,
    cart: cartItem[],
    setCart: (cart: cartItem[]) => void,
) => {
    const updatedCart = cart.filter((item: cartItem) => item.id !== itemId);
    setCart(updatedCart);
};
