import { SectionTitle, SectionCartList } from '../components';
import { Layout } from '../layout';
import useCart from '../hooks/useCart';
import { CartItemType } from '../types';

const Cart = () => {
  const { carts, error, isLoading } = useCart();

  if (isLoading) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <SectionTitle text="장바구니" />
      <SectionCartList carts={carts as CartItemType[]} />
    </Layout>
  );
};

export default Cart;
