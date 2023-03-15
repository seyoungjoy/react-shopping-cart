import axios from 'axios';

export interface ProductType {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}
export const fetchProductList = async (): Promise<null | ProductType[]> => {
  try {
    const { data } = await axios(`${process.env.REACT_APP_API_URL}/products`);
    return data.productsList;
  } catch (error) {
    console.error(error);
    return null;
  }
};