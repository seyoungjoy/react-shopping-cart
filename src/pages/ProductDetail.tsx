import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductDetail, ProductType } from '../api/product';
import { ROUTE } from '../router';
import Layout from '../layout/Layout';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<ProductType | null>(null);

  const addToCart = () => {
    const confirmRes = confirm(
      '장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?'
    );
    if (confirmRes) navigate(ROUTE.CART);
  };
  const fetchDetail = async () => {
    const detail = await fetchProductDetail(Number(id));
    if (detail === null) return;
    setProductData(detail);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Layout>
      <div className="product-detail-container">
        <div className="flex-col-center w-520">
          <img
            className="w-480 h-480 mb-10"
            src={productData?.imageUrl}
            alt={productData?.name}
          />
          <div className="product-detail-info">
            <span className="product-detail-info__name">
              {productData?.name}
            </span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">
                {productData?.price.toLocaleString()}원
              </span>
            </div>
          </div>
          <button
            className="product-detail-button flex-center mt-20"
            onClick={addToCart}
          >
            장바구니
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;