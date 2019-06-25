class MyHome extends HTMLElement{
    connectedCallback() {
      this.render();
      }
    render() {

          let home = `
          <div class="swiper-container">
        
            <div class="swiper-pagination">
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide">Tab 1</div>
              <div class="swiper-slide">Tab 2</div>
              <div class="swiper-slide">Tab 3</div>
              <div class="swiper-slide">Tab 4</div>
            </div>
          </div>
        <style>:root {
          box-sizing: border-box;
          font-size: 62.5%;
        }
        
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        

        
        a {
          text-decoration: none;
        }
        
        .intro {
          text-align: center;
        }
        .intro h1 {
          color: #EFEFEF;
          font-size: 3rem;
          margin: 60px 0 0;
          font-weight: bold;
          font-family: monospace;
        }
        @media screen and (min-width: 800px) {
          .intro h1 {
            font-size: 4rem;
          }
        }
        .intro p {
          color: #E0CF79;
          font-size: 1.3rem;
          line-height: 1.5;
        }
        .intro a {
          color: #40DFBB;
          font-weight: bold;
          text-decoration: none;
        }
        
        .swiper-container {
          width: 100%;
          height: 100%;
          margin: 60px auto 0;
        }
        @media screen and (min-width: 800px) {
          .swiper-container {
            width: 70%;
            margin-left: 15%;
          }
        }
        
        .swiper-slide {
          background: #fff;
          color: #333;
          font-size: 1.8rem;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .swiper-container-horizontal > .swiper-pagination {
          top: 0;
          bottom: auto;
        }
        .swiper-container-horizontal > .swiper-pagination .swiper-pagination-bullet {
          margin: 0;
        }
        
        .active-mark {
          background: #000;
          width: 25%;
          height: 4px;
          position: absolute;
          left: 0;
          top: 52px;
          transition: left 0.2s ease-out;
        }
        
        .swiper-pagination-bullet {
          background-color: #687894;
          border-radius: 0;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          font-size: 1.6rem;
          font-weight: normal;
          opacity: 1;
          height: 56px;
          width: 25%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: font-weight 0.22s ease;
        }
        .swiper-pagination-bullet:nth-of-type(1).swiper-pagination-bullet-active ~ .active-mark {
          left: 0%;
        }
        .swiper-pagination-bullet:nth-of-type(2).swiper-pagination-bullet-active ~ .active-mark {
          left: 25%;
        }
        .swiper-pagination-bullet:nth-of-type(3).swiper-pagination-bullet-active ~ .active-mark {
          left: 50%;
        }
        .swiper-pagination-bullet:nth-of-type(4).swiper-pagination-bullet-active ~ .active-mark {
          left: 75%;
        }
        .swiper-pagination-bullet:first-of-type.swiper-pagination-bullet-active ~ .active-mark {
          left: 0;
        }
        
        .swiper-pagination-bullet-active {
          font-weight: bold;
        }
        </style><script>
        callmena();
        </script>
`;

        this.innerHTML = home;

  
      }
}
customElements.define('mk-home', MyHome);