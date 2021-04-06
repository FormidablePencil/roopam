import "./index.scoped.sass";
import ArticleWrapper from "../article-wrapper";
import { Link } from "react-router-dom";
import { infoGmail } from "../../static-data/contacts";

const ContactsSectionFooter = () => {
  const addresses = [
    {
      title: "HEADQUARTERS",
      addressParts: [
        "McKinstry Innovation Center",
        "850 E. Spokane Falls Blvd, Suite 135",
        "Spokane, WA 99202",
        "509-492-4912",
      ],
    },
    {
      title: "IDAHO OFFICE",
      addressParts: [
        "910 Main Street, Suite 260",
        "Boise, Idaho 83702",
        "208.639.8828",
      ],
    },
    {
      title: "EAST COAST OFFICE",
      addressParts: ["Putnam, CT 06260", "508.868.6827"],
    },
  ];

  return (
    <ArticleWrapper isContactSection={true} title="Get in touch">
      <ul>
        {addresses.map((item) => (
          <li>
            <h4>{item.title}</h4>
            {item.addressParts.map((part) => (
              <li>
                <p>{part}</p>
              </li>
            ))}
          </li>
        ))}
      </ul>
      <p>{infoGmail}</p>
      <Link to="contact">© 2019 by Gestalt Diagnostics.</Link>
    </ArticleWrapper>
  );
};

export default ContactsSectionFooter;
