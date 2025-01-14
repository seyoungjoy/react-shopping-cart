import useProductDetail from '../hooks/useProductDetail';
import useProduct from '../../home/hooks/useProduct';
import { priceFormat } from '../../../utils';

const ProductDetail = () => {
  const { productData, loading, error } = useProductDetail();
  const { addCart } = useProduct();

  if (loading || !productData) {
    return <div>페이지 로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img
          className="w-480 h-480 mb-10"
          src={productData.imageUrl}
          alt={productData.name}
        />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{productData.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {priceFormat(productData.price)}
            </span>
          </div>
        </div>
        <button
          className="product-detail-button flex-center mt-20"
          onClick={() =>
            addCart({
              ...productData,
              totalPrice: productData.price,
              totalQuantity: 1,
            })
          }
        >
          장바구니
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
