import React from "react";

import { Animation, AnimationContainer, Circle, LoadingContainer } from "./Loading.style";

export const Loading = ({ circles = [1, 2, 3, 4, 5, 6, 7, 8] }) => (
  <LoadingContainer column={false}>
    <AnimationContainer column>
      <h1>Loading please wait...</h1>
      <Animation>
        {circles.map((circle) => (
          <Circle item={circle} key={circle} />
        ))}
      </Animation>
    </AnimationContainer>
  </LoadingContainer>
)
