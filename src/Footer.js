import './css/footer_style.css';

const Footer = () => {
  return (
    <div className="footer_container">
      <footer>
        <div className="footer_content_wrapper footer_first">
          <div>
            <div>
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="" />
            </div>
            <div>기업소개</div>
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
            <div>고객센터</div>
          </div>
          <div>
            <a href="https://www.instagram.com/wantedjobs.kr/">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100" alt="" />
            </a>
            <a href="https://www.facebook.com/wantedkr">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100" alt="" />
            </a>
            <a href="https://blog.naver.com/wantedlab">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100" alt="" />
            </a>
            <a href="https://pf.kakao.com/_XqCIxl">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100" alt="" />
            </a>
            <a href="https://post.naver.com/my.nhn?memberNo=18284175">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100" alt="" />
            </a>
            <a href="https://apps.apple.com/kr/app/id1074569961">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100" alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100" alt="" />
            </a>
          </div>
        </div>
        <div className="footer_content_wrapper footer_second">
          <p>
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
            <br />
            © Wantedlab, Inc.
          </p>
          <div>
            <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="" />
            <select name="lang" id="lang">
              <option value="KR">한국 (한국어)</option>
              <option value="JP">日本 (日本語)</option>
              <option value="WW">Worldwide (English)</option>
              <option value="SG">Singapore (English)</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;