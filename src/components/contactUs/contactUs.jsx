import { useRef, useState, useEffect } from 'react'
import styles from './contactUs.module.css'
import Button from "../Button/Button.jsx"
import { useForm } from 'react-hook-form'
import gsap from 'gsap'
import Loader from '../Loader/Loader.jsx'
import AlertBox from '../AlertBox/AlertBox.jsx'

const contactUs = () => {

    const [AlertMessage, setAlertMessage] = useState('');

    const form = useRef()
    const formHeading = useRef()

    useEffect(() => {
        [form.current, formHeading.current].forEach((elem) => {
            gsap.fromTo(elem,
                {
                    y: 500,
                    filter: 'blur(20px)',
                },
                {
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                }
            )
        })

    }, [])


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ mode: 'onChange' })

    async function submitForm(data) {
        try {
            await fetch('https://school-website-backend.up.railway.app/submitContactForm', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            setAlertMessage('Thanks for contacting us, We will reply you soon.')
        } catch (error) {
            setAlertMessage('Due to some error contact form could not submit.')
        }
    }

    return (
        <section className={styles.ContactFormSection}>
            <h1 className={styles.formHeading} ref={formHeading}>Got a query, feedback, or complaint? Just write to us — we’ll respond as soon as possible.</h1>

            <form className={styles.form} onSubmit={handleSubmit(submitForm)} id='contact-us-form' ref={form}>
                <input
                    {...register('name', {
                        required: {
                            value: true,
                            message: "Your name is required."
                        },
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long',
                        },
                        maxLength: {
                            value: 50,
                            message: 'Name cannot exceed 50 characters',
                        }
                    })}
                    type="text"
                    className={styles.inputs}
                    placeholder='Enter your full name.'
                />

                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

                <input
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required!'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Your email format is wrong!'
                        }
                    })}
                    type="email"
                    className={styles.inputs}
                    placeholder='Enter your valid Email.'
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

                <input
                    {...register('phone', {
                        required: 'The phone number is required!',
                        minLength: {
                            value: 10,
                            message: 'The phone number should be at least 10 characters!'
                        },
                        maxLength: {
                            value: 15,
                            message: "Phone number cannot exceed 15 characters!"
                        }
                    })}
                    type="number" className={styles.inputs} placeholder='Enter your valid phone number.' />

                {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}

                <input
                    {...register('subject', {
                        required: 'The Subject is required!',
                        minLength: {
                            value: 5,
                            message: 'The subject should be at least 5 characters!'
                        },
                        maxLength: {
                            value: 100,
                            message: 'Subject cannot exceed 100 characters!'
                        }
                    })}
                    type="text" className={styles.inputs} placeholder='Write you subject.' />

                {errors.subject && <p style={{ color: "red" }}>{errors.subject.message}</p>}


                <textarea
                    {...register('message', {
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters"
                        },
                        maxLength: {
                            value: 1000,
                            message: "Message cannot exceed 1000 characters"
                        }
                    })}
                    className={styles.messageInput + ' ' + styles.inputs}
                    placeholder='write your message...'></textarea>

                {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}

                {!isSubmitting && <Button title='Send Message' internalLink='/' extraStyles={styles.btn} formId={"contact-us-form"} />}
            </form>
            {AlertMessage && <AlertBox AlertMessage={AlertMessage} setAlertMessage={setAlertMessage} />}
            {isSubmitting && <Loader />}
        </section>
    )
}

export default contactUs
