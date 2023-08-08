import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "../../components/Header";
import vid from "../../assets/Dunes.mp4";
import "../../styles/style.css";
const WeightMatters = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const secOne = () => {
    return (
      <section id="guide">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <h2 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
            Hello - Hotshot
          </h2>
          <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
            A Hotshot’s Guide to Hotshotting
          </h1>
          <p data-aos="fade-up" data-aos-delay={300} data-aos-once="true">
            To start, what is hotshot trucking? Hotshots are an alternative to
            regular trucking. We don't drive semi trucks although we follow all
            the same rules and regulations, as well as most of us having
            commercial driver's licenses and having driven semis in the past. We
            use pickup trucks to transport freight, generally expediting
            shipping. Another advantage to hotshotting is expense son pickups
            are generally much less than that of a semi, and much easier to do
            yourself
          </p>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="box">
                <h4
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  Hello - Hotshot
                </h4>
                <ul
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-once="true"
                >
                  <li className="mt-2 ml-3">
                    <Link to="/HHGuide">Truck, Trailer, and Tools</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="/CdlNon">CDL v. non-CDL</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="#">Weight Matters</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="/Usdot">US DOT + FMCSA</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="/Insurance">Insurance</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="/ELD">Electronic Logging Devices</Link>
                  </li>
                  <li className="mt-2 ml-3">
                    <Link to="/Roadside">Roadside Inspections</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-column align-items-start" id="TTT">
                {/* Video */}
                <ReactPlayer
                  url={vid}
                  playing={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  onReady={onLoadedData}
                  width="100%"
                />
                <h3
                  className="mt-6"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                  data-aos-once="true"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Weight Matters
                </h3>
                <h6
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-once="true"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  <>
                    Let's start with all of you you have a truck and want to put
                    it to work part time, or want to try hotshotting as a side
                    gig. A lot of you come here to ask about a weekend, single
                    week, or a full-time gig with a half ton pickup (f150/1500).
                    Don't. Insurance and equipment costs are $1000-$2500 a
                    month. This isn't a part time gig. Gas trucks can't do it,
                    and you won't make anything if you aren't using your
                    insurance full-time. Throw in your truck and trailer
                    payments, you are looking at $3000-$5000 a month in overhead
                    without calculating fuel, tires, oil changes, fuel filters,
                    wear and tear, etc. What's also important to note, 95% of
                    shippers/receivers are closedon weekends. Really hard to
                    part-time on weekends when you can't load/unload.
                    <br />
                    <br />
                    A note about gas trucks. The pumps are slower so you spend
                    more time filling up, they are notes spacious so getting a
                    trailer in and out isn't always possible like on the
                    truckers side, and auxiliary tanks can't legally hold
                    gasoline because of how combustible it is. On top of this,
                    thefrequency of oil changes required on gassers means you'd
                    be stopping every week or two for achange somewhere. Finally
                    the most important reason you don't use a gas truck is the
                    miles. Ihave friends who do 200k+ miles a year, this is the
                    lifespan of a gas engine usually. I havefriends with well
                    over 1million miles on their diesel pickups, this is
                    possible with diesel becausethe fuel itself is lubricating.
                    You don't want to be buying a new pickup every single year,
                    youwon't make any profit at all.
                    <br />
                    <br />
                    Now you need tools. What tools do you need? This really
                    depends on what you're hauling.Generally it's smart to have
                    wrenches, sockets, pliers, maybe an impact, a jumper pack
                    for yourtruck, jumper cables, recovery strap, maybe a winch,
                    chain binders, chains, tarps, ratchetstraps, etc. More
                    important than any of this though, you are legally required
                    to carry a fireextinguisher, spare fuses, and three safety
                    triangles. Without these few things, you will be out oflegal
                    compliance.
                    <br />
                    <br />
                    Now when figuring your tools out, you need a toolbox. You
                    also need an auxiliary fuel tank.These can be combined, or
                    separate depending on your setup. Figure out what works for
                    you,but I recommend at least a 90gallon auxiliary tank.
                    115-120 if possible, but legally 120 is thebiggest you can
                    have.
                  </>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {secOne()}
    </>
  );
};

export default WeightMatters;
