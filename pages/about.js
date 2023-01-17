import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About () {
    console.log(data);
    const [information, setInformation] = useState([...data])

    return(

        <div className={styles.main}>

        <div className={styles.heading}> About page </div>

        <div className={styles.flex}>
        <div> <h2>Employees Number: </h2>
         {
          information && information.map((info, index) => {
            
            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <Card key={index}  employeeInfo={info.employeeNumber} colour="pink" font="30px" />
          )
            
          })
         }

        </div>

        <div> <h2>Employees Name: </h2>
         {
          information && information.map((info, index) => {
            
            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <Card key={index} employeeInfo={info.firstName} colour="none" font="30px" />
          )
            
          })
         }

        </div>

        <div> <h2>Department: </h2>
         {
          information && information.map((info, index) => {
            
            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <Card key={index} employeeInfo={info.department} colour="none" font="30px" />
          )
            
          })
         }

        </div>

        <div> <h2>Work Year: </h2>
         {
          information && information.map((info, index) => {
            
            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <Card key={index} employeeInfo={info.workYear} colour="none" font="30px" />
          )
            
          })
         }

        </div>

        <div> <h2>Degree: </h2>
         {
          information && information.map((info, index) => {
            
            return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              <Card key={index} employeeInfo={info.degree} colour="none" font="30px" />
          )
            
          })
         }

        </div>
        </div>

        </div>
)
}

