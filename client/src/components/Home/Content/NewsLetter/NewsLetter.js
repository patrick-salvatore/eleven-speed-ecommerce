import React from 'react'

// style 
import './NewsLetter.scss'

const NewsLetter = () => {
    return (
        <div className= 'form-container'>
            <div className = 'form_newsletter'>
                <form className = 'newsletter'>
                    <label htmlFor= 'newsletter' className= 'newsletter_label'>Want up to date news?</label>
                    <div className = 'newletter-form_input'>
                        <input id = "newsletter" type = 'email' required= 'required' placeholder = 'Kindly enter your email address' className = 'newsletter-form_email'></input>
                        <button type = 'submit' className="newsletter-form_button">
                            <svg width="10" height="5" xmlns="http://www.w3.org/2000/svg" className="icon-chevron icon-chevron--right">
                                <path d="M9 .494l-4 4-4-4" fillRule="nonzero" stroke="#1C1C1C" fill="none"></path>
                            </svg>
                        </button>
                    </div>
                    <label htmlFor="gdpr_4" className="newsletter-form_label">Yes, keep me posted with The newest items, services and limited edition items.</label>
                </form> 
            </div>
        </div>
    )
}

export default NewsLetter