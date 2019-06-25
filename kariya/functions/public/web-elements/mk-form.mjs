import MK from '../js/mk.mjs'

class MyForm extends MK{
    connectedCallback(){
        this.change('title','Material Design Formular');
        this.render();
        this.store('fullname','mahesh kariya');
        this.remove('fullname');


    }
    render(){
      // var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);  

      // db.transaction(function (tx) { 
      //    tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (id unique, log)');
      //    tx.executeSql('INSERT INTO USERS (id, log) VALUES (1, "foobar")'); 
        
      // });  
      
      // db.transaction(function (tx) { 
      //    tx.executeSql('SELECT * FROM USERS', [], function (tx, results) { 
      //       var len = results.rows.length, i; 

      //       console.table(results.rows);

      //       for (i = 0; i < len; i++) { 
      //          console.log(results.rows.item(i).log ); 
      //       } 
        
      //    }, null); 
        
      // });   

     this.innerHTML=`
        <form class="form-card">
        
            <fieldset class="form-fieldset">
            <legend class="form-legend"></legend>
                <div class="form-radio form-radio-inline">
                    <div class="form-radio-legend">Prefered Pronoun</div>
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="He" />
                        <i class="form-radio-button"></i>
                        <span>He</span>
                    </label>
                  
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="She" />
                        <i class="form-radio-button"></i>
                        <span>She</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="They" />
                        <i class="form-radio-button"></i>
                        <span>They</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="Ze" />
                        <i class="form-radio-button"></i>
                        <span>Ze</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="A pronoun not listed" />
                        <i class="form-radio-button"></i>
                        <span>A pronoun not listed</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=pronoun class="form-radio-field" type="radio" required value="No pronoun preference" />
                        <i class="form-radio-button"></i>
                        <span>No pronoun preference</span>
                    </label>
                    <small class="form-element-hint">Feel free to choose</small>
                </div>
                <div class="form-element form-input">
                    <input id="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9" class="form-element-field" placeholder="Please fill in your full name" type="input" required/>
                    <div class="form-element-bar"></div>
                    <label class="form-element-label" for="field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9">Name</label>
                </div>
                <div class="form-element form-input form-has-error">
                    <input id="field-x98ezh-s6s2g8-vfrkgb-ngrhef-atfkop" class="form-element-field -hasvalue" placeholder=" " type="number" required value="13" />
                    <div class="form-element-bar"></div>
                    <label class="form-element-label" for="field-x98ezh-s6s2g8-vfrkgb-ngrhef-atfkop">Your age</label>
                    <small class="form-element-hint">You are way to young, sorry</small>
                </div>
                <div class="form-element form-input">
                    <input id="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz" class="form-element-field" placeholder=" " type="email" required/>
                    <div class="form-element-bar"></div>
                    <label class="form-element-label" for="field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz">Email</label>
                    <small class="form-element-hint">We will never spam you!</small>
                </div>
                <div class="form-checkbox form-checkbox-inline">
                    <div class="form-checkbox-legend">Which type of music do you like?</div>
                    <label class="form-checkbox-label">
                        <input name=rap class="form-checkbox-field" type="checkbox" />
                        <i class="form-checkbox-button"></i>
                        <span>Rap</span>
                    </label>
                    <label class="form-checkbox-label">
                        <input name=pop class="form-checkbox-field" type="checkbox" />
                        <i class="form-checkbox-button"></i>
                        <span>Pop</span>
                    </label>
                    <label class="form-checkbox-label">
                        <input name=rock class="form-checkbox-field" type="checkbox" />
                        <i class="form-checkbox-button"></i>
                        <span>Rock</span>
                    </label>
                    <label class="form-checkbox-label">
                        <input name=metal class="form-checkbox-field" type="checkbox" />
                        <i class="form-checkbox-button"></i>
                        <span>Metal</span>
                    </label>
                    <label class="form-checkbox-label">
                        <input name=r_b class="form-checkbox-field" type="checkbox" />
                        <i class="form-checkbox-button"></i>
                        <span>R&amp;B</span>
                    </label>
                </div>
                <div class="form-element form-select">
                    <select id="field-be1h8i-ll2hpg-q4efzm-nfjj1e-udkw5r" class="form-element-field">
                        <option disabled selected value="" class="form-select-placeholder"></option>
                        <option value="Rap">Rap</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Metal">Metal</option>
                        <option value="R&amp;B">R&amp;B</option>
                    </select>
                    <div class="form-element-bar"></div>
                    <label class="form-element-label" for="field-be1h8i-ll2hpg-q4efzm-nfjj1e-udkw5r">Select your favorite music genre</label>
                </div>
                <div class="form-radio form-radio-block">
                    <div class="form-radio-legend">I prefer…</div>
                    <label class="form-radio-label">
                        <input name=eat class="form-radio-field" type="radio" value="vagatarian food" />
                        <i class="form-radio-button"></i>
                        <span>vagatarian food</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=eat class="form-radio-field" type="radio" value="vegan food" />
                        <i class="form-radio-button"></i>
                        <span>vegan food</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=eat class="form-radio-field" type="radio" value="food with fish" />
                        <i class="form-radio-button"></i>
                        <span>food with fish</span>
                    </label>
                    <label class="form-radio-label">
                        <input name=eat class="form-radio-field" type="radio" value="food with meat" />
                        <i class="form-radio-button"></i>
                        <span>food with meat</span>
                    </label>
                </div>
                <div class="form-element form-textarea">
                    <textarea id="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm" class="form-element-field" placeholder=" "></textarea>
                    <div class="form-element-bar"></div>
                    <label class="form-element-label" for="field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm">Your Message</label>
        
                </div>
            </fieldset>
            <div class="form-actions">
                <button class="form-btn" type="submit">Send inquiry</button>
                <button class="form-btn-cancel -nooutline" type="reset">Cancel</button>
            </div>
        </form>
       
        <style>
        
        .background {
          position: fixed;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        
        .form-btn,
        .form-btn-cancel,
        .form-btn-error {
          background: transparent;
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: 1px solid transparent;
          padding: 5px 24px;
          margin-top: 2.25rem;
          position: relative;
          z-index: 0;
          transition: transform 0.28s ease;
          will-change: transform;
        }
        
        .form-btn::before,
        .form-btn::after,
        .form-btn-cancel::before,
        .form-btn-cancel::after,
        .form-btn-error::before,
        .form-btn-error::after {
          position: absolute;
          content: "";
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
        }
        
        .form-btn::before,
        .form-btn-cancel::before,
        .form-btn-error::before {
          background: #337ab7;
          z-index: -2;
        }
        
        .form-btn::after,
        .form-btn-cancel::after,
        .form-btn-error::after {
          background: #000;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.28s ease;
          will-change: opacity;
        }
        
        .form-btn:focus,
        .form-btn-cancel:focus,
        .form-btn-error:focus {
          outline: none;
        }
        
        .form-btn:focus::after,
        .form-btn:hover::after,
        .form-btn-cancel:focus::after,
        .form-btn-cancel:hover::after,
        .form-btn-error:focus::after,
        .form-btn-error:hover::after {
          opacity: 0.3;
        }
        
        .form-btn:active,
        .form-btn-cancel:active,
        .form-btn-error:active {
          transform: translateY(1px);
        }
        
        .form-btn-error::before {
          background: #d9534f;
        }
        
        .form-btn-cancel {
          transition: color 0.28s ease, transform 0.28s ease;
          color: #b52b27;
          border-color: currentColor;
          will-change: color, transform;
        }
        
        .form-btn-cancel.-nooutline {
          border-color: transparent;
        }
        
        .form-btn-cancel::before {
          background: #b52b27;
          opacity: 0;
          transition: opacity 0.28s ease;
          will-change: opacity;
        }
        
        .form-btn-cancel::after {
          display: none;
        }
        
        .form-btn-cancel:focus,
        .form-btn-cancel:hover {
          color: #fff;
        }
        
        .form-btn-cancel:focus::before,
        .form-btn-cancel:hover::before {
          opacity: 1;
        }
        
        .form-btn-block {
          display: block;
          width: 100%;
          padding: 5px;
        }
        
        .form-checkbox,
        .form-radio {
          position: relative;
          margin-top: 2.25rem;
          margin-bottom: 2.25rem;
          text-align: left;
        }
        
        .form-checkbox-inline .form-checkbox-label,
        .form-radio-inline .form-radio-label {
          display: inline-block;
          margin-right: 1rem;
        }
        
        .form-checkbox-legend,
        .form-radio-legend {
          margin: 0 0 0.125rem 0;
          font-weight: 500;
          font-size: 1rem;
          color: #333;
        }
        
        .form-checkbox-label,
        .form-radio-label {
          position: relative;
          cursor: pointer;
          padding-left: 1.5rem;
          text-align: left;
          color: #333;
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .form-checkbox-label:hover i,
        .form-radio-label:hover i {
          color: #337ab7;
        }
        
        .form-checkbox-label span,
        .form-radio-label span {
          display: block;
        }
        
        .form-checkbox-label input,
        .form-radio-label input {
          width: auto;
          opacity: 0.0001;
          position: absolute;
          left: 0.25rem;
          top: 0.25rem;
          margin: 0;
          padding: 0;
        }
        
        .form-checkbox-button {
          position: absolute;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          display: block;
          color: #999;
          left: 0;
          top: 0.25rem;
          width: 1rem;
          height: 1rem;
          z-index: 0;
          border: 0.125rem solid currentColor;
          border-radius: 0.0625rem;
          transition: color 0.28s ease;
          will-change: color;
        }
        
        .form-checkbox-button::before,
        .form-checkbox-button::after {
          position: absolute;
          height: 0;
          width: 0.2rem;
          background-color: #337ab7;
          display: block;
          transform-origin: left top;
          border-radius: 0.25rem;
          content: "";
          transition: opacity 0.28s ease, height 0s linear 0.28s;
          opacity: 0;
          will-change: opacity, height;
        }
        
        .form-checkbox-button::before {
          top: 0.65rem;
          left: 0.38rem;
          transform: rotate(-135deg);
          box-shadow: 0 0 0 0.0625rem #fff;
        }
        
        .form-checkbox-button::after {
          top: 0.3rem;
          left: 0;
          transform: rotate(-45deg);
        }
        
        .form-checkbox-field:checked ~ .form-checkbox-button {
          color: #337ab7;
        }
        
        .form-checkbox-field:checked ~ .form-checkbox-button::after,
        .form-checkbox-field:checked ~ .form-checkbox-button::before {
          opacity: 1;
          transition: height 0.28s ease;
        }
        
        .form-checkbox-field:checked ~ .form-checkbox-button::after {
          height: 0.5rem;
        }
        
        .form-checkbox-field:checked ~ .form-checkbox-button::before {
          height: 1.2rem;
          transition-delay: 0.28s;
        }
        
        .form-radio-button {
          position: absolute;
          left: 0;
          cursor: pointer;
          display: block;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #999;
        }
        
        .form-radio-button::before,
        .form-radio-button::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          margin: 0.25rem;
          width: 1rem;
          height: 1rem;
          transition: transform 0.28s ease, color 0.28s ease;
          border-radius: 50%;
          border: 0.125rem solid currentColor;
          will-change: transform, color;
        }
        
        .form-radio-button::after {
          transform: scale(0);
          background-color: #337ab7;
          border-color: #337ab7;
        }
        
        .form-radio-field:checked ~ .form-radio-button::after {
          transform: scale(0.5);
        }
        
        .form-radio-field:checked ~ .form-radio-button::before {
          color: #337ab7;
        }
        
        .form-has-error .form-checkbox-button,
        .form-has-error .form-radio-button {
          color: #d9534f;
        }
        
        .form-card {
            font-size:1rem;
          border-radius: 2px;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.56s cubic-bezier(0.25, 0.8, 0.25, 1);
          max-width: 500px;
          padding: 0;
          margin: 50px auto;
          padding-bottom:100px;
        }
        
        .form-card:hover,
        .form-card:focus {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
        
        .form-card:focus-within {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
        
        .form-actions {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          margin-top: 2.25rem;
        }
        
        .form-actions .form-btn-cancel {
          -ms-flex-order: -1;
          order: -1;
        }
        
        .form-actions::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background: #999;
          opacity: 0.3;
        }
        
        .form-actions > * {
          -ms-flex: 1;
          flex: 1;
          margin-top: 0;
        }
        
        .form-fieldset {
          padding: 30px;
          border: 0;
        }
        
        .form-fieldset + .form-fieldset {
          margin-top: 15px;
        }
        
        .form-legend {
          padding: 1em 0 0;
          margin: 0 0 -0.5em;
          font-size: 1.5rem;
          text-align: center;
        }
        
        .form-legend + p {
          margin-top: 1rem;
        }
        
        .form-element {
          position: relative;
          margin-top: 2.25rem;
          margin-bottom: 2.25rem;
        }
        
        .form-element-hint {
          font-weight: 400;
          font-size: 0.6875rem;
          color: #a6a6a6;
          display: block;
        }
        
        .form-element-bar {
          position: relative;
          height: 1px;
          background: #999;
          display: block;
        }
        
        .form-element-bar::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #337ab7;
          height: 2px;
          display: block;
          transform: rotateY(90deg);
          transition: transform 0.28s ease;
          will-change: transform;
        }
        
        .form-element-label {
          position: absolute;
          top: 0.75rem;
          line-height: 1.5rem;
          pointer-events: none;
          padding-left: 0.125rem;
          z-index: 1;
          font-size: 1rem;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
          color: #a6a6a6;
          transform: translateY(-50%);
          transform-origin: left center;
          transition: transform 0.28s ease, color 0.28s linear, opacity 0.28s linear;
          will-change: transform, color, opacity;
        }
        
        .form-element-field {
          outline: none;
          height: 1.5rem;
          display: block;
          background: none;
          padding: 0.125rem 0.125rem 0.0625rem;
          font-size: 1rem;
          border: 0 solid transparent;
          line-height: 1.5;
          width: 100%;
          color: #333;
          box-shadow: none;
          opacity: 0.001;
          transition: opacity 0.28s ease;
          will-change: opacity;
        }
        
        .form-element-field:-ms-input-placeholder {
          color: #a6a6a6;
          transform: scale(0.9);
          transform-origin: left top;
        }
        
        .form-element-field::placeholder {
          color: #a6a6a6;
          transform: scale(0.9);
          transform-origin: left top;
        }
        
        .form-element-field:focus ~ .form-element-bar::after {
          transform: rotateY(0deg);
        }
        
        .form-element-field:focus ~ .form-element-label {
          color: #337ab7;
        }
        
        .form-element-field.-hasvalue,
        .form-element-field:focus {
          opacity: 1;
        }
        
        .form-element-field.-hasvalue ~ .form-element-label,
        .form-element-field:focus ~ .form-element-label {
          transform: translateY(-100%) translateY(-0.5em) translateY(-2px) scale(0.9);
          cursor: pointer;
          pointer-events: auto;
        }
        
        .form-has-error .form-element-label.form-element-label,
        .form-has-error .form-element-hint {
          color: #d9534f;
        }
        
        .form-has-error .form-element-bar,
        .form-has-error .form-element-bar::after {
          background: #d9534f;
        }
        
        .form-is-success .form-element-label.form-element-label,
        .form-is-success .form-element-hint {
          color: #259337;
        }
        
        .form-is-success .form-element-bar::after {
          background: #259337;
        }
        
        input.form-element-field:not(:placeholder-shown),
        textarea.form-element-field:not(:placeholder-shown) {
          opacity: 1;
        }
        
        input.form-element-field:not(:placeholder-shown) ~ .form-element-label,
        textarea.form-element-field:not(:placeholder-shown) ~ .form-element-label {
          transform: translateY(-100%) translateY(-0.5em) translateY(-2px) scale(0.9);
          cursor: pointer;
          pointer-events: auto;
        }
        
        textarea.form-element-field {
          height: auto;
          min-height: 3rem;
        }
        
        select.form-element-field {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
        }
        
        .form-select-placeholder {
          color: #a6a6a6;
          display: none;
        }
        
        .form-select .form-element-bar::before {
          content: "";
          position: absolute;
          height: 0.5em;
          width: 0.5em;
          border-bottom: 1px solid #999;
          border-right: 1px solid #999;
          display: block;
          right: 0.5em;
          bottom: 0;
          transition: transform 0.28s ease;
          transform: translateY(-100%) rotateX(0deg) rotate(45deg);
          will-change: transform;
        }
        
        .form-select select:focus ~ .form-element-bar::before {
          transform: translateY(-50%) rotateX(180deg) rotate(45deg);
        }
        
        .form-element-field[type="number"] {
          -moz-appearance: textfield;
        }
        
        .form-element-field[type="number"]::-webkit-outer-spin-button,
        .form-element-field[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        body {
          margin: 40px auto;
          background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
        }
        </style>
        <script>
        document.addEventListener("change", function(event) {
          let element = event.target;
          if (element && element.matches(".form-element-field")) {
            element.classList[element.value ? "add" : "remove"]("-hasvalue");
          }
        });
        
        </script>`;
    }
}

customElements.define('mk-form',MyForm);