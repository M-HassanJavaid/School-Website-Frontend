import React from 'react'
import styles from './AdmissionForm.module.css'
import Button from '../Button/Button.jsx'
import { useForm } from 'react-hook-form'

const AdmissionForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' })

  async function submitForm(data) {
    console.log(data)
  }

  function isDobValid(value) {
    const today = new Date();
    const dob = new Date(value);

    // future date check
    if (dob > today) {
      return "Date of Birth cannot be in the future";
    }

    // calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // min age check
    if (age < 1) {
      return "Student must be at least 5 years old";
    }

    return true; // ✅ passed all checks
  }

  return (
    <section className={styles.formConatiner} >
      <h1 className={styles.formHeading}>Apply for enrollment now!</h1>
      <form className={styles.form} id='admissionForm' onSubmit={handleSubmit(submitForm)}>

        {/* student's Name Input */}
        <input {...register('name', {
          required: `Student's name is required!`,
          minLength: {
            value: 3,
            message: `Student's name should be have minimum 3 characters!`
          },
          maxLength: {
            value: 50,
            message: `Student's name cannot exceed 50 characters!`
          },
        })}
          type="text" name="name" id="name" placeholder="Enter Student's full name." className={styles.inputs} />

        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        {/* Fathers Name */}
        <input {...register('fatherName', {
          required: `Student's father name is required!`,
          minLength: {
            value: 3,
            message: `Student's name should be have minimum 3 characters!`
          },
          maxLength: {
            value: 50,
            message: `Student's name cannot exceed 50 characters`
          }
        })}
          type="text" name="fatherName" id="fatherName" placeholder="Enter Student's father full name." className={styles.inputs} />

        {errors.fatherName && <p style={{ color: 'red' }}>{errors.fatherName.message}</p>}


        {/* Date of birth */}
        <input {...register('dateOfBirth', {
          required: `Student's date of Birth is required!`,
          validate: isDobValid,
        })}
          type="date" name="dateOfBirth" id="dateOfBirth" placeholder="Enter Student's date of birth." className={styles.inputs} />

        {errors.dateOfBirth && <p style={{ color: 'red' }}>{errors.dateOfBirth.message}</p>}


        <input {...register('phone', {
          required: `Phone number is required!`,
          minLength: {
            value: 10,
            message: 'Phone number should be have minimum 10 characters!'
          },
          maxLength: {
            value: 15,
            message: 'Phone number cannot exceed 15 characters!'
          }
        })}
          type="tel" name='phone' id='phone' placeholder='Enter a valid phone number' className={styles.inputs} />

        {errors.phone && <p style={{color: "red"}} >{errors.phone.message}</p>}

        <input {...register('email', {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          }
        })}
          type="email" name='email' id='emaild' placeholder='Enter a valide email id. (Optional)' className={styles.inputs} />

        {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}

        <select {...register('classApplyingFor', {
          required: 'Please select your class!',
          validate: (value) => value !== "" || "Please select your class!"
        })}
          name="classApplyingFor" id="classApplyingFor" className={styles.inputs}>
          <option value="">-- Select your class --</option>
          <option value="nursery">Nursery</option>
          <option value="kg1">KG 1</option>
          <option value="kg2">KG 2</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        {errors.classApplyingFor && <p style={{color: "red"}} >{errors.classApplyingFor.message}</p>}


        <Button formId='admissionForm' extraStyles={styles.btn} title='Submit Now' />
      </form>
    </section>
  )
}

export default AdmissionForm
