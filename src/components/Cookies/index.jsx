/* eslint-disable react/prop-types */
import swit from "../../assets/images/cookie-bar.png"

export default function Cookies({ cookieData, setCookieData }) {
    return (
        <>
            <div className="cookie-bar-box" style={cookieData ? { display: 'block' } : { display: 'none' }}>
                <div className="cookie-box">
                    <div className="cookie-image">
                        <img
                            src={swit}
                            className=" lazyload"
                            alt=""
                        />
                        <h2>Cookies!</h2>
                    </div>
                    <div className="cookie-contain">
                        <h5 className="text-content">
                            We use cookies to make your experience better
                        </h5>
                    </div>
                </div>
                <div className="button-group">
                    <button className="btn privacy-button">Privacy Policy</button>
                    <button className="btn ok-button" onClick={() => setCookieData(false)}>OK</button>
                </div>
            </div>
        </>
    )
}
