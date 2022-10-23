import React from 'react'
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Thank = () => {
  return (
    <>
         <Layout>
         
            <section className="section-box mt-70 mb-50">
                    <div className="container text-center">
                        <h3 className="">Your message has been submitted, We will be responding your message soon</h3>
                        {/* <p>If would you like to Talk to us Please Call <a href="tel:0460807872" className="btn btn-black shape-square ">0469 807 872</a></p> */}
                    </div>
                </section>  
                <section className="section-box mt-570">
                    <div className="container">
                        
                                    
                    <div className="text-center mb-50">
                                    <Link href="/">
                                    <a className="btn btn-black ">Back to Homepage</a>
                                    
                                    </Link>
                                </div>
                            </div>
                    
                    </section>
                   
                </Layout>
     </>
  )
}

export default Thank