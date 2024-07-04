import { Link } from 'react-router-dom';
/**
 * footer 컴포넌트
 */

/**
 * @todo  개인정보 처리 방침, 사업자등록번호, 결제 시스템 링크 추가
 */

const Footer = () => {
  return (
    <div className="w-full h-fit p-14 bg-[#417545] flex justify-between">
      <div className="flex flex-col justify-center gap-2">
        <ul className="flex flex-wrap text-md">
          <li className="li-after">Name: MOWHO</li>
          <li className="li-after">Owner: 문수민</li>
          <li className="li-after">Phone Number: 010-6375-0331</li>
          <li>Email: mowho.official@gmail.com</li>
        </ul>
        <div>Address: 서울특별시 강남구 선릉로 433, 신관 6층 </div>
        <p>예시)안전구매(에스크로) 서비스 가맹점Terms of Use Privacy Policy Confirm Entrepreneur Information</p>
        <div>Copyright 2024 MOWHO All rights reserved.</div>
      </div>
      <div className="flex items-end gap-6">
        <Link to="mailto:sum95771@gmail.com" target="_blank">
          <img className="w-7 h-7" src="/icons/email_icon.svg" alt="email_icon" />
        </Link>
        <Link to="https://www.instagram.com/mowho_official?igsh=aWw1cGdsMGtoa3o5&utm_source=qr" target="_blank">
          <img className="w-7 h-7" src="/icons/instargram_icon.svg" alt="instargram_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
