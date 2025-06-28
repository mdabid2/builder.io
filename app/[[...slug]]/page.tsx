"use client";

import { RawImg } from "@components";

export default function MyComponent(props: any) {
  return (
    <>
      <div className="page-container">
        <div className="builder-content">
          <h1 className="welcome-title">🎉 Builder.io + Next.js is Ready!</h1>
          <p className="description">
            Your app is successfully set up, but you need to configure your
            Builder.io API key.
          </p>
          <h2 className="section-title">Next Steps:</h2>
          <ol className="steps-list">
            <li className="step-item">
              <strong className="step-label">Get your API key:</strong>
              <br className="line-break" />
              <span>Sign up at</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="builder-link"
                href="https://builder.io"
              >
                builder.io
              </a>
            </li>
            <li className="step-item">
              <strong className="step-label">Update your environment:</strong>
              <br className="line-break" />
              <span>Replace</span>
              <code className="code-snippet">your-api-key-here</code>
              <span>in</span>
              <code className="code-snippet">.env.local</code>
              <span>with your actual API key.</span>
            </li>
            <li className="step-item">
              <strong className="step-label">Create content:</strong>
              <br className="line-break" />
              <span>
                Go to Builder.io and create a new page with the URL path
                &quot;/&quot; to see your content here.
              </span>
            </li>
          </ol>
          <input
            placeholder="••••••••"
            name="password"
            type="password"
            autoComplete="off"
            className="password-input"
          />
          <p className="tip-box">
            <span>💡 </span>
            <strong className="tip-label">Tip:</strong>
            <span>
              {" "}
              Once you've added your API key and created content, this page will
              automatically display your Builder.io content!
            </span>
          </p>
        </div>
        <div className="route-announcer" />
      </div>
      <div className="dominos-header">
        <div className="order-section">
          <div className="order-inner">
            <div className="order-button-wrapper">
              <a
                href="https://pizzaonline.dominos.co.in/?src=local&utm_source=restaurant-dominos-local&utm_medium=store-locator-buy-online&utm_campaign=store-local"
                className="order-button"
              >
                <span className="order-text">Order online now</span>
                <span className="order-arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className="logo-section">
          <div className="hamburger-menu">
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </div>
          <a
            title="Domino's"
            href="https://www.dominos.co.in/home"
            className="logo-link"
          >
            <RawImg
              alt="Domino's Logo"
              title="Domino's"
              image="https://www.dominos.co.in/theme2/front/images/dominos-logo-241x53.png"
              className="logo-img"
            />
          </a>
          <a
            title="Domino's"
            href="https://www.dominos.co.in/home"
            className="logo-link mobile-logo"
          >
            <RawImg
              alt="Domino's Logo"
              title="Domino's"
              image="https://www.dominos.co.in/theme2/front/images/mobile-images/mbl-logo.png"
              className="logo-img"
            />
          </a>
        </div>
        <div className="nav-section">
          <ul role="tablist" className="nav-menu">
            <li className="nav-item">
              <a
                title="Our Menu"
                role="tab"
                target=""
                href="https://www.dominos.co.in/menu"
                className="nav-link"
              >
                OUR MENU
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="OFFERS"
                role="tab"
                target=""
                href="https://www.dominos.co.in/great-deals/online-pizza-coupons"
                className="nav-link"
              >
                OFFERS
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="OUR DEALS"
                role="tab"
                target=""
                href="https://www.dominos.co.in/great-deals/online-pizza-coupons"
                className="nav-link"
              >
                OUR DEALS
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="STORE"
                role=""
                target="_blank"
                href="https://www.dominos.co.in/store-location"
                className="nav-link"
              >
                STORE FINDER
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="INSIDE DOMINOS"
                role=""
                target=""
                href="https://www.dominos.co.in/about-us"
                className="nav-link"
              >
                INSIDE DOMINOS
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="GIFT VOUCHERS"
                role=""
                target=""
                href="https://www.dominos.co.in/gift-vouchers"
                className="nav-link"
              >
                GIFT CARD
              </a>
              <span className="nav-underline" />
            </li>
            <li className="nav-item">
              <a
                title="contact"
                role=""
                target=""
                href="https://www.dominos.co.in/contact"
                className="nav-link nav-link-last"
              >
                CONTACT
              </a>
              <span className="nav-underline" />
            </li>
          </ul>
        </div>
      </div>
      <div className="login-container">
        <header className="login-header">
          <h2 className="login-title">Welcome!</h2>
          <p className="login-subtitle">Choose one of the options to log in.</p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}
          action="https://customeriq-dev2.axtria.com/auth/realms/CustomerIQ/login-actions/authenticate?session_code=HRR4WnIN1xj4cdimzytAgoEQzsTbwDLlW-vIilKcxII&execution=6995ccd8-ae0c-4cda-b5c8-7c5dd9db17f8&client_id=UM&tab_id=zOAyDUdAf30"
          method="post"
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="username" className="field-label">
              Username
            </label>
            <input
              placeholder="Email"
              name="username"
              defaultValue=""
              type="text"
              autoFocus
              autoComplete="off"
              className="field-input"
            />
            <span className="error-message">Please enter username.</span>
          </div>
          <div className="form-field">
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <input
              placeholder="••••••••"
              name="password"
              type="password"
              autoComplete="off"
              className="field-input"
            />
            <span className="error-message">Please enter password.</span>
            <button
              type="button"
              title="password eye"
              onClick={() => {
                // Toggle password visibility
              }}
              className="password-toggle"
            >
              <RawImg
                width="16px"
                height="16px"
                alt="password hidden"
                image="https://customeriq-dev2.axtria.com/auth/resources/9c81v/login/customeriqTheme/img/eye-close.svg"
                className="eye-icon eye-closed"
              />
              <RawImg
                width="16px"
                height="16px"
                alt="password visible"
                image="https://customeriq-dev2.axtria.com/auth/resources/9c81v/login/customeriqTheme/img/eye-open.svg"
                className="eye-icon eye-open"
              />
            </button>
          </div>
          <div className="form-actions">
            <div />
            <div />
          </div>
          <div className="submit-section">
            <input
              type="hidden"
              name="credentialId"
              defaultValue="/"
              className="hidden-input"
            />
            <input
              name="login"
              type="submit"
              value="Log in"
              className="login-button"
            />
          </div>
          <div className="divider-section">
            <div className="divider-container">
              <div className="divider-line-container">
                <hr className="divider-line" />
              </div>
              <div className="divider-text">or</div>
              <div className="divider-line-container">
                <hr className="divider-line" />
              </div>
            </div>
            <div className="sso-section">
              <a
                href="https://customeriq-dev2.axtria.com/auth/realms/CustomerIQ/broker/Axtria-IDP/login?client_id=UM&tab_id=zOAyDUdAf30&session_code=HRR4WnIN1xj4cdimzytAgoEQzsTbwDLlW-vIilKcxII"
                className="sso-button"
              >
                <RawImg
                  width="16px"
                  height="16px"
                  alt="microsoft"
                  image="https://customeriq-dev2.axtria.com/auth/resources/9c81v/login/customeriqTheme/img/microsoft.svg"
                  className="sso-icon"
                />
                <span className="sso-text">Sign in with Axtria-IDP</span>
              </a>
            </div>
          </div>
        </form>
        <footer className="login-footer">
          <p className="footer-text">By proceeding you agree to</p>
          <p className="footer-links">
            <span>Axtria's</span>
            <span className="footer-link-wrapper">
              <a
                href="https://customeriq-dev2.axtria.com/auth/realms/CustomerIQ/protocol/openid-connect/auth?client_id=UM&redirect_uri=https%3A%2F%2Fcustomeriq-dev2.axtria.com%2F%23%2F&state=8431192c-3a7c-4add-8a73-29f5768613d6&response_mode=fragment&response_type=code&scope=openid&nonce=e6fbf0a4-261f-4ca9-8d8f-1e26571ce253"
                className="footer-link"
              >
                Terms of Service
              </a>
            </span>
            <span> and</span>
            <span className="footer-link-wrapper">
              <a
                target="_blank"
                href="https://www.axtria.com/privacy-statement/#:~:text=INFORMATION%20SECURITY%20%26%20DATA%20RETENTION&text=Security%20is%20a%20high%20priority,unauthorized%20access%2C%20use%20or%20disclosure"
                className="footer-link"
              >
                Privacy Policy
              </a>
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}
