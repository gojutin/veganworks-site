import React from "react";
import GaugeChart from "react-gauge-chart";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

type CommunitySolidarityChartProps = {
  lbs: number;
};

const CommunitySolidarityChart: React.FC<CommunitySolidarityChartProps> = ({
  lbs,
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      css={`
        background: black;
        padding: 80px 10px;
      `}
    >
      {inView && (
        <div
          css={`
            max-width: 500px;
            margin: 0 auto;
          `}
        >
          <GaugeChart
            id="pounds"
            nrOfLevels={20}
            percent={0.76}
            hideText
            colors={["red", "limegreen"]}
            needleColor="#dadada"
            needleBaseColor="#333"
            arcWidth={0.2}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            css={`
              color: lightskyblue;
              text-align: center;

              margin: 0;
              padding: 0;
              font-family: Alice;

              h3 {
                font-size: 50px;
                padding: 0;
                margin: 0;
              }

              span.lbs {
                font-size: 60px;
              }
              p {
                font-size: 20px;
                padding: 0;
                margin: 0;
              }
            `}
          >
            <h3>
              <span className="lbs">
                <CountUp end={lbs} />
              </span>{" "}
              POUNDS
            </h3>
            <p>of fresh groceries and counting!</p>
            <p style={{ color: "white", paddingTop: "20px", fontSize: "16px" }}>
              For every dollar donated, Community Solidarity is able to provide
              8 pounds of fresh groceries to a family in need.
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CommunitySolidarityChart;
