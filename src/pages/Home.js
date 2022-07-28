import React from "react";
import Header from "../components/Header";
import {Button} from "@mui/material";
import NftSlider from "../components/NftSlider";
import iTwitter from "../icons/twitter.png"
import iDiscord from "../icons/discord.png"
import iYoutube from "../icons/youtube.png"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {


        let btns = [{text:'buy otherdeed', link: ''}, {text: 'connect', link: ''}]
        return (
            <div className="center">
                <div className="bg-space-1">
                    <Header/>
                    <div className="wrapper-main">
                        <div className="main-text">
                            <p className="f-1"><span>connect wallet and take part in our nft giveaway</span></p>
                            <p className="f-2"><span>see you in the otherside</span></p>
                            <div className="wrapper-btn-type-buy">
                                <Button className="color-blue btn-type-buy mr-35" variant="contained">buy otherdeed</Button>
                                <Button className="color-blue btn-type-buy" variant="contained">claim</Button>
                                {/*{btns.map(btn => <a className="btn-type-buy" href={btn.link}><span>{btn.text}</span></a>)}*/}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sl">
                    <div className="slider-gradient-top col-12"></div>
                    <NftSlider/>
                </div>

                <div className="bg-space-2">
                    <div className="bg-space-2-gradient-top col-12"></div>
                    <div>
                        <p className="bg-space-2__wrapper-text__h">
                            <span className="big">ENTER</span>
                            <span className="small">the</span>
                            <span className="big">OTHERSIDE</span></p>
                        <div className="bg-space-2__wrapper-text">

                            <div className="bg-space-2__wrapper-text__text">
                                <p className="text-1">You got here just in time.</p>
                                <p className="text-2">
                                    Otherside is a gamified, interoperable metaverse currently under development.
                                    The game blends mechanics from massively multiplayer online role playing games
                                    (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players
                                    own the world, your NFTs can become playable characters, and thousands can play
                                    together in real time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-space-2-gradient-bottom col-12"></div>
                </div>

                <div className="bg-space-3 col-12">
                    <div className="text-3">
                        <div className="left-text">
                            <p className="text-3_h" style={{marginTop: 0}}>First to the future</p>
                            <div className="text-3__content">
                                <p>Our mission is to make Otherside immersive, interactive, and collaborative in a way
                                    that’s never been done before. So in the spirit of Dungeons and Dragons,
                                    Otherside will be an always-evolving experience co-created with its players.
                                    With an Otherdeed, you can participate in prototype builds, demos, and tests that
                                    shape the final game design and experience.</p>

                                <p>Building the future is a team effort — and we want you to be part of our team.</p>
                            </div>
                        </div>
                        <div className="right-text">
                            <p className="text-3_h" style={{marginTop: 0}}>YOUR OTHERDEED AWAITS</p>
                            <div className="text-3__content">
                                <p>Build on the Otherside, collect resources, create and play on it, and make yourself at home. Otherside will be what you make it, and your Otherdeed will be your key.</p>
                                <p>Your Otherdeed enables you to claim a plot of land when Otherside launches.</p>
                                <p>There will be a total of 200,000 Otherdeeds. The first 100,000 Otherdeeds are available on April 30, 2022. The second 100,000 Otherdeeds will be exclusively rewarded to Voyagers who hold Otherdeeds and contribute to the development of Otherside.</p>
                                <p>For those with Bored Apes or Mutants, your Otherdeed awaits your claim. For all other adventurers, Otherdeeds will be available for sale with ApeCoin.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-space-4 col-md-12 col-lg-12 col-xl-12">
                    <div className="container">
                        <div className="wrapper-icons row justify-content-center">
                            <div className="row mt-5 justify-content-center col-md-6 col-lg-6 col-xl-6 col-6">
                                <div className="icon border-1">
                                    <div className="row justify-content-center">
                                        <div className="tech-1"></div>
                                    </div>

                                    <div className="feature-wrapper">
                                        <span className="feature">
                                            10,000+ players
                                        </span>
                                    </div>
                                    <div className="feature-wrapper">
                                        <span className="feature-text">
                                            10,000+ people interacting simultaneously in a single location
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 justify-content-center col-md-6 col-lg-6 col-xl-6 col-6">
                                <div className="icon border-2">
                                    <div className="row justify-content-center">
                                        <div className="tech-2"></div>
                                    </div>

                                    <div className="feature-wrapper">
                                        <span className="feature">
                                            Speak up together
                                        </span>
                                    </div>
                                    <div className="feature-wrapper">
                                        <span className="feature-text">
                                            In-world natural voice chat for thousands (making it easier to hear those you are facing)
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-5 justify-content-center col-md-6 col-lg-6 col-xl-6 col-6">
                                <div className="icon border-3">
                                    <div className="row justify-content-center">
                                        <div className="tech-3"></div>
                                    </div>

                                    <div className="feature-wrapper">
                                        <span className="feature">
                                            Physics x AI
                                        </span>
                                    </div>
                                    <div className="feature-wrapper">
                                        <span className="feature-text">
                                            Millions of complex, interactive entities in a single world supported with physics and AI
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-5 justify-content-center col-md-6 col-lg-6 col-xl-6 col-6">
                                <div className="icon border-4">
                                    <div className="row justify-content-center">
                                        <div className="tech-4"></div>
                                    </div>
                                    <div className="feature-wrapper">
                                        <span className="feature">
                                            Next level social
                                        </span>
                                    </div>
                                    <div className="feature-wrapper">
                                        <span className="feature-text">
                                            Incredible live interaction between players
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black-footer">
                    <div className="container ">
                        <div className="wrapper-info">
                            <span className="labs">© 2022 Yuga Labs Inc.</span>

                            <div className="info">
                                <a href="src/pages/Home">faqs</a>
                                <a href="src/pages/Home">Terms & conditions</a>
                                <a href="src/pages/Home">Privacy</a>
                                <a href="src/pages/Home">License</a>
                                <a href="src/pages/Home">NFt Purchase Agreement</a>
                            </div>

                            <div className="social">
                                <a target="_blank" href="https://twitter.com/OthersideMeta"><img src={iTwitter}/></a>
                                <a target="_blank" href="https://discord.com/invite/the-otherside"><img src={iDiscord}/></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><img src={iYoutube}/></a>
                            </div>
                        </div>
                        <div className="bg-space-5 col-12"></div>
                    </div>
                </div>
            </div>

        )
    }
}