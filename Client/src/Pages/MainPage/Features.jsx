import React, { useEffect, useRef } from "react";
import {
  SliderWrapper,
  SectionTitle,
  RowWrapper,
  ScrollContainer,
  FeatureCard, CardDescription,
  TransparentCard, CardImage, CardTitle
} from "./Features.Styles";
import cards from "../../assets/cards.svg"
import card1 from "../../assets/card1.svg"
import card2 from "../../assets/card2.svg"
import card10 from "../../assets/card10.svg"
import card11 from "../../assets/card11.svg"
import card5 from "../../assets/card5.svg"
import card12 from "../../assets/card12.svg"
import card7 from "../../assets/card7.svg"
import card8 from "../../assets/card8.svg"
import card9 from "../../assets/card9.svg"
import Trust from "./Trust"
const features = [
  {
    title: "Flexible Subscription Plans",
    description: "Choose a plan that fits your team size and feature needs. Pay only for what you use, with pricing designed to scale with your business.",
    image: cards
  },
  {
    title: "HR Reports & Analytics",
    description: "Generate reports to understand employee performance, attendance trends, and more. Use these insights to make smarter HR decisions. ",
    image: card1
  },
  {
    title: "Fast Onboarding:",
    description: "Choose a plan that fits your team size and feature needs. Pay only for what you use, with pricing designed to scale with your business. ",
    image: card2
  },
  {
    title: "Centralized Employee Database ",
    description: "Keep all employee details like name, contact info, job history, and important documents stored safely in one place. It helps HR teams find accurate information fast.",
    image: card10
  },
  {
    title: "Payroll Integration",
    description: "Rekory connects with your existing payroll system, ensuring salaries are paid correctly and on time, with fewer mistakes and no extra manual work.",
    image: card12
  },
  {
    title: " Performance Management",
    description: "Set goals for employees, track their progress, and give feedback regularly. You can also run performance reviews to help employees grow and perform better.",
    image: card5
  },
  {
    title: "Automated User Setup",
    description: "Choose a plan that fits your team size and feature needs. Pay only for what you use, with pricing designed to scale with your business.",
    image: card11
  },
  {
    title: "Recruitment & Applicant Tracking  ",
    description: "Post job openings, review applications, schedule interviews, and send offer letters—everything needed to hire faster, all inside one tool.",
    image: card7
  },
  {
    title: " Training & Development",
    description: "Keep all employee details like name, contact info, job history, and important documents stored safely in one place. It helps HR teams find accurate information fast.  ",
    image: card8
  },
  {
    title: "Cloud Ready",
    description: "Easily manage employee salaries, taxes, and payslips.",
    image: card9
  },
];


const AutoScrollSlider = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const scrollTop = setInterval(() => {
      if (topRef.current) {
        topRef.current.scrollLeft += 1;
        if (
          topRef.current.scrollLeft + topRef.current.clientWidth >=
          topRef.current.scrollWidth
        ) {
          topRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    const scrollBottom = setInterval(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollLeft -= 1;
        if (
          bottomRef.current.scrollLeft <= 0
        ) {
          bottomRef.current.scrollLeft =
            bottomRef.current.scrollWidth - bottomRef.current.clientWidth;
        }
      }
    }, 20);

    return () => {
      clearInterval(scrollTop);
      clearInterval(scrollBottom);
    };
  }, []);


  return (
    <>
      <SliderWrapper>
        <SectionTitle>Key Features <hr></hr></SectionTitle>

        {/* Top Scrolling Row */}
        <RowWrapper>
          <ScrollContainer ref={topRef}>
            {features.map((feature, index) => (
              <FeatureCard key={`top-${index}`}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <CardImage src={feature.image} alt={feature.title} />

              </FeatureCard>
            ))}
          </ScrollContainer>
          <TransparentCard position="left">Power-Packed HR Tools, All in One Place
            Say goodbye to scattered systems—Rekory brings together everything you need to manage your workforce efficiently: onboarding, attendance, payroll, leaves, and more.</TransparentCard>
        </RowWrapper>

        {/* Bottom Scrolling Row */}
        <RowWrapper>
          <ScrollContainer ref={bottomRef}>
            {features.map((feature, index) => (
              <FeatureCard key={`bottom-${index}`}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <CardImage src={feature.image} alt={feature.title} />

              </FeatureCard>
            ))}
          </ScrollContainer>
          <TransparentCard position="right" >Smart Solutions for Ambitious Teams
            Built for scale, Rekory empowers growing businesses with intelligent automation, smooth workflows, and enterprise-grade control at your fingertips.</TransparentCard>
        </RowWrapper>
      </SliderWrapper>
<Trust />
    </>
  );
};

export default AutoScrollSlider;
