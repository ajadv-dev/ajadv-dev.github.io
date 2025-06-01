const ContactInfo = () => {

  const contentType = Object.freeze({
    TEXT: "text",
    EMAIL: "email",
    PHONE: "phone",
    URL: "url"
  });


  const contactDetails = [
    { title: "Address", type: contentType.TEXT, value: "Krakow, Poland" },
    { title: "Email", type: contentType.EMAIL, value: "abhijeetj26@gmail.com" },
    { title: "Phone", type: contentType.PHONE, value: "+48-507439452" },
    { title: "LinkedIn", type: contentType.URL, value: "https://www.linkedin.com/in/ajadv-dev", urlText: "in/ajadv-dev" },
    // { title: "Freelance", type: contentType.TEXT, value: "Available" }
  ]


  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163974.2434578727!2d19.839986476800387!3d50.047003804666204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8OzdywgUG9sYW5k!5e0!3m2!1sen!2sin!4v1736665296736!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              {contactDetails && contactDetails.map((item, index) => {
                return (
                  <li key={index}>
                    <strong>{item.title}: </strong>
                    {item.type === contentType.TEXT ? (
                      <span>{item.value}</span>
                    ) : item.type === contentType.EMAIL ? (
                      <a rel="noreferrer" href={`mailto:${item.value}`}>{item.value}</a>
                    ) : item.type === contentType.PHONE ? (
                      <a rel="noreferrer" href={`tel:${item.value}`}>{item.value}</a>
                    ) : item.type === contentType.URL ? (
                      <a target="_blank" rel="noreferrer" href={item.value}>{item.urlText}</a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
