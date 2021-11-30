import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useToast } from "../hooks/useToast";

export default function ContactPage() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        toast("success", "Thank you for reaching out!");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Head>
        <title>claudiamarie.me contact page</title>
        <meta
          name='react portfolio contact page for claudia marie developer california'
          content='web development, programming, next.js, react, gatsby'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <div className='xl:max-w-xl xl:mx-auto'>
        <h1 className='page-title'>Contact Me</h1>
      </div>
      <section className='text-gray-900 bg-primary body-font sub--page mb-16'>
        <div className='container px-5 mx-auto flex flex-wrap'>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className='text-gray-300 -mt-4 p-10 mr-12 max-w-xl mx-auto border-0  bg-vienna bg-opacity-20 shadow-2xl transform lg:translate-y-2 lg:translate-x-2 '
          >
            <div className='form-message'></div>
            <input type='hidden' name='redirect' className='redirect' />
            <div className='mb-10'>
              <p className='alpha font-medium text-base mb-5 w-9/12'>
                I'm always interested in exploring new projects and ideas. Send
                me a message and I'll get back to you shortly.
              </p>
              <hr className='border-gray-600' />
            </div>

            <div className='mb-5'>
              <label
                htmlFor='name'
                className='alpha text-lg flex justify-between items-end'
              >
                <span className='text-mushroom'>Name</span>
                <span className='text-xs text-mushroom'>
                  {errors?.name?.message}
                </span>
              </label>
              <div className='mt-1 flex shadow-md'>
                <span className='inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-current text-gray-400'
                  >
                    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z' />
                  </svg>
                </span>
                <input
                  type='text'
                  name='name'
                  {...register("name", {
                    required: "required",
                  })}
                  className='flex-1 block w-full sm:text-md rounded-none border border-mushroom bg-transparent border-b-2 border-t-0 border-r-0 border-l-0 alpha'
                />
              </div>
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='alpha text-lg flex justify-between items-end'
              >
                <span className='text-mushroom'>Email</span>
                {errors.email && (
                  <span className='text-xs text-mushroom'>
                    {errors.email.message}
                  </span>
                )}
              </label>
              <div className='mt-1 flex shadow-md'>
                <span className='inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='fill-current text-gray-400'
                  >
                    <path d='M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z' />
                  </svg>
                </span>
                <input
                  type='email'
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "You must enter a valid email",
                    },
                  })}
                  name='email'
                  className='flex-1 block w-full sm:text-md rounded-none border border-mushroom bg-transparent border-b-2 border-t-0 border-r-0 border-l-0 alpha'
                />
              </div>
            </div>
            <div className='mb-5'>
              <label
                htmlFor='message'
                className='alpha text-lg flex justify-between items-end'
              >
                <span className='text-mushroom'>Message</span>
                <span className='text-xs text-mushroom'>
                  {errors?.message?.message}
                </span>
              </label>
              <textarea
                name='message'
                {...register("message", {
                  required: {
                    value: true,
                    message: "Please enter a message",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Your message can't exceed 1000 characters",
                  },
                })}
                id='message'
                cols='30'
                rows='10'
                className={`shadow-md mt-1 block w-full alpha sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-gray-700 dark:bg-gray-900 ${
                  errors.message ? "ring-4 ring-red-600" : null
                }`}
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='flex justify-center font-medium shadow-md rounded-none p-2 w-3/12 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900  bg-gray-800 text-mushroom hover:bg-gray-900 mx-auto'
              >
                {" "}
                Send&nbsp;
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='fill-current text-mushroom'
                >
                  <path d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z' />
                </svg>{" "}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
