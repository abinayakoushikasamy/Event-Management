// import React from 'react';
// import '../assets/welcome.css'; // Make sure to import your CSS file

// const Welcome = () => {
//   return (
//     <>
//       {/* Inspired by https://bert.house/en/*/}
//       <div className="welcome-center" style={{ backgroundImage: "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fthefairyprintsess.com%2Fwp-content%2Fuploads%2F2019%2F04%2FUnicorn-5x7-background-only-invitation-image.jpg&tbnid=2K1SiZRTl_WIgM&vet=12ahUKEwi1p4C5-IWFAxU3yDgGHQYQCesQMyhdegUIARCjAg..i&imgrefurl=https%3A%2F%2Fthefairyprintsess.com%2Funicorn-invitation-templates%2F&docid=gjXOUDirRFIxnM&w=1501&h=2101&q=invitation%20sample%20photos%20only%20desgin&ved=2ahUKEwi1p4C5-IWFAxU3yDgGHQYQCesQMyhdegUIARCjAg')" }}>
//         <h1>PARTYFY</h1>
//         <div className="btn">
//           <a href="/signup">User</a>
//         </div>
//         <div className="btn">
//           <a href="/admin">Admin</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;



import React from 'react';
import '../assets/welcome.css'; // Make sure to import your CSS file

const Welcome = () => {
  return (
    <>
      {/* Inspired by https://bert.house/en/*/}
      <div className="welcome-center" style={{ backgroundImage: "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fthefairyprintsess.com%2Fwp-content%2Fuploads%2F2019%2F04%2FUnicorn-5x7-background-only-invitation-image.jpg&tbnid=2K1SiZRTl_WIgM&vet=12ahUKEwi1p4C5-IWFAxU3yDgGHQYQCesQMyhdegUIARCjAg..i&imgrefurl=https%3A%2F%2Fthefairyprintsess.com%2Funicorn-invitation-templates%2F&docid=gjXOUDirRFIxnM&w=1501&h=2101&q=invitation%20sample%20photos%20only%20desgin&ved=2ahUKEwi1p4C5-IWFAxU3yDgGHQYQCesQMyhdegUIARCjAg')" }}>
        <h1>PARTYFY</h1>
        <div className="btn-container">
        <a href="/signup" className="btn">
                  User
                </a>
                <a href="/admin" className="btn">
                  Admin
                </a>
          {/* <a href="/signup" className="btn">User</a> */}
          {/* <a href="/admin" className="btn">Admin</a> */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
