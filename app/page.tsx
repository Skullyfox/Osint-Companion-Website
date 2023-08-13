
"use client"

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <main className="w-screen">
      <header className="flex flex-col justify-center items-center min-h-screen">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h1 className="text-6xl font-bold text-center text-indigo-50">
            OSINT COMPANION
          </h1>
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <h2 className="text-2xl font-bold text-center text-indigo-500">
            All-in-One OSINT tool
          </h2>
        </motion.div>
      </header>
      <section className='flex items-center w-screen translate-y-[-10rem] px-20 gap-20'>
        <motion.div
            className="box w-4/12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
          <ul className=" flex flex-col gap-20 items-start">
            <li className='flex flex-col gap-5 items-start'>
              <div className='flex items-center text-2xl gap-5'>
                <FontAwesomeIcon icon={faGaugeHigh} />
                <h3>Fast</h3>
              </div>
              <p>Our software is designed to be fast and responsive, even on slow connections. This allows you to work more efficiently and be more productive.</p>
            </li>
            <li className='flex flex-col gap-5 items-start'>
              <div className='flex items-center text-2xl gap-5'>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                <h3>Easy to use</h3>
              </div>
              <p>Our software is easy to use, even for people who are not used to technology. The navigation is simple and intuitive, and the commands are easy to understand.</p>
            </li>
            <li className='flex flex-col gap-5 items-start'>
              <div className='flex items-center text-2xl gap-5'>
                <FontAwesomeIcon icon={faGithub} />
                <h3>Open Source</h3>
              </div>
              <p>Our software is open source, which means that it is free and you can modify and redistribute it as you wish. This gives you complete control over your software and allows you to tailor it to your specific needs.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="box w-8/12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <img src="/Screenshot1.png" alt='Osint Companion Screenshot'
            className='' />
        </motion.div>
      </section>
    </main>
  )
}
