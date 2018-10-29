import React, { Component } from 'react';
import { Header , CenteredContent } from 'ro-component-library';
import { Feed } from '../../organisms/Feed';
import { data } from './feedData';

const LogoStyle = {
  marginLeft: '16px',
}
const CelebStoreBanner = `<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=amzn_celebrity_str&banner=1TG9263JSPBRM7F1X802&f=ifr&linkID=e8f3351a802cd12feed712fad80c489b&t=aej2007-20&tracking_id=aej2007-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>`;

const Banners = () => (
  <div>
    <div dangerouslySetInnerHTML={{__html: CelebStoreBanner}} />
  </div>
)


class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Header color="primaryLight">
          <h1 style={LogoStyle}>Closet Pioneer</h1>
        </Header>
        <CenteredContent>
          <Banners />
          <Feed data={data} />
        </CenteredContent>
        <p>This is an Amazon Affiliate site</p>
      </div>
    );
  }
}

export default HomePage;
