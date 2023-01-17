function getWelcomeTemplate({email, registration, phone, site}) {
  const mytemplate = `
        <html>
            <body>
                <h1>코드캠프님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${email}</div>
                <div>나이: ${registration}</div>
                <div>학교: ${phone}</div>
                <div>가입일: ${site}</div>
            </body>
        </html>
    `;

  console.log(mytemplate);
}

const email = "bohyunk@hanmail.net";
const registration = 9703150000000;
const phone = "01027468733";
const site = "www.google.com";
getWelcomeTemplate({email, registration, phone, site});
