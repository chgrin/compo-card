import { FullBoxPrice } from '../full-box-price/FullBoxPrice';
import { Price } from '../price/Price';
import { ProductAvailability } from '../product-availability/ProductAvailability';
import { UserActions } from '../user-actions/UserActions';
import { Features } from '../features/Features';

import { ProductAvailabilityService } from '@/services/product-availability-service/ProductAvailabilityService';
import { MockData } from '@/product-data-source/MockData';

import styles from './styles.module.scss';

export const ProductDetails = () => {
  const { features, isFavorite, productAvailability } = MockData.getProductInfo(1);
  const deliveryDay = ProductAvailabilityService.convertDeliveryDate(productAvailability.nearestDeliveryDate);
  const availableProductCount = ProductAvailabilityService.getAvailableProductCount(productAvailability.pickUpPoints);

  return (
    <div className={styles['product-details__wrapper']}>
      <div className={styles['product-actions']}>
        <div className={styles['price-count__wrapper']}>
          <Price />
          <FullBoxPrice />
        </div>

        <div className={styles['horizontal-divider']}></div>

        <ProductAvailability nearestDeliveryDay={deliveryDay} pickUpPoints={productAvailability.pickUpPoints} />
        <UserActions isFavorite={isFavorite} maxProductCount={availableProductCount} />
      </div>

      <div className={styles['vertical-divider']}></div>

      <Features features={features} />

      <div className={styles['product-details__description']}>
        <h2>Описание товара</h2>
        <p>
          Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из&nbsp;ряда вон
          выходящий SWOT-анализ. Воздействие на&nbsp;потребителя определяет возрастающий интеграл по&nbsp;поверхности, что известно даже школьникам.
          Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
          экспериментальный скачок функции, таким образом сбылась мечта идиота&nbsp;&mdash; утверждение полностью доказано. Арифметическая прогрессия
          притягивает линейно зависимый пул лояльных изданий.
        </p>
      </div>
    </div>
  );
};
