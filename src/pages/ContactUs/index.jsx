import {useState} from 'react'
import {useForm} from 'react-hook-form'

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const submitForm = event => {
    event.preventDefault()
    if (name !== '' && phone !== '' && email !== '') {
      alert('Details saved')
      setName('')
      setPhone('')
      setEmail('')
    } else {
      alert('please fill all Details')
    }
  }

  return (
    <div className="text-left min-h-screen w-screen p-6 bg-linear-to-b from-sky-200 to-amber-100">
      <h1>Contact Us</h1>
      <p>For any queries and clarifications feel free to contact us</p>
      <div className="flex flex-col md:flex-row justify-between items-start py-5 md:p-5 h-100">
        <form className="w-screen md:w-8/12" onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col py-3 md:p-3">
            <label htmlFor="name">Name</label>
            <input className='w-10/12 md:w-full' {...register('name', {required: '*Name is required'})} />
            {errors.name && (
              <p className="text-red-900">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col py-3 md:p-3">
            <label htmlFor="contact">Phone Number</label>
            <input className='w-10/12 md:w-full' {...register('phone', {required: '*phone is required'})} />
            {errors.name && (
              <p className="text-red-900">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col py-3 md:p-3">
            <label htmlFor="email">Email Address</label>
            <input className='w-10/12 md:w-full' {...register('email', {required: '*email is required'})} />
            {errors.name && (
              <p className="text-red-900">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col py-3 md:p-3">
            <label>Budget</label>
            <select className="border-1 p-3 rounded-full w-10/12 md:w-full" name="budget">
              <option>50,000 - 1 lakh</option>
              <option>1 lakh - 2 lakh</option>
              <option>2 lakh - 3 lakh</option>
              <option>3 lakh </option>
            </select>
          </div>
          <br />
          <button
            className="text-white bg-linear-to-t from-sky-500 to-amber-500"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="hidden md:block flex flex-col items-center w-full h-full py-4">
          <img
            className="h-full"
            src="https://img.freepik.com/free-photo/flat-lay-retro-telephone-receiver-with-chat-bubbles_23-2148796011.jpg?ga=GA1.1.48591340.1727965003"
            alt="contact-img"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
