import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import { Container } from './styles';

const ModelSection = ({ modelName, overlayNode, children, ...props }) => {



  const { registerModel } = useModel(modelName)

  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef
      })
    }
  }, [])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
