// import React, { FC, useState, useReducer } from 'react';
// import { Button } from 'ro-component-library/Button';
// import { Popover, PLACEMENT } from 'ro-component-library/Popover';
// import { Block } from 'ro-component-library/Block';
// import { Checkbox } from 'ro-component-library/CheckBox';
// import { SET_FEATURE, reducer, INITIAL_STATE } from '../ducks/features.duck';

// const FeaturesButton: FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//   const formattedState = {
//     Features: state
//   }
//   const { Features } = formattedState;
//   const setFeatureState = (name: string, enabled: boolean) => {
//     dispatch({
//       type: SET_FEATURE,
//       data: { name, enabled }
//     })
//   }
//   const togglePopover = () => {
//     setIsOpen(!isOpen);
//   }
//   const updateFeatures = () => {
//     localStorage.setItem('Features', JSON.stringify(Features));
//     window.location.reload();
//   }
//   return (
//     <Popover
//       isOpen={isOpen}
//       content={() => (
//         <Block
//           padding="scale900"
//           maxWidth="200px"
//         >
//           <h2>Enabled Features</h2>
//           <Checkbox checked={Features.Gauges} onChange={() => setFeatureState('Gauges', !Features.Gauges)}>Live Gauges</Checkbox>
//           <Checkbox checked={Features.Graphs} onChange={() => setFeatureState('Graphs', !Features.Graphs)}>Graphs</Checkbox>
//           <Checkbox checked={Features.Groups} onChange={() => setFeatureState('Groups', !Features.Groups)}>Groups</Checkbox>
//           <Button onClick={updateFeatures}>Update App</Button>
//         </Block>
//       )}
//       showArrow
//       placement={PLACEMENT.bottom}
//       onClick={togglePopover}
//     >
//       <Button
//         size="compact"
//       >
//         <span>Features</span>
//       </Button>
//     </Popover>
//   )
// }

// export { FeaturesButton };
