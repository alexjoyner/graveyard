// import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import {
//   Modal,
//   ModalBody,
// } from 'ro-component-library/Modal';
// import { ModalStateContainer } from '../../utils/ModalStateContainer';
// import { TutorialButton } from '../../molecules/TutorialButton';
// import { useWindowSize } from '../../effects/useWindowSize';


// const TTutorialModal = () => {
//   const { width } = useWindowSize();
//   const [hasViewedTutorial, setHasViewedTutorial] = useState(Boolean(localStorage.getItem('helpViewedOnce')));
//   return (
//     <ModalStateContainer>
//       {({ open, close, isOpen }) => (
//         <>
//           <TutorialButton
//             animate={!hasViewedTutorial}
//             onClick={() => {
//               open();
//               localStorage.setItem('helpViewedOnce', true);
//               setHasViewedTutorial(true);
//             }}
//           />
//           <Modal
//             size="full"
//             onClose={close}
//             isOpen={isOpen}
//           >
//             <ModalBody
//               style={{
//                 marginTop: '40px',
//                 height: '90%',
//                 textAlign: 'center',
//               }}
//             >
//               {(width > 860) ? (
//                 <iframe
//                   style={{
//                     maxWidth: '864px',
//                     width: '100%',
//                     height: '100%',
//                     marginLeft: '50%',
//                     transform: 'translateX(-50%)',
//                     border: 'none',
//                   }}
//                   title="demo-tutorial"
//                   src="https://docs.google.com/document/d/e/2PACX-1vRrfIXZySpwRtr-e7AfZPAMng4A96OctVJ6kwklPCW9fASHgWYMQDfUVOKzDDlAHE_8nntiUxGhH-Vk/pub?embedded=true"
//                 />
//               ) : <h1>To view a tutorial, please visit the web site on a desktop</h1>}
//             </ModalBody>
//           </Modal>
//         </>
//       )}
//     </ModalStateContainer>
//   );
// };
// TTutorialModal.propTypes = {
//   // user: PropTypes.shape({
//   //   user: PropTypes.shape({
//   //     id: PropTypes.number,
//   //     username: PropTypes.string,
//   //   }),
//   //   token: PropTypes.string,
//   // }).isRequired,
// };

// // const mapStateToProps = state => ({
// //   user: state.UserReducer,
// // });

// const TutorialModal = connect()(TTutorialModal);

// export { TutorialModal };
