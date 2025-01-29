import { FC } from "react";
import {
  Html,
  Img,
  Text,
  Container,
  Body,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface ContactUsEmailProps {
  Name: string;
  EmailAddress: string;
  Message: string;
}
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};
const boxInfos = {
  padding: "20px 40px",
};

const website = process.env.CONTACT__WEBSITE_URL;

const ContactUsEmail: FC<Readonly<ContactUsEmailProps>> = (props) => {
  return (
    <Html lang="en" dir="ltr">
      <Body style={main}>
        <Container style={container}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
            }}
          >
            <Img
              src="https://myfmsbucket.s3.eu-north-1.amazonaws.com/blue_lc.png"
              alt="LC Logo"
              width="120"
              height="60"
              style={{ margin: "0 auto", display: "block" }}
            />
          </div>

          <div
            style={{ display: "grid", placeItems: "center", padding: "20px" }}
          >
            <Img
              src="https://myfmsbucket.s3.eu-north-1.amazonaws.com/saelus_templates/driver_invite.png"
              alt="asd"
              width="300"
              height="300"
              style={{ margin: "0 auto", display: "block" }}
            />

            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <div>
                    <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                      New Query is Raised by
                    </Text>
                  </div>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Name: </b>
                    {props.Name}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email Address: </b>
                    {props.EmailAddress}
                  </Text>

                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Message: </b>
                    {props.Message}
                  </Text>
                </Column>
              </Row>
            </Section>

            <div
              style={{
                marginTop: "5px",
                borderTop: "1px solid #ccc",
                paddingTop: "5px",
                textAlign: "center",
              }}
            >
              <Text
                style={{ fontSize: "14px", color: "#666", textAlign: "center" }}
              >
                Thank you for reaching out to us! We appreciate your interest
                and will get back to you as soon as possible. For more updates,
                follow us on social media. Have a great day!
              </Text>
              <Text
                style={{ fontSize: "14px", color: "#666", textAlign: "center" }}
              >
                CopyRight@ 2023 <a href={website}>{website}</a>
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                margin: "0 auto",
              }}
            >
              <a
                href="https://www.linkedin.com/company/labour-connect-inc "
                style={{
                  display: "block",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                }}
              >
                <img
                  src="https://myfmsbucket.s3.eu-north-1.amazonaws.com/saelus_templates/Linkedin_Icon_op6kiq.png"
                  style={{
                    display: "block",
                    width: "40px",
                    height: "40px",
                    margin: "5px",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/labourconnect_?igsh=MTRvemZxYmFmZ21tcA=="
                style={{
                  display: "block",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                }}
              >
                <img
                  src="https://myfmsbucket.s3.eu-north-1.amazonaws.com/saelus_templates/Instagram_Icon_z6nzbz.png"
                  style={{
                    display: "block",
                    width: "40px",
                    height: "40px",
                    margin: "5px",
                  }}
                />
              </a>
              <a
                href="https://www.facebook.com/share/L5jEyMxtGpJVVcYR/?mibextid=qi2Omg"
                style={{
                  display: "block",
                  width: "40px",
                  height: "40px",
                  margin: "5px",
                }}
              >
                <img
                  src="https://myfmsbucket.s3.eu-north-1.amazonaws.com/saelus_templates/Facebook_Icon_fpdv2s.png"
                  style={{
                    display: "block",
                    width: "40px",
                    height: "40px",
                    margin: "5px",
                  }}
                />
              </a>
            </div>
          </div>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsEmail;