import cartReducer from './cart_reducer';
import {
  ADD_T0_CART,
  REMOVE_FROM_CART,
  CartActionTypes } from '../reducers/types'

const cartInitial = {
  items: [],
  numberOfItems: 0,
};

const cartWithOneItem = {
  items: [{
    productId:2323,
    title:'new title',
    price:12,
  }],
  numberOfItems: 1,
};

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(
      cartReducer(undefined, {} as CartActionTypes))
      .toEqual({ items: [],numberOfItems: 0 })
    })
  it('should handle ADD_T0_CART', () => {
     const addToItem =  cartReducer(cartInitial, {
        type: ADD_T0_CART,
        payload: {
          productId:2323,
          title:'new title',
          price:12,
        }
      } as CartActionTypes )

      expect(addToItem).toEqual({
        items:[{
          productId:2323,
          title:'new title',
          price:12,
          quantity:1,
        }],
        "numberOfItems": 1
      })
    })
    it('should handle REMOVE_FROM_CART', () => {
      const addToItem =  cartReducer(cartWithOneItem, {
         type: REMOVE_FROM_CART,
         payload: {
           productId:2323,
           quantity:1,
         }
       } as CartActionTypes )
 
       expect(addToItem).toEqual({
         items:[],
         numberOfItems:0
       })
     })
})
