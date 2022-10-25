
import Layout from "../components/layout/Layout";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from "next/router";






function Contact() {
    const form = useRef();
    const router = useRouter();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_h068w6m', 'template_sl9gh5i', form.current, '7SnI2ihiJF5t3LjUY')
        .then((result) => {
            console.log(result.text);
            router.push('/thank-you')
        }, (error) => {
            console.log(error.text);
        });

    };

  
    return (
        <>
            <Layout>
                {/* <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                            <h3 className="text-heading-6 color-gray-500">Zaer Support Services: your friend in need.</h3>
                        </div>
                    </div>
                </section> */}
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Disability support <br className="d-lg-block d-none" />
                                We are here for you.</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Ending your search for NDIS care
                                    <br className="d-lg-block d-none" />Enabling Independence.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">ZAER Support Services</h4>
                                    <p className="text-body-text color-gray-600">Tarneit<br />Victoria</p>
                                    <p className="text-body-text color-gray-600" >Tel: 0420 535 983</p>
                                    <p className="text-body-text color-gray-600">zaer.services@gmail.com</p>
                                </div>
                                <form  ref={form} onSubmit={sendEmail}>
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group"><input className="form-control"  placeholder="Enter your name" name="name" required /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group"><input className="form-control"  placeholder="Company (optional)" name="company"  /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group"><input className="form-control"  placeholder="Your email"  name="email" required /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group"><input className="form-control"  placeholder="Phone number" name="phone" /></div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group"><textarea className="form-control" placeholder="Enter your message"  name="message" required /></div>
                                            </div>
                                            <div className="col-lg-12 mt-15"><button className="btn btn-black  mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                
        <div className="section-box mt-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-1 col-12"></div>
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                    <div className="text-center mb-20"><span className="tag-1 bg-green-900">How does it works ?</span></div>
                    <h2 className="text-display-3 color-gray-900 mb-60">Be your own hero <br className="d-lg-block d-none" />Live your life without limitations</h2>
                </div>
                <div className="col-lg-1 col-sm-1 col-12"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-12 col-12"></div>
                <div className="col-lg-10 col-sm-12 col-12">
                    <ul className="list-steps">
                    <li className="icon-asset1">
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/support.png" /></div>
                        <h3 className="text-heading-5 mb-10">Get In Touch With Us</h3>
                        
                        </div>
                    </li>
                    <li className="icon-asset2">
                        <div className="text-center block-step hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/staff.png" /></div>
                        <h3 className="text-heading-5 mb-10">Meet Our Friendly Staff</h3>
                       
                        </div>
                    </li>
                    <li className="icon-asset3">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/goals.png" /></div>
                        <h3 className="text-heading-5 mb-10">Determine The Goals</h3>
                        
                        </div>
                    </li>
                    <li className="">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/enjoy.png" /></div>
                        <h3 className="text-heading-5 mb-10">Enjoy the life you deserve</h3>
                        
                        </div>
                    </li>
                    {/* <li>
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/ndis2.png" /></div>
                        <h3 className="text-heading-5 mb-10">Develop a NDIS Care Plan</h3>
                       
                        </div>
                    </li> */}
                    </ul>
                </div>
              
                </div>
            </div>
        </div>


                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Zaer Support Services is a disability support services provider  <br className="d-lg-block d-none" />based in  Tarneit, Victoria..</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Ofice</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Studio</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Factory</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">205 North Michigan Avenue, Suite 810<br />Chicago, 60601, USA<br />Phone: (123) 456-7890<br />Email: contact@Evara.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
                

            </Layout>

        </>
    )
}

export default Contact;
