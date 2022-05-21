import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const demo: NextPage = () => {

    return (
        <Fragment>
            <header>
                <img src="https://i.ibb.co/9cHQrnk/main-img.png" alt="main-image" className="main-image" />
                <aside>
                    <div className="menu-btn">
                        <span className="material-icons-outlined">
                            segment
                        </span>
                    </div>
                    <ul className="social">
                        <li>
                            <a href="#">Fb</a>
                        </li>
                        <li>
                            <a href="#">In</a>
                        </li>
                        <li>
                            <a href="#">Tw</a>
                        </li>
                    </ul>
                </aside>

                <main>
                    <nav>
                        <div className="container">
                            <div>
                                <span className="brand">
                                    <Link href="/">Aer</Link>
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <span className="link-active">
                                        <Link href="/">Home</Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/">Products</Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/">About</Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/">Locations</Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/">Cart</Link>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <Link href="/" passHref>
                                            <span className="material-icons-outlined">
                                                search
                                            </span>
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                            <div className="menu-btn">
                                <span className="material-icons-outlined">
                                    segment
                                </span>
                            </div>
                        </div>
                    </nav>
                    <div className="header-body">
                        <div className="container">
                            <div className="slider">
                                <div>
                                    <h1 className="slider-count">
                                        /01
                                    </h1>
                                    <div className="progress">
                                        <div></div>
                                    </div>
                                    <p className="slider-cntrl active">
                                        Work Collection
                                    </p>
                                    <p className="slider-cntrl">
                                        Active Collection
                                    </p>
                                    <p className="slider-cntrl">
                                        Travel Collection
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="title">
                                    Work Anywhere
                                </h1>
                                <p>
                                    Introducing the
                                    <span>
                                        Work Collection
                                    </span>.
                                    a line of minimalist bags designed for a
                                    <u>
                                        new generation specifically for the modern professional
                                    </u>
                                </p>
                                <ul className="pagination-mobile">
                                    <li className="pag-active"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div>
                                <div className="item">
                                    <h4>EVENTS</h4>
                                    <small>Pop-up @ Paul Messanga</small>
                                    <small>Ekoumdoum - Sat, August 12 / 5-8PM</small>
                                    <a href="#">Read More</a>
                                </div>
                                <div className="item item-centered">
                                    <small>Pop-up @ Paul Messanga</small>
                                    <small>TKC - Wed, June 15 / 5-8PM</small>
                                </div>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/b5TqCTN/img2.jpg" alt="img" className="thumbnail" />
                                <div className="item">
                                    <h4>News</h4>
                                    <small>
                                        A fresh take on our
                                        <span className="sub-title">
                                            Work collection
                                        </span>, just in time for spring. Available in black
                                    </small>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">Extra Link 1</a>
                        </li>
                        <li>
                            <a href="#">Extra Link 2</a>
                        </li>
                        <li>
                            <a href="#">Extra Link 3</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className="link-active">
                                <Link href="/">Home</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link href="/">Products</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link href="/">About</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link href="/">Locations</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link href="/">Cart</Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <Link href="/" passHref>
                                    <span className="material-icons-outlined">
                                        search
                                    </span>
                                </Link>
                            </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">Fb</a>
                        </li>
                        <li>
                            <a href="#">In</a>
                        </li>
                        <li>
                            <a href="#">Tw</a>
                        </li>
                    </ul>
                </div>
            </header>
        </Fragment>
    )

}

export default demo