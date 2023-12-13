import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.scss";
import { myContext } from "./Context";

function Home() {
    const { src, setSrc } = useContext(myContext);
    const [scrollPosition, setScrollPosition] = useState(0); // 현재 스크롤 세로위치 들어감
    const mainSectionRef = useRef(null);
    const introSectionRef = useRef(null);

    const POYScroll = () => {
        // 현재 스크롤 세로위치를 state 에 저장하는 함수
        setScrollPosition(window.scrollY); // state 값에 스크롤 세로위치 저장
    };

    useEffect(() => {
        AOS.init();

        // 인터섹션옵서버 함수사용
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.addEventListener("scroll", POYScroll);
                    } else {
                        // window.removeEventListener("scroll", POYScroll);
                    }
                });
            }
            // { threshold: 0.5 } // Adjust threshold as needed
        );

        // 인터섹션 감지
        observer.observe(mainSectionRef.current);
        // observer.observe(introSectionRef.current);
        return () => {
            observer.observe(mainSectionRef.current);
            // observer.observe(introSectionRef.current);
        };
    }, []);

    // 작품 마우스 따라다니는 함수
    function thumbMove(e) {
        let pos = { y: e.clientY, x: e.clientX };

        const thumb = document.querySelector(".thumb");
        thumb.style = `left:${pos.x - 100}px; top:${
            pos.y - 100
        }px;display:block;`;
    }

    useEffect(() => {
        const list = document.querySelector(".list");
        const li = document.querySelectorAll(".list li");

        li.forEach((ele) => {
            ele.addEventListener("mousemove", thumbMove);
            ele.addEventListener("mouseover", thumbMove);
        });
        list.addEventListener("mouseleave", () => {
            document.querySelector(".thumb").style = "display:none";
        });

        const contactSection = document.querySelector(".contact");
        contactSection.addEventListener("mouseenter", () => {
            document.querySelector(".thumb").style.display = "none";
        });

        const twoBoxSections = document.querySelectorAll(".two_box");
        // 모든 'two_box' 섹션에 대해 이벤트 리스너를 추가합니다.
        twoBoxSections.forEach((box) => {
            box.addEventListener("mouseenter", (e) => {
                const thumb = document.querySelector(".thumb");
                thumb.parentElement.style.display = "none";
            });

            box.addEventListener("mouseleave", (e) => {
                const thumb = document.querySelector(".thumb");
                thumb.parentElement.style.display = "block";
            });
        });
    }, [setSrc]);

    const works = [
        {
            id: 1,
            name: "LionHill",
            desc: "기존 펜션 사이트 라이언힐을 리뉴얼화하여 만든 팀 프로젝트",
            img: "./facilites_logo.png",
            siteHref: "https://uwoooj.github.io/git-team01/",
            gitHref: "https://github.com/uwoooj/git-team01",
            vHref: "https://www.notion.so/LionHill-8aa57e2b84c9442b96a735b34592c9b6?pvs=4",
            tag: "#JavaScript #SASS #JQuery #KaKao Login, Map API",
        },

        {
            id: 2,
            name: "Selecto Coffee",
            desc: "프랜차이즈 커피 브랜드 셀렉토 적응형 모바일 ver",
            img: "./selec_logo.png",
            siteHref:
                "https://uwoooj.github.io/selectoCoffe/0725/main_index.html",
            gitHref: "https://github.com/uwoooj/selectoCoffe/tree/main/0725",
            vHref: "https://www.notion.so/Selecto-Coffee-297da16e6aa042a0a618280a2174cd05?pvs=4",
            tag: "#SCSS #Jqurey #javascript",
        },
        {
            id: 3,
            name: "Andar",
            desc: "스포츠 웨어 브랜드 안다르 적응형 모바일 ver  \n 간결한 레이아웃 구조화에 중점을 둔 클론코딩 ",
            img: "./andar.png",
            siteHref: "https://uwoooj.github.io/landing_page/02/index.html",
            gitHref: "https://github.com/uwoooj/landing_page/tree/main/02",
            vHref: "https://www.notion.so/9dee31efaae14b98bd6ffdf22076dd14",
            tag: "#SCSS #JQurey",
        },
        {
            id: 4,
            name: "Naver",
            desc: "대한민국 포털사이트 네이버 적응형 모바일 ver",
            img: "/naver.png",
            siteHref: "https://uwoooj.github.io/landing_page/03/index.html",
            gitHref: "https://github.com/uwoooj/landing_page/tree/main/03",
            vHref: "https://www.notion.so/031a9a209645413d87facc37f94fe343",
            tag: "#SCSS #JQurey",
        },
        {
            id: 5,
            name: "Kakao Mobility",
            desc: "카카오 모빌리티 반응형 PC ver",
            img: "./mobility.png",
            siteHref: "https://uwoooj.github.io/landing_page/05/index.html",
            gitHref: "https://github.com/uwoooj/landing_page/tree/main/05",
            vHref: "https://www.notion.so/b89d863b64cb4a2da29a5886a7036cc7",
            tag: "#SCSS #JQurey",
        },
        {
            id: 6,
            name: "서울시청",
            desc: "웹 접근성 품질 인증을 받은 서울시청 적응형 PC ver",
            img: "./seoul_logo.jpg",
            siteHref: "https://uwoooj.github.io/landing_page/06/index.html",
            gitHref: "https://github.com/uwoooj/landing_page/tree/main/06",
            vHref: "https://www.notion.so/a141ab392a6f470a9ec797f4890523f6",
            tag: "#SCSS #JQurey",
        },
    ];

    return (
        <div className="wrap">
            <section className="main" ref={mainSectionRef}>
                <strong
                    className="point"
                    style={{ transform: `translateX(-${scrollPosition}px)` }}
                >
                    HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
                    HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
                    HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
                    HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
                </strong>
                <div className="move-bg">
                    <div data-aos="zoom-in" className="txt">
                        <p>CREATIVE WEB</p>
                        <p> PUBLISHER</p>
                        <p className="eart">
                            P
                            <span>
                                <img src="./o.png"></img>
                            </span>
                            RTFOLIO@2023
                        </p>
                    </div>
                </div>
            </section>
            <section className="intro" ref={introSectionRef}>
                <strong
                    className="point"
                    style={{ transform: `translateX(-${scrollPosition}px)` }}
                >
                    INTRO &nbsp; INTRO &nbsp; INTRO &nbsp; INTRO &nbsp; INTRO
                    &nbsp;INTRO &nbsp;
                </strong>
                <p>
                    무너지지않는 끈기를 가진 퍼블리싱을 좋아하는 신입 웹퍼블리셔
                    김유진입니다.웹표준 및 웹접근성을 준수하며 'Semantic
                    Markup'을 할수 있으며, 최신 기술을 알기위해 끊임없이
                    공부중입니다.디자인의 의도에 맞는 CSS를 구현하며,
                    JavaScript, jQury 문법을 이해하고 있습니다. 개발자,
                    디자이너와 함께 일하며 원활한 협업을 위해 노력합니다. 현재
                    es6문법과 REACT.js, vue.js 등을 공부중입니다.
                </p>
            </section>
            <section className="project">
                <div className="move-bg">
                    <h2>PROJECT</h2>
                    <figure>
                        <img src={src} class="thumb"></img>
                    </figure>
                    {works.map((item) => (
                        <ul
                            onMouseOver={() => {
                                setSrc(item.img);
                            }}
                            className="list"
                        >
                            <li data-num={item.id}>
                                <a>
                                    <div className="one_box">
                                        <strong className="title">
                                            {item.name}
                                        </strong>
                                        <p>{item.desc}</p>
                                        <span>{item.tag}</span>
                                    </div>
                                    {/* <figure>
                                    <img src={item.img}></img>
                                    </figure> */}
                                    <div className="two_box">
                                        <a href={item.siteHref} target="_blank">
                                            site view
                                            <img
                                                src="./arrow.png"
                                                className="arow"
                                                alt=""
                                            ></img>
                                        </a>
                                        <div className="icon">
                                            <a
                                                href={item.gitHref}
                                                target="_blank"
                                            >
                                                <span className="link">
                                                    <img
                                                        src="./github.png"
                                                        alt=""
                                                        className="hub"
                                                    ></img>
                                                </span>
                                            </a>
                                            <a
                                                href={item.vHref}
                                                target="_blank"
                                            >
                                                <span className="link">
                                                    <img
                                                        src="./notion.png"
                                                        alt=""
                                                        className="log"
                                                    ></img>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            </section>
            <section className="contact">
                <div className="area">
                    <div
                        className="tit"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <a href="mailto:dbwls9610@navr.com">LET's talk</a>
                    </div>

                    <div className="cont_wrap">
                        <div className="card">
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>

                        <div className="link">
                            <p>CONTACT ME!</p>
                            <span className="wrap">
                                <a href="https://github.com/uwoooj">
                                    <img src="./github.png" alt=""></img>
                                </a>
                                <a href="https://velog.io/@uwooo_j">
                                    <img src="./velog.png" alt=""></img>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tag">
                    <div className="move">
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="move move2">
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;publisher &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; REACT.js
                            &nbsp;&nbsp;&nbsp;NEXT.JS &nbsp;&nbsp;&nbsp; MONGODB
                            &nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
