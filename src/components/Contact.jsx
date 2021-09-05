import React, {useState, useRef} from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {

    const props = useSpring({
        from: { opacity: 0, width: '100%' },
        to: { opacity: 1, width: '100%' }
        })

        const formId = 'OcjayoUm';
        const formSparkUrl = `https://submit-form.com/${formId}`;
        const recaptchKey = '6LdYTkgcAAAAAAtyYcwhJSulLrsbG4duU8a3tnQh';
        const recaptchaRef = useRef();

        const initialFormState = {
            email: '',
            name: '',
            message: '',
        }

        const [formState, setFormState] = useState(initialFormState);
        const [submitting, setSubmitting] = useState(false);
        const [message, setMessage] = useState();
        const [recaptchaToken, setRecaptchaToken] = useState();

        const submitForm = async (event) => {
            event.preventDefault();
            setSubmitting(true);
            await postSubmission();
            setSubmitting(false);
        };

        const postSubmission = async () => {
            const payload = {
                ...formState,
                "g-recaptcha-response": recaptchaToken
            }
        
            try {
                const result = await axios.post(formSparkUrl, payload);
                console.log(result);
                setMessage({
                    text: 'Wiadomość została wysłana.',
                });
                setFormState(initialFormState);
                recaptchaRef.current.reset();
            } catch(error) {
                console.log(error);
                setMessage({
                    text: 'Coś poszło nie tak. Spróbuj jeszcze raz.',
                });
            }
        };

        const updateFormControl = (event) => {
            const { id, value } = event.target;
            const formKey = id;
            const updateFormState = {...formState};
            updateFormState[formKey] = value;
            setFormState(updateFormState);
        };

        const updateRecaptchToken = (token) => {
            setRecaptchaToken(token);
        };
        

    return (
        <animated.div style={props}>
            <div className="contact-right-box">
                <h2 className="main-color tittle">Kontakt</h2>
                <form onSubmit={submitForm}>
                    <div className="form-box">
                        <label htmlFor="name">Imię</label>
                        <input onChange={updateFormControl} type="text" id="name" value={formState.name} required/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="email">Email</label>
                        <input onChange={updateFormControl} type="email" id="email" value={formState.email} required/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="message">Wiadomość</label>
                        <textarea id="message" onChange={updateFormControl} value={formState.message} required/>
                    </div>

                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchKey}
                        onChange={updateRecaptchToken}
                    />

                {message && (
                    <div className="form-message">
                        {message.text}
                    </div>
                )}
                    <button disabled={submitting}>
                        {submitting ? "Wysyłanie..." : "Wyślij"}
                    </button>
                </form>
            </div>
        </animated.div>
    )
}
