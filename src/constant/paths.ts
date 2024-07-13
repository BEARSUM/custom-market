/**
 * route path
 */
export const PATH = Object.freeze({
  /**
   * main
   */
  root: '/' as const,

  /**
   * 마이페이지
   */
  mypage: '/mypage' as const,

  /**
   * 장바구니 페이지
   */
  cart: '/cart' as const,

  /**
   * 커스터마이징 페이지
   */
  customizing: '/customizing' as const,

  /**
   * shop 페이지
   */
  shop: '/shop' as const,
});

export const CUSTOMIZING_PATH = {
  /**
   * 커스터마이징 페이지 generatePath
   */
  customizing: '/customizing/:category' as const,

  /**
   * 커스터마이징 주문글 작성 페이지 generatePath
   */
  order: '/customizing/order/:id' as const,
};
