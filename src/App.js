import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import ArrowRightIcon from "./assets/arrow_right.svg";
import WorkTemplate from "./WorkTemplate";

import LinkedInIcon from "./assets/linkedin.svg";
import InstagramIcon from "./assets/instagram.svg";
import TwitterIcon from "./assets/twitter.svg";
import MediumIcon from "./assets/medium.svg";
import "./elements.css";
import Correction from "./Correction";
import ImageSrc from "./assets/image.JPEG";

function App() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        <div className="App">
            <Nav />
            <div className="Content">
                <Hero />

                <section id="hello" className="grid2">
                    <div className="heading">
                        <h2 className="outlinedB">
                            Hello, <br />{" "}
                            {matches ? (
                                <Correction
                                    text="stranger."
                                    correct="or a soon to be friend?"
                                    color="white"
                                    style={{
                                        webkitTextStroke: "0",
                                        top: 94,
                                        right: -80,
                                        fontSize: 54,
                                    }}
                                />
                            ) : (
                                <Correction
                                    text="stranger."
                                    correct="or a soon to be friend?"
                                    color="#183150"
                                    style={{
                                        webkitTextStroke: "0",
                                        top: 50,
                                        right: -80,
                                        fontSize: 40,
                                    }}
                                />
                            )}
                        </h2>
                    </div>
                    <div className="subContent">
                        <p className="b28">
                            <Correction
                                correct={"cut this out"}
                                text={"Hey,"}
                                color={"white"}
                            />
                            it’s nice to see you here! I welcome you to the
                            humble abode of a passionate writer. I have been
                            offering my services online as a content writer for
                            about two years now and needless to say, it has been
                            one of the best decisions I’ve made in my life.
                            Words have and will always be a companion to me for
                            an extensively long time now, enough for me to find
                            my way around them. I know that with the
                            content-producing market being highly saturated,
                            it’s difficult to find your way around and believe
                            someone only for their words. Owing to this highly
                            understandable reason, you can check out my work and
                            see for yourself!
                        </p>
                    </div>
                </section>

                <section id="services" className="grid2">
                    <div className="heading">
                        <h2>Write</h2>
                        <h2 style={{ fontWeight: 400 }}>Wrote</h2>
                        <h2 style={{ fontWeight: 275 }}>Written</h2>
                        <p className="b20" style={{ marginTop: 80 }}>
                            "A word after a word after a word is power." <br />
                            --Margaret Atwood
                        </p>
                    </div>
                    <div className="subContent">
                        <p className="b28">
                            Although, I am a{" "}
                            <Correction
                                text={"firm"}
                                correct={"staunch"}
                                style={{ right: -40 }}
                            />
                            believer{" "}
                            {matches ? (
                                <Correction
                                    text="in"
                                    correct="of"
                                    style={{ right: 0 }}
                                />
                            ) : (
                                " of "
                            )}
                            the proverb; show don't tell, yet if there is
                            anything I can guarantee you as a content writer
                            offering my services in the market, it is that I
                            will be consistent with my deadlines and will try my
                            utmost to deliver an unmatchable piece of writing to
                            you, no matter what it takes. Having been on the
                            other side of the picture, I understand a client's
                            primary demands: top-notch quality content, catchy
                            headlines, authenticated facts and figures, engaging
                            to read, appropriate tone, and last (but of course
                            not least) originality. I will ensure that you find
                            all the mentioned features in the final content I
                            produce for you. So, rest assured
                            {matches ? (
                                <Correction
                                    text="that"
                                    correct="because"
                                    style={{ top: 24, right: -24 }}
                                />
                            ) : (
                                " because "
                            )}
                            your projects are in safe hands!
                        </p>
                    </div>
                </section>

                <section id="work" className="grid2">
                    <div className="heading">
                        <h2 className="outlinedW">
                            Stories, <br /> I've written.
                        </h2>
                    </div>
                    <div className="subContent">
                        <p className="b28">
                            Over the years, I have gained{" "}
                            {matches ? (
                                <Correction
                                    text={"proficiency"}
                                    correct={"competence"}
                                    color="#183150"
                                    style={{ right: 0 }}
                                />
                            ) : (
                                " competence "
                            )}
                            together with experience in article writing,
                            ghostwriting, and creative writing in almost all
                            niches including cryptocurrency, alternative health
                            & wellness, education, lifestyle, and psychology. As
                            a principal, I try and have an open-minded, creative
                            approach to my work so there is room for my personal
                            learning as well as increased satisfaction of my
                            clients.
                        </p>
                        <a href="#" className="allWork row">
                            <p className="btnText20">View all</p>
                            <img src={ArrowRightIcon} alt="arrow right" />
                        </a>
                    </div>
                    <WorkTemplate
                        dark={matches ? false : true}
                        URL="https://introvertdear.com/news/10-secrets-of-an-introvert-living-in-an-extroverted-world/"
                        bgImage={
                            "https://introvertdear.com/wp-content/uploads/2022/01/10-secrets-of-an-introvert-living-in-an-extroverted-world.jpg"
                        }
                        date={"Jan 11, 2022"}
                        title={
                            "10 Secrets of an Introvert Living in an Extroverted World"
                        }
                        tag={"Introverts"}
                        readTime={"5 min"}
                        source={"introvertdear.com"}
                    />

                    <WorkTemplate
                        dark={matches ? true : false}
                        URL="https://www.alustforlife.com/voice/personal-stories/how-writing-saved-my-life-a-journey"
                        bgImage={
                            "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        date={"Aug 17, 2022"}
                        title={"How writing saved my life, a journey"}
                        tag={"Life"}
                        readTime={"4 min"}
                        source={"alustforlife.com"}
                    />
                    <WorkTemplate
                        dark={true}
                        URL="https://introvertdear.com/news/a-guide-for-parents-things-you-should-tell-your-introverted-child-more-often/"
                        bgImage={
                            "https://introvertdear.com/wp-content/uploads/2022/07/a-guide-for-parents-things-you-should-tell-your-introverted-child-more-often.jpg"
                        }
                        date={"Jul 20, 2022"}
                        title={
                            "A Guide for Parents: Things You Should Tell Your Introverted Child More Often"
                        }
                        tag={"Introverts"}
                        readTime={"5 min"}
                        source={"introvertdear.com"}
                        fontsize={48}
                    />
                    <WorkTemplate
                        dark={false}
                        URL="https://www.msmsol.com/2021/10/apps-and-websites-that-will-help-you.html?m=1"
                        bgImage={
                            "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        date={"Oct 17, 2021"}
                        title={
                            "Apps and Websites That Will Help You Ace Your Studies"
                        }
                        tag={"Acadmeic"}
                        readTime={"5 min"}
                        source={"msmsol.com"}
                    />
                    <WorkTemplate
                        dark={matches ? false : true}
                        URL="https://asmairfan2002.medium.com/the-world-through-the-eyes-of-a-palestinian-boy-f7aabdf80c6d"
                        bgImage={
                            "https://miro.medium.com/max/828/0*PYE4J3M1MLI5mjLm"
                        }
                        date={"Jun 15, 2021"}
                        title={
                            "The World Through The Eyes Of A Palestinian Boy"
                        }
                        tag={"Palestine"}
                        readTime={"5 min"}
                        source={"medium.com"}
                    />
                    <WorkTemplate
                        dark={matches ? true : false}
                        URL="http://lumenbulletin.com/all-that-you-need-to-know-about-stellar-quest-learn/"
                        bgImage={
                            "http://lumenbulletin.com/wp-content/uploads/2022/06/All-That-You-Need-to-Know-About-Stellar-Quest-Learn-850x560.png"
                        }
                        date={"Jun 24, 2021"}
                        title={
                            "All That You Need to Know About Stellar Quest Learn"
                        }
                        tag={"Crypto"}
                        readTime={"5 min"}
                        source={"lumenbulletin.com"}
                    />
                </section>

                {/* <section id="clients">
                    <h2>A-Z of thoughtful clients</h2>
                    <p className="b20" style={{ marginTop: -40 }}>
                        Pellentesque imperdiet fringilla neque quis efficitur.
                        Etiam egestas iaculis nisi, sit amet pretium risus
                        imperdiet in.
                    </p>
                </section> */}

                <section id="about">
                    <h2 className="outlinedB">Me, My, Mine</h2>
                    <div className="grid2">
                        <div className="left">
                            <img src={ImageSrc} alt="" className="me" />
                            <div className="socials">
                                <a
                                    href="https://asmairfan2002.medium.com/"
                                    target={"_blank"}
                                >
                                    <img src={MediumIcon} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/asmairfan234/"
                                    target={"_blank"}
                                >
                                    <img src={InstagramIcon} alt="" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/asmairfan234"
                                    target={"_blank"}
                                >
                                    <img src={LinkedInIcon} alt="" />
                                </a>
                                <a
                                    href="https://twitter.com/irfanasma234"
                                    target={"_blank"}
                                >
                                    <img src={TwitterIcon} alt="" />
                                </a>
                            </div>
                        </div>
                        <p className="b28">
                            After all is said and done, let me introduce myself
                            for who I am and not what I do. When I was half an
                            hour old, my parents named me Asma (not asthma, but
                            yes I’m well aware of the humor you might get out of
                            it). If I was to describe myself in a sentence this
                            is what I would say; I am your typical protagonist
                            in a realistic fiction book. I am a psychology major
                            by day, I have a knack for binge-reading books from
                            genres I’d never heard of before, caffeine is human
                            fuel for me and most importantly, I live to write
                            and write to live. I wouldn’t say that I am at the
                            epitome of my journey as a writer but I have come
                            been successful in crossing out a number of things
                            off my checklist. I am currently working as a
                            content writer with Answerly (a stellar-based
                            platform), simultaneously showcasing my writing
                            skills through different websites. And additionally,
                            in order to keep my creative gears from drying up, I
                            run a literary blog.
                        </p>
                    </div>
                </section>

                <section id="contact" className="grid2">
                    <div className="heading">
                        <h2>
                            {matches ? (
                                <Correction
                                    text="Go on,"
                                    correct="Hurry UP!!"
                                    color="white"
                                    style={{
                                        fontSize: 56,
                                        top: -56,
                                        right: 46,
                                    }}
                                />
                            ) : (
                                " Go on, "
                            )}
                            leave a message!
                        </h2>
                        <p className="b20">
                            I would love to connect with you for your projects
                            or for constructive feedback on my work! So feel
                            free to leave me a text, and I will respond as soon
                            as possible.
                        </p>
                    </div>
                    <form action="" className="contactMe">
                        <div className="row" style={{ gap: 16 }}>
                            <input
                                type="text"
                                className="b24"
                                name="name"
                                id="nameInput"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                className="b24"
                                name="email"
                                id="emailInput"
                                placeholder="Email"
                            />
                        </div>
                        <input
                            type="text"
                            className="b24"
                            name="subject"
                            id="subjectInput"
                            placeholder="Subject"
                        />
                        <textarea
                            name="message"
                            className="b24"
                            id="messageInput"
                            rows="5"
                            placeholder="Message"
                        ></textarea>
                        <button type="submit" className="btnText24">
                            Send Message
                        </button>
                    </form>
                </section>

                <footer className="grid2">
                    <div className="heading">
                        <h4>Asma Irfan</h4>
                        <p className="b20">
                            irfanasma234@gmail.com <br /> +92 284 2374181 <br />
                            Islamabad, Pakistan
                        </p>
                        <div className="socials">
                            <a
                                href="https://asmairfan2002.medium.com/"
                                target={"_blank"}
                            >
                                <img src={MediumIcon} alt="" />
                            </a>
                            <a
                                href="https://www.instagram.com/asmairfan234/"
                                target={"_blank"}
                            >
                                <img src={InstagramIcon} alt="" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/asmairfan234"
                                target={"_blank"}
                            >
                                <img src={LinkedInIcon} alt="" />
                            </a>
                            <a
                                href="https://twitter.com/irfanasma234"
                                target={"_blank"}
                            >
                                <img src={TwitterIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="subscribe">
                        <h5>Join the list</h5>
                        <p className="b20" /* style={{ marginTop: 32 }} */>
                            Get exciting updates about the books I read every
                            month!
                        </p>
                        <form
                            action=""
                            className="subscribeFrom"
                            style={{ marginTop: 32 }}
                        >
                            <input
                                type="email"
                                name="emailSubscribe"
                                placeholder="Email"
                                style={{
                                    marginBottom: 16,
                                    backgroundColor: "#fff",
                                }}
                            />
                            <button type="submit" className="btnText24">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </footer>
                <div className="copyright">
                    © Copyright Asma Irfan. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default App;
