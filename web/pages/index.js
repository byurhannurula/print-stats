import React from 'react';
import axios from 'axios';

const Index = ({ result }) => {
  const { os, users, browser, country, language, pageViews } = result;

  return (
    <div>
      <h3>
        <span>
          {pageViews.header}: {pageViews.value[0].values}
        </span>
      </h3>
      <h3>
        <span>
          {users.header}: {users.value[0].values}
        </span>
      </h3>
      <h3>
        <span>
          {country.header}: {country.value[0]}
        </span>
      </h3>
      <h3>
        <span>
          {browser.header}: {browser.value[0]}
        </span>
      </h3>
      <h3>
        <span>
          {os.header}: {os.value[0]}
        </span>
      </h3>
      <h3>
        <span>
          {language.header}: {language.value[0]}
        </span>
      </h3>

      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
};

Index.getInitialProps = async () => {
  const metric = 'os, users, browser, country, language, pageViews';
  let result;

  await axios
    .get(`http://localhost:4000/api?metric=${metric}`)
    .then(({ data }) => {
      result = data;
    })
    .catch(err => console.log(err));

  return { result };
};

export default Index;
