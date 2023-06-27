import React from "react";
import Card from "./component/Card";
import contacts from "./component/contacts";


function App() {
  return (
    <div className="app">
      <video className="video-background" autoPlay muted loop>
        <source src="https://cdn.pixabay.com/vimeo/320725678/robin-21723.mp4?width=640&hash=e2653048f7fa01750562f72fb299cc7e93e2970f" />
       
      </video>

      <div className="content">
        <h1 className="heading">My Contacts</h1>
        {contacts.map((contactinfo) => (
          <Card
            key={contactinfo.id}
            name={contactinfo.name}
            img={contactinfo.imgURL}
            tel={contactinfo.phone}
            email={contactinfo.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }