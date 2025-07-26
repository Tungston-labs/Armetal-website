import React, { useEffect, useRef } from "react";
import {
  SliderWrapper,
  SectionTitle,
  RowWrapper,
  ScrollContainer,
  FeatureCard,
  TransparentCard
} from "./Features.Styles";

const features = [
  "Speed Optimization",
  "Secure Data",
  "Real-time Sync",
  "Intuitive UX",
  "24/7 Support",
  "Modular Design",
  "Scalable",
  "Cross-platform",
  "Analytics",
  "Cloud Ready"
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
    <SliderWrapper>
      <SectionTitle>Key Features</SectionTitle>

      {/* Top Scrolling Row */}
      <RowWrapper>
        <ScrollContainer ref={topRef}>
          {features.map((feature, index) => (
            <FeatureCard key={`top-${index}`}>{feature}</FeatureCard>
          ))}
        </ScrollContainer>
        <TransparentCard position="left">Top Hover</TransparentCard>
      </RowWrapper>

      {/* Bottom Scrolling Row */}
      <RowWrapper>
        <ScrollContainer ref={bottomRef}>
          {features.map((feature, index) => (
            <FeatureCard key={`bottom-${index}`}>{feature}</FeatureCard>
          ))}
        </ScrollContainer>
        <TransparentCard position="right">Bottom Hover</TransparentCard>
      </RowWrapper>
    </SliderWrapper>
  );
};

export default AutoScrollSlider;
